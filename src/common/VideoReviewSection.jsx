import Button from "./Button";
import "./css/VideoReviews.css";

const VideoReviewSection = (props) => {
  const { video, className } = props;
  return (
    <div className="app_video_reviews_section_wrapper">
      <div className={`app_right_part ${className}`}>
        <h1>As a Veterinarian and lover of animals</h1>
        <p>
          Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
          ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
        </p>
        <Button btnText="Services" btnClassName="app_btn" />
      </div>
      <div className="app_left_part">
        This will play the video from vimeo by using lightwork
      </div>
    </div>
  );
};

export default VideoReviewSection;
