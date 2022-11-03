import React, { useEffect } from "react";
import { CountUp } from "../../../type/type";
const CountUpItem = (countup: CountUp) => {
  useEffect(() => {
    let valueDisplays: any = document.querySelectorAll(".choice-count-number");
    let interval = 500;
    valueDisplays.forEach(
      (valueDisplays: {
        textContent: number;
        getAttribute: (arg0: string) => string;
      }) => {
        let startValue = 0;
        let endValue = parseInt(valueDisplays.getAttribute("data-val"));
        let duration = Math.floor(interval / endValue);  
        let counter = setInterval(function () {
          startValue += 133;
          valueDisplays.textContent = startValue;
          if (startValue > endValue) {
            clearInterval(counter);
            valueDisplays.textContent = endValue;
          }
        }, duration);
      }
    );
  });
  return (
    <li className="choice-count-up flex col-4">
      <span className="choice-count-number" data-val={countup.countNumber}>
        2
      </span>
      <h4 className="choice-count-title">{countup.title}</h4>
    </li>
  );
};

export default CountUpItem;
