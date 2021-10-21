import React from "react";
import "../MainPage/MainPage.css";

function SecondBlock() {
  return (
    <div className="smallLogos">
      <div className="tree">
        <img src="images/tree.svg"></img>
        <div className="textTree">
          Размещайте заявки на переработку разных групп отходов
        </div>
      </div>
      <div className="tree">
        <img src="images/factory.svg"></img>
        <div className="textTree">
          В оператиный срок получайте отклик от перерабатывающих организаций
        </div>
      </div>
      <div className="tree">
        <img src="images/bag.png"></img>
        <div className="textTree">
          Выбирайте наиболее выгодные предложения по вашим критериям
        </div>
      </div>
      <div className="tree">
        <img src="images/hands.svg"></img>
        <div className="textTree">
          TraVio поможет определить другие виды отходов и конвертировать их в
          деньги
        </div>
      </div>
      <div className="tree">
        <img src="images/lamp.svg"></img>
        <div className="textTree">
          Накапливайте бонусные баллы и получайте скидки на экотовары у наших
          партнёров
        </div>
      </div>
    </div>
  );
}

export default SecondBlock;
