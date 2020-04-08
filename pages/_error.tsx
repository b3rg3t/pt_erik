import Layout from "../components/LayoutFolder/Layout";
import { SEOdata, blockHeight } from "../helpers/helpdata";


function Error({ statusCode }) {
    return (
        <Layout title={`${SEOdata.title} | ${statusCode ? statusCode : 'Error'}`} navbar={true}>
            <div style={{
                minHeight: blockHeight.height,
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <p>
                    {statusCode
                        ? `An error ${statusCode} occurred on server`
                        : 'An error occurred on client'}
                </p>
            </div>
        </Layout>
    )
}

Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    return { statusCode }
}

export default Error