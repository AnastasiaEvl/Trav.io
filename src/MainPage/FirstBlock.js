import React from "react";
import "../MainPage/MainPage.css";
import Form from "../MainPage/Form";

function FirstBlock() {
  return (
    <div>
      <img className="Lines" src="./images/mainLines.svg" />
      <div className="navBar1">
        <a href="#">
          <img className="inst" src="./images/instLogo.svg" />
        </a>
        <a href="#">
          <img className="tel" src="./images/telLogo.svg" />
        </a>
        <a href="#">
          <img className="btn1" src="./images/btnCreateOffer.svg" />{" "}
        </a>

        <a className="Reg" href="#">
          Регистрация
        </a>
        <a href="#">
          <img className="Enter" src="./images/enter.svg" />{" "}
        </a>

        <img className="mainLogo" src="./images/mainLogo.svg" />

        <div className="navBar2">
          <a href="#">
            <div className="about">О проекте</div>{" "}
          </a>
          <a href="#">
            <div className="list">Список переработчиков</div>{" "}
          </a>
          <a href="#">
            {" "}
            <div className="map">Интерактивная карта</div>{" "}
          </a>
          <a href="#">
            {" "}
            <div className="goods">Экотовары</div>{" "}
          </a>
          <a href="#">
            {" "}
            <div className="faq">FAQ</div>{" "}
          </a>
          <a href="#">
            <div className="news">Новости</div>{" "}
          </a>
          <a href="#">
            <div className="contacts">Контакты</div>{" "}
          </a>
          <div className="img">
            <Form />
          </div>
        </div>
        <div className="text1">
          <b>TraVio</b> - автоматизированное решение, призванное упростить
          процесс переработки отходов для предприятий
        </div>
        <div>
          <img className="bigLogo" scr="./images/mainLogo.svg" />
        </div>
        <a href="#">
          <img className="btnAdd" src="./images/btnAdd.svg" />{" "}
        </a>
      </div>
    </div>
  );
}

export default FirstBlock;
