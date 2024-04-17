import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./TestimonialCarousal.css";
import CarosalProfile from "../../../assets/images/section5/images/carousal-profile-img1.svg";
import LeftQuotation from "../../../assets/images/section5/icons/left-quotation.svg";
import RightQuotation from "../../../assets/images/section5/icons/right-quotation.svg";

const TestimonialCarousal = () => {
  const carousalData = [
    {
      id: "1",
      image: CarosalProfile,
      name: "Jenny Wilson",
      designation: "SEO Expert",
      para: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
    },
    {
      id: "2",
      image: CarosalProfile,
      name: "Jenny Wilson",
      designation: "SEO Expert",
      para: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
    },
    {
      id: "3",
      image: CarosalProfile,
      name: "Jenny Wilson",
      designation: "SEO Expert",
      para: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
    },
    {
      id: "4",
      image: CarosalProfile,
      name: "Jenny Wilson",
      designation: "SEO Expert",
      para: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
    },
  ];

  var settings = {
    dots: true,
    // autoplay: true,
    // autoplaySpeed: 2000,
    infinite: true,
    centerMode: true,
    centerPadding: "25%",
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 2000,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          // dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          // dots: true,
          centerMode:false
        },
      },
      // {
      //   breakpoint: 992,
      //   settings: {
      //     slidesToShow: 1,
      //     slidesToScroll: 1,
      //     centerMode:false
      //   },
      // },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode:false
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode:false
        },
      },
    ],
  };
  return (
    <div className="container-6">
      <Slider {...settings}>
        {carousalData.map((items) => (
          <div className="testimonial-container" key={items.id}>
            <div className="inner-contents">
              <img src={LeftQuotation} alt="" className="left-quotation" />
              <img src={items.image} alt="" className="testimonial-img" />
              <h3 className="name-section">{items.name}</h3>
              <h4>{items.designation}</h4>
              <p className="text-center mt-3">{items.para}</p>
              <img src={RightQuotation} alt="" className="right-quotation" />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
export default TestimonialCarousal;
