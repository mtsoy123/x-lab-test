import React from "react";
import ReactDOM from "react-dom/client";
import "./vendor/styles/index.scss";
import App from "./components/App/App.tsx";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);
