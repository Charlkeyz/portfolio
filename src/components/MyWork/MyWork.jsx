import React from "react";
import "./MyWork.css";
import theme_pattern from "/imageFolder/theme_pattern.svg";
import mywork_data from "../../../public/imageFolder/mywork_data";
import arrow_icon from "/imageFolder/arrow_icon.svg";
const MyWork = () => {
  return (
    <div className="mywork">
      <div className="mywork-title">
        <h1>My latest work</h1>
        <img src={theme_pattern} alt="image" />
      </div>
      <div className="mywork-container">
        {mywork_data.map((work, index) => {
          return <img key={index} src={work.w_img} alt="mywork" />;
        })}
      </div>
      <div className="mywork-showmore">
        <p>show more</p>
        <img src={arrow_icon} alt="image" />
      </div>
    </div>
  );
};

export default MyWork;
