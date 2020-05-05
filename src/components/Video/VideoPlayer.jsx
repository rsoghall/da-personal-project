import React from 'react'
import ReactPlayer from 'react-player'
import './VideoPlayer.css'


const VideoPlayer = () => {

      return (
        <div className='player-wrapper'>
          <ReactPlayer
            className='react-player'
              url="https://dianne-adair-s3.s3-us-west-1.amazonaws.com/Videos/we-r-the-world2.mp4"
              width='60%'
              height='60%'
              controls={true}
          />
        </div>
      )
    }

    export default VideoPlayer