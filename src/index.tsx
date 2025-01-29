import React from "react";
import ReactDOM from "react-dom/client";
import { Global, css } from "@emotion/react";
import App from "./App";

const globalStyles = css`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Archivo", sans-serif;
        outline: none;
    }
`;

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <React.StrictMode>
        <Global styles={globalStyles} />
        <App />
    </React.StrictMode>
);
