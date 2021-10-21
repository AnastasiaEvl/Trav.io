import React from "react";
import "../MainPage/MainPage.css";

function Footer() {
  return (
    <div className="footer">
      <div className="fo">
        <img src="images/smallLogoFooter.png"></img>
      </div>
      <a href="#">
        <div className="one">
          <img src="images/2021.png"></img>
        </div>
      </a>
      <a href="#">
        <div className="two">Правила использования сайта</div>
      </a>
      <a href="#">
        <div className="three">Политика конфиденциальности</div>
      </a>
      <a href="#">
        <div className="four">Контакты</div>
      </a>
    </div>
  );
}

export default Footer;
