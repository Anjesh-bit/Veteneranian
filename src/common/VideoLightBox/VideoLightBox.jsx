import YouTube from "react-youtube";
import ReactPlayer from "react-player";
import VideoPlayerModal from "../Modal";

const VideoLightBox = (props) => {
  const { isOpen, onHandleClose, videoType, videId } = props;
  const opts = {
    height: 600,
    width: 1200,
  };
  const videoStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    background: "#fcc302",
  };

  return (
    <div className="app_video_light_box_container">
      <VideoPlayerModal isOpen={isOpen} handleOnCloseModal={onHandleClose}>
        <div style={videoStyle}>
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
