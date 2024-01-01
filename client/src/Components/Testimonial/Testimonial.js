import React from "react";
import Slider from "react-slick";
import "./Testimonial.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import t1 from "./Testimonial-Image/t1.jpg";
import t2 from "./Testimonial-Image/t2.jpg";
import t3 from "./Testimonial-Image/t3.jpg";
import t4 from "./Testimonial-Image/t4.jpg";
import t5 from "./Testimonial-Image/t5.jpg";
import t6 from "./Testimonial-Image/t6.jpg";
const Testimonial = () => {
  const data = [
    {
      name: "Math Jones",
      position: "Project Manager",
      feedback:
        "Firstly, I want to acknowledge your dedication and hard work. ",
      img: t1,
    },
    {
      name: "Josh Burns",
      position: "UI/Ux Designer",
      feedback:
        "I am confident that with your strong work ethic and willingness to learn and grow , you will be Great",
      img: t2,
    },
    {
      name: "Charles Joseph",
      position: "Frontend Developer",
      feedback:
        "To further enhance your performance, I encourage you to work on improving your time management skills.",
      img: t3,
    },
    {
      name: "Anthony Mathew",
      position: "Project Supervisor",
      feedback:
        "I encourage you to take more initiative and showcase your leadership potential.",
      img: t4,
    },
    {
      name: "Setphen Paul",
      position: "Full Stack Developer",
      feedback:
        "your positive attitude and willingness to take on new challenges have helped foster a positive work environment.",
      img: t5,
    },
    {
      name: "Kevin Joshua",
      position: "Backend Developer",
      feedback:
        "Your commitment to meeting deadlines and delivering high-quality work has been commendable.",
      img: t6,
    },
  ];

  var settings = {
    dots: true,
    infinite: true,
    speed: 1300,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container testimonial-section" id="testimonial">
      <div className="section-title">
        <h5>Testimonial</h5>
        <span className="line line-testi"></span>
      </div>
      <div className="testimonial-slider">
        <Slider {...settings}>
          {data.map((item, index) => (
            <div className="content-slider-container">
              <div className="content-slider" key={index}>
                <img src={item.img} alt="" className="testimonial-img" />
                <p>{item.feedback}</p>
                <p>{item.name}</p>
                <p>{item.position}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;
