import React, { useEffect, useRef } from 'react';

export default function VideoModal({ onClose }) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  function handleClose() {
    if (videoRef.current) videoRef.current.pause();
    onClose();
  }

  return (
    <div
      className="fixed inset-0 z-50 bg-black bg-opacity-70 flex justify-center items-center"
      onClick={handleClose}
    >
      <div
        className="relative bg-white rounded-lg shadow-lg w-[90%] max-w-xl p-4"
        onClick={(e) => e.stopPropagation()}
      >

        <button
          className="absolute top-2 right-3 text-2xl font-bold text-gray-700 hover:text-red-600"
          onClick={handleClose}
        >
          &times;
        </button>

        
        <h3 className="text-center text-lg font-semibold mb-3">
           Welcome! This is a quick demo on how to use the app.
        </h3>

        
        <video ref={videoRef} controls className="w-full rounded-md">
          <source src="/demo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

    
        <div className="text-right mt-4">
          <button
            onClick={handleClose}
            className="bg-red-800 hover:bg-red-900 text-white py-1 px-4 rounded"
          >
            Skip Video
          </button>
        </div>
      </div>
    </div>
  );
}
