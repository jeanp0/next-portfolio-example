import Layout from "../components/Layout";

import React from "react";

const Error = ({ status }) => {
  return (
    <Layout>
      <div className="text-center">
        <h1>{status || ":("}</h1>
        <p>Could not load your page</p>
      </div>
    </Layout>
  );
};

export default Error;
