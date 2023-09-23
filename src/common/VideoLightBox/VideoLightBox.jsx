import YouTube from "react-youtube";
import ReactPlayer from "react-player";
import VideoPlayerModal from "../Modal";
import CloseIcon from "@mui/icons-material/Close";
import "./VideoLightBox.css";

const VideoLightBox = (props) => {
  const { isOpen, onHandleClose, videoType, videId } = props;
  const opts = {
    height: 600,
    width: 1200,
  };

  /* used the Youtube package for youtube videos and ReactPlayer for vimeo and html5
could have used <iframe> but package uses <iframe> under the hood
  */

  return (
    <div className="app_video_light_box_container">
      <VideoPlayerModal isOpen={isOpen} handleOnCloseModal={onHandleClose}>
        <div className="video_style">
          <CloseIcon onClick={onHandleClose} className="close_icon" />
          {videoType === "youtube" && (
            <YouTube videoId={videId} className="youtube" opts={opts} />
          )}
          {videoType === "vimeo" && (
            <ReactPlayer url={`https://vimeo.com/${videId}`} />
          )}
          {videoType === "html5" && <ReactPlayer url={videId} />}
        </div>
      </VideoPlayerModal>
    </div>
  );
};

export default VideoLightBox;
