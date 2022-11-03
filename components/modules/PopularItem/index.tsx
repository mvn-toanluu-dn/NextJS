import React from "react";
import Image from "next/image";
import { Popular } from "../../../type/type";
import { AiOutlineShoppingCart } from "react-icons/ai";
const PopularItem = ({ popular }: { popular: Popular }) => {
  return (
    <li className="popular-item col-3">
      <div className="popular-image">
        <Image
          src={popular.image}
          alt={popular.image}
          width="270"
          height="193"
          loading="eager"
        />
        <span className="popular-categories">{popular.categories}</span>
      </div>
      <div className="popular-info">
        <h5 className="popular-title">{popular.title}</h5>
        <span className="popular-duration">{popular.time}</span>
        <span className="popular-price">{popular.price}</span>
      </div>
      <div className="popular-hover-mask"></div>
      <div className="popular-hover-content">
        <h5 className="popular-hover-title">{popular.title}</h5>
        <p className="popular-hover-text">
          {/* {popular.contentHover.length > 150
            ? popular.contentHover.substring(0, 130)
            : popular.contentHover} */}
            {popular.contentHover}
        </p>
        <div className="popular-hover-icon">
          <a className="popular-hover-more" href="/#">
            MORE INFO
          </a>
          <a className="popular-hover-cart" href="/#">
            <i className="popular-hover-cart-icon">
              <AiOutlineShoppingCart />
            </i>
          </a>
        </div>
      </div>
    </li>
  );
};

export default PopularItem;
