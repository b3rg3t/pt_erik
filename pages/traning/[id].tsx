import Layout from '../../components/LayoutFolder/Layout';
import { SEOdata } from "../../helpers/helpdata";
import { BASE_URL, headers } from "../../config/config";
import TrainingBlock from '../../components/TrainingBlockFolder/TrainingBlock';
import Loading from '../../components/loading';

export const config = { amp: "hybrid" };

const Post = (props: any) => {
  console.log("props training", props);
  return (
    <Layout title={`${SEOdata.title} | ${props?.response?.data?.allTranings[0] ? props.response.data.allTranings[0].title : ""}`} navbar={true}>
      {props?.response?.data?.allTranings ?
        <TrainingBlock profiles={props?.response?.data?.allTranings} />
        : <Loading />}
    </Layout>
  );
}


Post.getInitialProps = async (context): Promise<{}> => {
  let response;
  const { id } = context.query;
  console.log(id);
  try {
    response = await fetch(BASE_URL, {
      method: "POST",
      headers,
      body: JSON.stringify({
        query: `query GetAllData {
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
            `
      })
    });
    response = await response.json();
  } catch (error) {
    console.error(error);
  }
  return { response };
};
export default Post;