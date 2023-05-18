import React from "react";
import Head from "next/head";

function Meta({ title, description }) {
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <link rel="icon" href="/favicon.ico" />
            {/* Add further meta tags below */}
        </Head>
    );
}
Meta.defaultProps = {
    title: "Project Name",
    description: "Project Description",
};

export default Meta;
