import React from "react";
import "../MainPage/MainPage.css";

function ThirdBlock() {

    function enter(){
        window.location="/enter"
    }
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

        <img onClick={enter} className="btnOffer" src="images/btnOffer.png" />

      <div className="text5">Займёт не более 5 минут!</div>
    </div>
  );
}
export default ThirdBlock;
