//Chat GPT says that you need to npm install --save adapterjs webrtc-adapter

import React, { useRef, useEffect } from 'react';

const Camera = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then((stream) => {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <video ref={videoRef} />
  );
};

export default Camera;