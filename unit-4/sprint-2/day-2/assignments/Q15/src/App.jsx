import React, { useRef } from 'react';

function VideoPlayer() {
  const videoRef = useRef(null);

  const playVideo = () => {
    videoRef.current.play(); // Play the video
  };

  const pauseVideo = () => {
    videoRef.current.pause(); // Pause the video
  };

  const restartVideo = () => {
    videoRef.current.currentTime = 0; // Reset the video to the start
    videoRef.current.play(); // Optionally start playing after reset
  };

  return (
    <div>
      <h1>Custom Video Player</h1>
      <video ref={videoRef} width="600" controls>
        <source src="https://www.w3schools.com/html/movie.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div>
        <button onClick={playVideo}>Play</button>
        <button onClick={pauseVideo}>Pause</button>
        <button onClick={restartVideo}>Restart</button>
      </div>
    </div>
  );
}

function App() {
  return (
    <div>
      <VideoPlayer />
    </div>
  );
}

export default App;
