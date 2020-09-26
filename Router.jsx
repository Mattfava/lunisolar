import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Landing from "./src/compenents/homepage.jsx";
import Home from "./src/compenents/loadingtext.jsx";


export default function Paths(){
    return(
        <Router>
            <Route exact path="/">
                <Landing />
            </Route>
            <Route exact path="/home">
                <Home />
            </Route>
        </Router>
    )
}