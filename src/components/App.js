import React from "react";
//react-router-dom and imports for navigation 
//importing switch as the stream new and stream show are showing on same screen
import { Router, Route, Switch } from "react-router-dom";
//importing history
import history from "../history";
import Box from "./Box";
import Smile from "./Smile";
import Quit from "./Quit";
import Distress from "./Distress";

const App = () => {
    return (
        <div class="container-fluid">
            <div class="row d-flex justify-content-center m-2">
                <Router history={history}>
                    <Switch>
                        <Route path="/" exact component={Box}/>
                        <Route path="/smile" exact component={Smile}/>
                        <Route path="/quit" exact component={Quit}/>
                        <Route path="/distress" exact component={Distress}/>
                    </Switch>
                </Router>
            </div>
        </div>
    );
}

export default App;