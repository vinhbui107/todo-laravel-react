/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

require("./bootstrap");

/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

import React from "react";
import { render } from "react-dom";
import { Router, Route, browserHistory } from "react-router";

import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";

render(
    <Router history={browserHistory}>
        <Route path="/" component={Home}>
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
        </Route>
    </Router>,
    document.getElementById("app")
);

ReactDOM.render(<App />, document.getElementById("app"));
