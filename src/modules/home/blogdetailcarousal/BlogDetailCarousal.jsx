import Slider from "react-slick";
import "../../../modules/home/slickCarousal/SlickCarousal.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './BlogDetailCarousal.css'
import SlickImg1 from "../../../assets/images/section3/images/slickImg1.svg";
import SlickImg2 from "../../../assets/images/section3/images/slickImg2.svg";
import SlickImg3 from "../../../assets/images/section3/images/slickImg3.svg";
import SlickImg4 from "../../../assets/images/section3/images/slickImg4.svg";
import Icon1 from "../../../assets/images/section3/icons/carousalimg-1.svg";
import Icon2 from "../../../assets/images/section3/icons/carousalimg-2.svg";
import Icon3 from "../../../assets/images/section3/icons/carousalimg-3.svg";
import Icon4 from "../../../assets/images/section3/icons/carousalimg-4.svg";
import CustomPrevArrow from "../customprevarrow/CustomPrevArrow";
import CustomNextArrow from "../customnextarrow/CustomNextArrow";


const BlogDetailCarousal = () => {
  const slickData = [
    {
      id: "1",
      image: SlickImg1,
      icon: Icon1,
      head: "Best LearnPress WordPress Theme Collection for 2023",
      courses: "9 Courses",
    },
    {
      id: "2",
      image: SlickImg2,
      icon: Icon2,
      head: "Best LearnPress WordPress Theme Collection for 2023",
      courses: "9 Courses",
    },
    {
      id: "3",
      image: SlickImg3,
      icon: Icon3,
      head: "Best LearnPress WordPress Theme Collection for 2023",
      courses: "9 Courses",
    },
    {
      id: "4",
      image: SlickImg4,
      icon: Icon4,
      head: "Best LearnPress WordPress Theme Collection for 2023",
      courses: "9 Courses",
    },
    {
      id: "4",
      image: SlickImg1,
      icon: Icon1,
      head: "Best LearnPress WordPress Theme Collection for 2023",
      courses: "9 Courses",
    },
    {
      id: "4",
      image: SlickImg2,
      icon: Icon2,
      head: "Best LearnPress WordPress Theme Collection for 2023",
      courses: "9 Courses",
    },
  ];
  var settings = {
    dots: false,
    infinite: true,
    // autoplay: true,
    // autoplaySpeed: 2000,
    speed: 500,
    navigation:true,
    slidesToShow: 2,
    slidesToScroll: 1,
    // prevArrow: <CustomPrevArrow/>,
    // nextArrow: <CustomNextArrow/>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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
    <div className="carousal-cls">
    <Slider {...settings}>
      {slickData.map((items) => (
        <div key={items.id} className="slick-contain">
          <div className="slides">
            
            <div className="contents">
            <p className="mt-5">Prev Articles</p>
              <h5>{items.head}</h5>
            </div>
          </div>
        </div>
      ))}
    </Slider>
    </div>
  );
};
export default BlogDetailCarousal;
