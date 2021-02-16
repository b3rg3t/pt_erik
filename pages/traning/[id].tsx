import Layout from "../../components/LayoutFolder/Layout";
import { SEOdata } from "../../helpers/helpdata";
import { BASE_URL, headers } from "../../config/config";
import TrainingBlock from "../../components/TrainingBlockFolder/TrainingBlock";
import Loading from "../../components/loading";
import fetch from "isomorphic-unfetch";
import { typescriptobj } from "../../helpers/typescriptobj";

export const config = { amp: "hybrid" };

interface PostProps {
  response: {
    allTranings: [typescriptobj];
  };
}

const Post = ({ response }: PostProps): React.ReactElement => {
  console.log(response);
  return (
    <Layout
      title={`${SEOdata.title} | ${
        response?.allTranings[0] ? response.allTranings[0].title : ""
      }`}
      navbar={true}
      //@ts-ignore
      logo={response?.logo?.pageLogo}
    >
      {response?.allTranings ? (
        <TrainingBlock profiles={response?.allTranings} />
      ) : (
        <Loading />
      )}
    </Layout>
  );
};

Post.getInitialProps = async (context): Promise<{}> => {
  let response;
  const { id } = context.query;
  try {
    response = await fetch(BASE_URL, {
      method: "POST",
      headers,
      body: JSON.stringify({
        query: `query GetAllData {
              logo {
                pageLogo {
                  alt
                  url
                }
              }
              allTranings(filter: {id: {eq: ${id}}}) {
                id
                opacity
                overlaycolor {
                  hex
                }
                picposition
                secondtext
                button
                imageafter
                roundedimage
                buttontext
                bottomtext
                tags
                routepage
                textcolor {
                  hex
                }
                backgroundimage {
                  url
                  width
                  height
                  alt
                }
                smallimage {
                  alt
                  url
                  width
                  height
                }
                title
                toptext
                }
            }
            `,
      }),
    });
    response = await response.json();
  } catch (error) {
    console.error(error);
  }
  return { response: response?.data ? response.data : "" };
};
export default Post;
