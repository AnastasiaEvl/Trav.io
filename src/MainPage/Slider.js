import React from "react";
import InfiniteCarousel from "react-leaf-carousel";

function Slider() {
  return (
    <div className="carousel">
      <div className="partners">Наши партнеры</div>

      <div
        style={{
          position: "absolute",
          width: "76.7%",
          marginTop: "199px",
          marginLeft: "11.46%",
        }}
      >
        {" "}
        <InfiniteCarousel
          breakpoints={[
            {
              breakpoint: 500,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              },
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
              },
            },
          ]}
          dots={false}
          showSides={true}
          sidesOpacity={0.5}
          sideSize={0.1}
          slidesToScroll={3}
          slidesToShow={3.1}
          scrollOnDevice={true}
        >
          <div>
            <img alt="" src="images/empty.png" />
          </div>
          <div>
            <img alt="" src="images/empty.png" />
          </div>
          <div>
            <img alt="" src="images/empty.png" />
          </div>
          <div>
            <img alt="" src="images/empty.png" />
          </div>
          <div>
            <img alt="" src="images/empty.png" />
          </div>
          <div>
            <img alt="" src="images/empty.png" />
          </div>
        </InfiniteCarousel>
      </div>
    </div>
  );
}

export default Slider;
