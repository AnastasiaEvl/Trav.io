import React from "react";
import "../MainPage/MainPage.css";
import FirstBlock from "./FirstBlock";
import SecondBlock from "./SecondBlock";
import ThirdBlock from "./ThirdBlock";
import Slider from "./Slider";
import EcoNews from "./EcoNews";
import Footer from "./Footer";

function MainPage() {
  return (
    <div className="main">
      <FirstBlock />
      <SecondBlock />
      <ThirdBlock />
      <Slider />
      <EcoNews />
      <div className="button1">
        <a href="#">
          <img src="images/btnLookNews.png"></img>
        </a>
      </div>
      <Footer />
    </div>
  );
}

export default MainPage;
