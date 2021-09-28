import React from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import FormEnter from "./formEnter";
import SignUp from "./SignUp/SignUp"

function Layout(){
    return(
        <Router>
        <Switch>
            <Route exact path="/" render={()=><FormEnter/>}/>
            <Route path="/signUp" render={()=><SignUp/>}/>
        </Switch>
        </Router>
    )
}
   export default Layout;