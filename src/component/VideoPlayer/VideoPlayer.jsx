import "./VideoPlayer.css";
import video from "../../assets/video.mp4";
import { useRef } from "react";
const VideoPlayer = ({ show, setShow }) => {
  const player = useRef(null);
  const closePlayer = (e) => {
    if (e.target === player.current) {
      setShow(false);
    }
  };
  return (
    <div
      className={`video-player ${show ? "" : "hide"}`}
      ref={player}
      onClick={closePlayer}
    >
      <video src={video} autoPlay muted controls></video>
    </div>
  );
};

export default VideoPlayer;
