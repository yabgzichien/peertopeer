import React from 'react';
import './App.css'

import VideoPlayer from './components/VideoPlayer';
import Sidebar from './components/SideBar';
import Notifications from './components/Notifications';

const App = () => {

  return (
    <div className='App'>
      <h1 style={{textAlign: 'center'}} > ReactRTC</h1>
      <VideoPlayer />
      <Sidebar/>
      <Notifications />
    </div>
  );
};

export default App;