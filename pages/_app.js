import "../styles/globals.css";

//Components
import Layout from "@components/Layout/Layout";
import Meta from "@components/Layout/metaData";
//Contexts
import { GlobalDataProvider } from "@contexts/GlobalData";

function MyApp({ Component, pageProps }) {
    return (
        <GlobalDataProvider>
            <Meta />
            {/* Layout component */}
            <Layout pageProps={pageProps}>
                <Component {...pageProps} />
            </Layout>
        </GlobalDataProvider>
    );
}

export default MyApp;
