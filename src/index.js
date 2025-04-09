import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { Toaster } from "react-hot-toast";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<>
    <Toaster />
    <App />
</>
);
