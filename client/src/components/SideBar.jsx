import React, { useState, useContext } from 'react';

import { SocketContext } from '../Context';
import CopyToClipboard from 'react-copy-to-clipboard';

import '../css/SideBar.css'

const Sidebar = () => {
  const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } = useContext(SocketContext);
  const [callId, setCallId] = useState('')

  return (
    <div>
    <div className='SideBar'>
      <div className='personalInfo' >
        <input 
        placeholder='Please Enter Your Name' 
        className='nameInput'
        onChange ={e=> setName(e.target.value)}
        value={name}
        />
        <div>
          <CopyToClipboard text={me}>
           <button className='idBtn'> Copy your Id </button>
          </CopyToClipboard>
        </div>
      </div>
      <div> 
        <input 
        placeholder='Other Person Id' 
        className='idInput'
        onChange={e=> setCallId(e.target.value)}
        value={callId}
        />
        {callAccepted && !callEnded ? (
        <div>
          <button 
          className='callBtn'
          onClick={leaveCall}
          > Hang up </button>
        </div>) :
        <div>
          <button 
          className='callBtn'
          onClick={()=>callUser(callId)}
          > Call 
          </button>
        </div>
        }
      </div>
      
    </div>
    </div>
  );
};

export default Sidebar;