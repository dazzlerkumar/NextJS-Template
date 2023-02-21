import React from "react";
import Headd from "next/head";

function Head() {
    return (
        <Headd>
            <title>Project</title>
            <meta name="description" content="something" />
            <link rel="icon" href="/favicon.ico" />
        </Headd>
    );
}

export default Head;
