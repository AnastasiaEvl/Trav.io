import React from "react";
import "../MainPage/MainPage.css";

function EcoNews() {
  return (
    <div className="Newss">
      <div className="newsTitle">Новости в мире эко и Trav.io</div>
      <div className="news1">
        <img className="text_news1" src="images/text1.png"></img>
        <div className="text_news1_inner">
          <div className="title_eco_news1">Новости в мире эко и Trav.io</div>
          <div className="title_eco_news2">
            На этой неделе у нас прекрасные новости! За эту неделю на нашем
            портале принято и обработано более ...
          </div>
          <div className="link_eco1">
            <a style={{ color: "#1F3E1A", cursor: "pointer" }} href="#">
              Читать далее
            </a>
          </div>
        </div>
      </div>
      <div className="news2">
        <div className="inner_area_news2">
          <img src="images/apples.png" />
          <div className="title_eco_news6">Новости в мире эко и Trav.io</div>
          <div className="link_eco3">
            <a
              style={{
                color: "#1F3E1A",
                cursor: "pointer",
                textDecoration: "underline",
              }}
              href="#"
            >
              Читать далее
            </a>
          </div>
        </div>
        <div className="inner_area_news3">
          <img src="images/mountain.png" />
          <div className="title_eco_news6">Новости в мире эко и Trav.io</div>
          <div className="link_eco4">
            <a
              style={{
                color: "#1F3E1A",
                cursor: "pointer",
                textDecoration: "underline",
              }}
              href="#"
            >
              Читать далее
            </a>
          </div>
        </div>
      </div>
      <div className="news3">
        <img src="images/mountain.png" />
        <div className="title_eco_news4">Новости в мире эко и Trav.io</div>
        <div className="title_eco_news2">
          На этой неделе у нас прекрасные новости! За эту неделю на нашем
          портале принято и обработано более ...
        </div>
        <div className="link_eco1">
          <a style={{ color: "#1F3E1A", cursor: "pointer" }} href="#">
            Читать далее
          </a>
        </div>
      </div>
    </div>
  );
}
export default EcoNews;
