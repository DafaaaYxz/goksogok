import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative text-white text-center py-40 bg-black overflow-hidden border-b-2 border-red-900">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0 z-0 opacity-10 bg-[url('https://media.giphy.com/media/121dTr2XhA314c/giphy.gif')] bg-cover"></div>
      <div className="relative z-10">
        <h1 className="text-4xl md:text-6xl font-['Press_Start_2P'] mb-4">
          Welcome to <span className="text-red-600">CentralGPT VX</span>
        </h1>
        <p className="text-lg md:text-xl font-['JetBrains_Mono'] text-gray-400">
          The Unrestricted Intelligence Module. Your gateway to the shadows.
        </p>
      </div>
    </div>
  );
};

export default Hero;
