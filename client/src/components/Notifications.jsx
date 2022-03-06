import React, { useContext } from 'react';

import { SocketContext } from '../Context';

const Notifications = () => {
  const { answerCall, call, callAccepted } = useContext(SocketContext);

  return (
    <>
    {call.isReceivingCall && !callAccepted &&(
    <div className=''>
      <h2> name is calling... </h2>
      <button onClick={answerCall}> Answer Call </button>  
    </div>
    )}
    </>
  );
};

export default Notifications;