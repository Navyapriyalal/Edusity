import React, { useRef } from 'react'
import './Video.css'
import play_video from '../../assets/video.mp4'

const Video = ({ playState,setPlayState }) => {
  const player = useRef(null);

  const closePlayer = (e) => {
    if (e.target === player.current){
        setPlayState(false);
    }
  }

  return (
    <div className={`video-play ${playState ? '' : 'hide'}`} ref={player} onClick={closePlayer}>
      <video src={play_video} autoPlay muted controls></video>
    </div>
  )
}

export default Video
