import React from "react";
import {
  BrowserRouter,
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import FormEnter from "./formEnter";
import ForOrganization from "./PersonalArea/ForOrganization";
import MainPage from "../MainPage/MainPage";

function Layout() {
  return (
    <BrowserRouter>
      <Route exact path="/" render={() => <FormEnter />} />
      <Route path="/signUp" render={() => <ForOrganization />} />
      <Route path="/main" render={() => <MainPage />} />
    </BrowserRouter>
  );
}
export default Layout;
