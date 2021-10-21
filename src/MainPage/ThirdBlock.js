import React from "react";
import "../MainPage/MainPage.css";

function ThirdBlock() {
  return (
    <div className="green">
      <img className="g" src="images/green.svg" />
      <div>
        <img className="wlogo" src="images/whiteLogo.png" />
      </div>
      <div className="offerText1">
        Разместите заявку на переработку отходов и выберите наиболее удобное и
        выгодное для вас предложение
      </div>
      <a href="#">
        <img className="btnOffer" src="images/btnOffer.png" />
      </a>
      <div className="text5">Займёт не более 5 минут!</div>
    </div>
  );
}
export default ThirdBlock;
