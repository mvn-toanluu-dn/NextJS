import React from "react";
import { Features } from "../../type/type";
interface FeaturesItemProps {
  item: Features;
}
const FeaturesItem = ({ item }: FeaturesItemProps) => {
  return (
    <li className="features-item flex col-6">
      <div className="features-item-img">
        <a className="features-item-link" href="/#">
          <item.src />
        </a>
      </div>
      <div className="features-item-info">
        <h4 className="features-item-title">
          <a href="/#">{item.title}</a>
        </h4>
        <p className="features-item-content">{item.content}</p>
        <div className="features-item-button">
        <a href="/#">
          {item.button}
        </a>
        </div>
      </div>
    </li>
  );
};

export default FeaturesItem;
