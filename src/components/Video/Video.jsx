import React from 'react'
import './Video.css'
import play_video from '../../assets/video.mp4'

const Video = ({ playState,setPlayState }) => {
  return (
    <div className={`video-play ${playState ? '' : 'hide'}`}>
      <video src={play_video} autoPlay muted controls></video>
    </div>
  )
}

export default Video
