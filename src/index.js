import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";
import Menu from "./Components/Menu";
import * as serviceWorker from "./serviceWorker";
import Routes from "./Components/Routes";

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Menu />
            <Routes />
        </Router>
    </React.StrictMode>,
    document.getElementById("root")
);

serviceWorker.unregister();
