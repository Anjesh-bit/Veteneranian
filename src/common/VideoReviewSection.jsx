import Button from "./Button";
import VideoLightBox from "./VideoLightBox/VideoLightBox";
import { ModalOpenActions, ModalCloseActions } from "../actions/ModalActions";
import { useDispatch, useSelector } from "react-redux";
import YouTube from "react-youtube";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import "./css/VideoReviews.css";
// import { useEffect, useState, useMemo } from "react";

const VideoReviewSection = (props) => {
  const { className, textAlign, shape } = props;

  const opts = {
    width: "100%",
    height: "350px",
  };

  const ytStyle = {
    border: "5px solid #fcc302",
    borderRadius: "5px",
    opacity: 0.9,
  };

  const icStyle = {
    color: "#ffffff",
    cursor: "pointer",
  };

  //Either use useState or Redux
  // const [type, setType] = useState("initial");
  // const [id, setId] = useState("initial");
  // const [open, setOpen] = useState(false);

  const dispatch = useDispatch();
  //useSelector access the reducer state and gives us updated state
  const { open, videoType, videoId } = useSelector(
    (state) => state.videoPlayerData
  );

  // const cachedType = useMemo(() => type, [type]);
  // const cachedId = useMemo(() => id, [id]);
  const onHandleClose = (e) => {
    e.preventDefault();
    //dispatch an actions to a reducer
    dispatch(ModalCloseActions(false));
    // setOpen(false);
  };

  const onHandleClick = (type, id) => (e) => {
    e.preventDefault();
    // setType(type);
    // setId(id);
    // setOpen(true);
    dispatch(ModalOpenActions(true, type, id));
  };
  return (
    <div className={`app_video_reviews_section_wrapper ${textAlign}`}>
      <div className={`app_right_part ${className}`}>
        <h1>As a Veterinarian and lover of animals</h1>
        <p>
          Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
          ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
        </p>
        <Button btnText="Services" btnClassName="app_btn" />
      </div>
      <div className="app_left_part">
        <YouTube videoId="iy74I_CSV5U" opts={opts} style={ytStyle} />
        <OpenInFullIcon
          onClick={onHandleClick("youtube", "iy74I_CSV5U")}
          btnText="Expand"
          style={icStyle}
        />
        <VideoLightBox
          onHandleClose={onHandleClose}
          isOpen={open}
          videoType={videoType}
          videId={videoId}
        />
        <div className={shape}></div>
      </div>
    </div>
  );
};

export default VideoReviewSection;
