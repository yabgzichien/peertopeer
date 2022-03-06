import React, { useContext } from 'react'
import { SocketContext } from '../Context'


import '../css/VideoPlayer.css'

const VideoPlayer = () => {
  const context = useContext(SocketContext)

  return (
    <div className='VideoPlayer'>
        {
          context.stream && (
              <div className='myVideoContainer'>
                <h1>{context.name || 'Name'}</h1>
                <video playsInline muted ref={context.myVideo} autoPlay />
              </div>
          )
        }
        {
          context.callAccepted && !context.callEnded &&(
            <div className='userVideoContainer'>
              <h1>{ context.call.name || 'Name' }</h1>
              <video playsInline ref={context.userVideo} autoPlay />
            </div>
            )
        }
    </div>
  )
}

export default VideoPlayer