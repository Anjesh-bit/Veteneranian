import "./css/PictureSliderSection.css";
import { vetSliderData } from "../data/Data";
import { useDispatch, useSelector } from "react-redux";

const PictureSliderSection = () => {
  const dispatch = useDispatch();

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
        </div>
      </div>
    </div>
  );
};

export default PictureSliderSection;
