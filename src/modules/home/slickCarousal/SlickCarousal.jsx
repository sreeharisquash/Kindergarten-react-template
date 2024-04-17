import Slider from "react-slick";
import "./SlickCarousal.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SlickImg1 from "../../../assets/images/section3/images/slickImg1.svg";
import SlickImg2 from "../../../assets/images/section3/images/slickImg2.svg";
import SlickImg3 from "../../../assets/images/section3/images/slickImg3.svg";
import SlickImg4 from "../../../assets/images/section3/images/slickImg4.svg";
import Icon1 from "../../../assets/images/section3/icons/carousalimg-1.svg";
import Icon2 from "../../../assets/images/section3/icons/carousalimg-2.svg";
import Icon3 from "../../../assets/images/section3/icons/carousalimg-3.svg";
import Icon4 from "../../../assets/images/section3/icons/carousalimg-4.svg";


const SlickCarousal = () => {
  const slickData = [
    {
      id: "1",
      image: SlickImg1,
      icon: Icon1,
      head: "Business Analysis",
      courses: "9 Courses",
    },
    {
      id: "2",
      image: SlickImg2,
      icon: Icon2,
      head: "Business Analysis",
      courses: "9 Courses",
    },
    {
      id: "3",
      image: SlickImg3,
      icon: Icon3,
      head: "Business Analysis",
      courses: "9 Courses",
    },
    {
      id: "4",
      image: SlickImg4,
      icon: Icon4,
      head: "Business Analysis",
      courses: "9 Courses",
    },
    {
      id: "4",
      image: SlickImg1,
      icon: Icon1,
      head: "Business Analysis",
      courses: "9 Courses",
    },
    {
      id: "4",
      image: SlickImg2,
      icon: Icon2,
      head: "Business Analysis",
      courses: "9 Courses",
    },
  ];
  var settings = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    // centerMode: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          // dots: true,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          // initialSlide: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          // initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          // initialSlide: 2,
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
    <div style={{maxWidth:"100%" }}>
    <Slider {...settings}>
      {slickData.map((items) => (
        <div key={items.id} className="slick-contain" >
          <div className="slides">
            <div className="img-icon">
                <img
                  src={items.image}
                  alt=""
                  className="carousal-img"
                />
          
              <img src={items.icon} alt="" className="carousal-icon" />
            </div>
            <div className="contents">
              <h5 className="text-center">{items.head}</h5>
              <a href="">
                <p className="text-center">9 Courses</p>
              </a>
            </div>
          </div>
        </div>
      ))}
    </Slider>
    </div>
  );
};
export default SlickCarousal;
