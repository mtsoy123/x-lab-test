import React from "react";
import ReactDOM from "react-dom/client";
import "./vendor/styles/index.scss";
import App from "./components/App/App.tsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
