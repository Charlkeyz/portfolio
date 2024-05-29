/* eslint-disable react/prop-types */
import React, { useState } from "react";
import "./MyWork.css";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import theme_pattern from "/imageFolder/theme_pattern.svg";
import mywork_data from "../../../public/imageFolder/mywork_data";
// import { IoIosArrowBack } from "react-icons/io";
// import { IoIosArrowForward } from "react-icons/io";
const MyWork = ({ slides }) => {
  // const slideStyles = {
  //   width: "100%",
  //   height: "100%",
  //   borderRadius: "10px",
  //   backgroundSize: "contain",
  //   backgroundPosition: "center",
  //   backgroundRepeat: "no-repeat",
  //   cursor: "pointer",
  // };

  // const rightArrowStyles = {
  //   position: "absolute",
  //   top: "50%",
  //   transform: "translate(0, -50%)",
  //   right: "32px",
  //   fontSize: "45px",
  //   color: "#df8908",
  //   zIndex: 1,
  //   cursor: "pointer",
  // };

  // const leftArrowStyles = {
  //   position: "absolute",
  //   top: "50%",
  //   transform: "translate(0, -50%)",
  //   left: "32px",
  //   fontSize: "45px",
  //   color: "#df8908",
  //   zIndex: 1,
  //   cursor: "pointer",
  // };

  // const sliderStyles = {
  //   position: "relative",
  //   height: "100%",
  // };

  // const dotsContainerStyles = {
  //   display: "flex",
  //   justifyContent: "center",
  // };

  // const dotStyle = {
  //   margin: "0 3px",
  //   cursor: "pointer",
  //   fontSize: "20px",
  //   borderRadius: "50%",
  //   width: "10px",
  //   height: "10px",
  //   marginTop: "20px",
  // };

  // const [currentIndex, setCurrentIndex] = useState(0);
  // const goToPrevious = () => {
  //   const isFirstSlide = currentIndex === 0;
  //   const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
  //   setCurrentIndex(newIndex);
  // };
  // const goToNext = () => {
  //   const isLastSlide = currentIndex === slides.length - 1;
  //   const newIndex = isLastSlide ? 0 : currentIndex + 1;
  //   setCurrentIndex(newIndex);
  // };
  // const goToSlide = (slideIndex) => {
  //   setCurrentIndex(slideIndex);
  // };
  // const slideStylesWidthBackground = {
  //   ...slideStyles,
  //   backgroundImage: `url(${slides[currentIndex].url})`,
  // };
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <React.Fragment>
      <main className="flex flex-col items-center">
        <div className="mywork-title">
          <h1>My latest work</h1>
          <img src={theme_pattern} alt="" />
        </div>
        <ul className="mywork-container flex flex-col items-center">
          <Slider {...settings} className="w-[25vw] md:w-screen md:overflow-hidden">
            {
              mywork_data.map((workSlide, index)=> {
                const {w_name, w_img, linkto} = workSlide;
                return(
                  <li key={index}>
                    <a href={linkto}>
                      <img src={w_img} alt="image" />
                    </a>
                    <h2 className="text-center mt-3">{w_name}</h2>
                  </li>
                )
              })
            }
          </Slider>
        </ul>
      </main>

      {/* <div className="mywork-title">
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
        <a
          href={slides[currentIndex].linkto}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div style={slideStylesWidthBackground}></div>
        </a>
        <h1 className="names">{slides[currentIndex].names}</h1>
        <div style={dotsContainerStyles}>
          {slides.map((slide, slideIndex) => (
            <div
              
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              style={{
                ...dotStyle,
                backgroundColor:
                  currentIndex === slideIndex ? "white" : " #df8908",
              }}
            ></div>
          ))}
        </div>
      </div> */}
    </React.Fragment>
  );
};

export default MyWork;
