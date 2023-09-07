import React from "react";
import ReactDOM from "react-dom/client";
import { Layout } from "~/Layout";
import { App } from "~/App";
import "~/styles/global.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Layout>
      <App />
    </Layout>
  </React.StrictMode>
);
