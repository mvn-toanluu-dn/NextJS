import React from "react";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";
import "animate.css";
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});
function Intro() {
  return (
      <section className="section-intro">
        <OwlCarousel className="owl-theme" loop margin={10} items={1}>
          <div className="background-slider bg1">
            <div className="title">
              <h6 className="sub-title">Studeon Innovative & Succesful</h6>
              <h2 className="main-title">ONLINE COURSES</h2>
              <button className="btn btn-title">MORE COURSES</button>
            </div>
          </div>
          <div
            className="background-slider bg2"
          >
            <div className="title">
              <h6 className="sub-title">Studeon Innovative & Succesful</h6>
              <h2 className="main-title">ONLINE COURSES</h2>
              <button className="btn btn-title">MORE COURSES</button>
            </div>
          </div>
          <div className="background-slider  bg3">
            <div className="title">
              <h6 className="sub-title">Studeon Innovative & Succesful</h6>
              <h2 className="main-title">ONLINE COURSES</h2>
              <button className="btn btn-title">MORE COURSES</button>
            </div>
          </div>
        </OwlCarousel>
      </section>
  );
}

export default Intro;
