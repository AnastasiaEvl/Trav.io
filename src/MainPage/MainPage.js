import React from "react";
import "../MainPage/MainPage.css";
import FirstBlock from "./FirstBlock";
import SecondBlock from "./SecondBlock";
import ThirdBlock from "./ThirdBlock";
import Slider from "./Slider";

function MainPage() {
  return (
    <div className="main">
      <FirstBlock />
      <SecondBlock />
      <ThirdBlock />
      <Slider />
    </div>
  );
}

export default MainPage;
