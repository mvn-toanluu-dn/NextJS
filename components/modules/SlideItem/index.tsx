import React from "react";
import { Slide } from "../../../type/type";

const SlideItem = ({slide} : {slide :Slide}) => {
    
  return (
    <div className={slide.className}>
      <div className="title">
        <h6 className="sub-title">{slide.subtitle}</h6>
        <h2 className="main-title">{slide.maintitle}</h2>
        <button className="btn btn-title">{slide.btntitle}</button>
      </div>
    </div>
  );
};

export default SlideItem;
