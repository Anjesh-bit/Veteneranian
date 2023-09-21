import { postsData } from "../data/Data";
import "./css/EigthSection.css";

const EigthSection = () => {
  return (
    <div className="app_top_eight_wrapper">
      <div className="app_title_wrapper">
        <h1>Recent Posts</h1>
        <p>This is the recent post from the vet doctors.</p>
      </div>
      <div className="app_card_wrapper">
        {postsData?.map((data, index) => (
          <div className="posts_container" key={index + 2}>
            <div className="post_image_container">
              <img src={data.picture} alt={`vet+${index}`} />
            </div>
            <div className="post_list_container">
              <ul>
                <li>
                  <h2>{data.header}</h2>
                </li>
                <li>
                  <small style={{ color: "#00bec9" }}>{data.date}</small>
                </li>
                <li>
                  <small style={{ color: "#313243" }}>{data.paragraph}</small>
                </li>
                <li>{data.button}</li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EigthSection;
