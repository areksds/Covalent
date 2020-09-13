import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import history from "./../history";
import Menu from "./Menu";
import GamesMenu from "./GamesMenu";

class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route exact path="/" component={Menu}></Route>
                    <Route path="/host" component={GamesMenu}></Route>
                </Switch>
            </Router>
        );
    }
}

export default Routes;
