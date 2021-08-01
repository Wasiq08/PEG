import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import DashboardComponent from './components/dashboard';
import RegistrationComponent from './components/registration';
import Submission from "./components/submission";

export default function Routes() {
    return (
        <Router>
            <div>
                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/registration">
                        <RegistrationComponent />
                    </Route>
                    <Route path="/submission">
                        <Submission />
                    </Route>
                    <Route path="/">
                        <DashboardComponent />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}