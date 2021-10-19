import React from "react";
import "../MainPage/MainPage.css";

function FirstBlock() {
  return (
    <div>
      <img className="Lines" src="./images/mainLines.svg" />
      <div className="navBar1">
        <img className="inst" src="./images/instLogo.svg" />
        <img className="tel" src="./images/telLogo.svg" />
        <img className="btn1" src="./images/btnCreateOffer.svg" />

        <a className="Reg" href="#">
          Регистрация
        </a>
        <img className="Enter" src="./images/enter.svg" />

        <img className="mainLogo" src="./images/mainLogo.svg" />

        <div className="navBar2">
          <div className="about">О проекте</div>
          <div className="list">Список переработчиков</div>
          <div className="map">Интерактивная карта</div>
          <div className="goods">Экотовары</div>
          <div className="faq">FAQ</div>
          <div className="news">Новости</div>
          <div className="contacts">Контакты</div>
          <div className="img">
            <img src="./images/Search.svg" />
          </div>
        </div>
        <div className="text1">
          <b>TraVio</b> - автоматизированное решение, призванное упростить
          процесс переработки отходов для предприятий
        </div>
        <div>
          <img className="bigLogo" scr="./images/bigLogo2.svg" />
        </div>
        <img className="btnAdd" src="./images/btnAdd.svg" />
      </div>
    </div>
  );
}

export default FirstBlock;
