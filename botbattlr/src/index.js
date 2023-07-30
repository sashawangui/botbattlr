import React from "react";
import {createRoot} from "react-dom/client"
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";

import "./style/App.css"


let nodeRoot = document.getElementById("root");
let root = createRoot(nodeRoot);
root.render(
<BrowserRouter>
    <App />
</BrowserRouter>
)