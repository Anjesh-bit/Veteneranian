import "./css/PictureSliderSection.css";
import { vetSliderData } from "../data/Data";
import useImageSlider from "../hooks/ImageSliderHook";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PictureSliderSection = () => {
  //in case if we want to use handlenext and prev button and use vetSliderData.slice(index,index+3).map(()=>{})
  // const { handleNext, handlePrev, index } = useImageSlider(0, vetSliderData);

  //used slick carousal
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,

          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="app_picture_slider_section_wrapper">
      <div className="app_picture_slider_top_wrapper">
        <div className="top_section_description">
          <h1>The vetcare team</h1>
          <p>This is a vetcare page, where all the pets.</p>
        </div>
      </div>
      <div className="app_picture_slider_bottom_wrapper">
        <div className="slider_container_wrapper">
          <Slider {...settings}>
            {vetSliderData?.map((sliderData, indexi) => (
              <div className="main_container" key={indexi + 5}>
                <div className="image_slider_container">
                  <img src={sliderData.image} alt={`vetimages+${indexi}`} />
                </div>
                <div className="description_section">
                  <h2>{sliderData.name}</h2>
                  <p>{sliderData.description}</p>
                </div>
                <div className="socials_main_wrapper">
                  {sliderData.socails?.map((social, indexj) => (
                    <div className="socials_wrapper" key={indexj + 2}>
                      <ul>
                        <li style={{ color: "#daac00" }}>{social.socialcon}</li>
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* <div className="btn_group">
        <ChevronLeftRoundedIcon onClick={handlePrev} />
        <ChevronRightRoundedIcon onClick={handleNext} />
      </div> */}
    </div>
  );
};

export default PictureSliderSection;
