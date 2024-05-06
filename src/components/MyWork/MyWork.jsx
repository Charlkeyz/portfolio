import React, { useState } from "react";
import "./MyWork.css";
// import mywork_data from "../../../public/imageFolder/mywork_data";
// import arrow_icon from "/imageFolder/arrow_icon.svg";
import theme_pattern from "/imageFolder/theme_pattern.svg";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
const MyWork = ({ slides }) => {
  const slideStyles = {
    width: "100%",
    height: "100%",
    borderRadius: "10px",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const rightArrowStyles = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    right: "32px",
    fontSize: "45px",
    color: "#fff",
    zIndex: 1,
    cursor: "pointer",
  };

  const leftArrowStyles = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    left: "32px",
    fontSize: "45px",
    color: "#fff",
    zIndex: 1,
    cursor: "pointer",
  };

  const sliderStyles = {
    position: "relative",
    height: "100%",
  };

  const dotsContainerStyles = {
    display: "flex",
    justifyContent: "center",
  };

  const dotStyle = {
    margin: "0 3px",
    cursor: "pointer",
    fontSize: "20px",
    borderRadius: "50%",
    width: "10px",
    height: "10px",
    marginTop: "20px",
  };

  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  const slideStylesWidthBackground = {
    ...slideStyles,
    backgroundImage: `url(${slides[currentIndex].url})`,
  };

  return (
    <React.Fragment>
      <div className="mywork-title">
        <h1>My latest work</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div style={sliderStyles}>
        <div>
          <div onClick={goToPrevious} style={leftArrowStyles}>
            <IoIosArrowBack />
          </div>
          <div onClick={goToNext} style={rightArrowStyles}>
            <IoIosArrowForward />
          </div>
        </div>
        <div style={slideStylesWidthBackground}></div>
        <div style={dotsContainerStyles}>
          {slides.map((slide, slideIndex) => (
            <div
              // style={dotStyle}
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              style={{
                ...dotStyle,
                backgroundColor: currentIndex === slideIndex ? "red" : "green",
              }}
            ></div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default MyWork;
