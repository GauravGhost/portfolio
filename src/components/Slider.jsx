import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProjectSlider = ({ children, dot = false, infinite = false, slidesToScroll = 2, slidesToShow = 2, swipeToSlide = false }) => {
  const settings = {
    dots: dot,
    infinite: infinite,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToScroll,
    swipeToSlide: swipeToSlide,
    
    pauseOnHover: true,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: slidesToShow,
          slidesToScroll: slidesToScroll,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="w-full">
      <Slider {...settings} >
        {React.Children.map(children, (child) => (
          <div>{child}</div>
        ))}
      </Slider>
    </div>
  );
};

export default ProjectSlider;