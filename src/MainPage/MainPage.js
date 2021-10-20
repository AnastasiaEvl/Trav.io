import React from "react";
import "../MainPage/MainPage.css";
import FirstBlock from "./FirstBlock";
import SecondBlock from "./SecondBlock";

function MainPage() {
  return (
    <div className="main">
      <FirstBlock />
      <SecondBlock />
    </div>
  );
}

export default MainPage;
