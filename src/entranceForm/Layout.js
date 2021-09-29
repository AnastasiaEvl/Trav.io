import React from "react";
import {
    BrowserRouter, 
    BrowserRouter as Router, 
    Switch, 
    Route,} from 'react-router-dom';
import FormEnter from "./formEnter";
import SignUp from "./SignUp/SignUp"

function Layout(){
    return(
        <BrowserRouter>
        
        <Route exact path="/" render={()=><FormEnter/>}/>
        <Route path="/signUp" render={()=><SignUp/>}/>
        

        </BrowserRouter>

    )
}
   export default Layout;