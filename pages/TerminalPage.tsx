import React from 'react';
import ChatInterface from '../components/ChatInterface';

const TerminalPage: React.FC = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold tracking-tight text-blue-400 sm:text-5xl">
            Chat Terminal
          </h1>
          <p className="mt-4 text-lg text-gray-400">
            Interact with the AI in a fast and responsive terminal interface.
          </p>
        </div>
        <ChatInterface />
      </div>
    </div>
  );
};

export default TerminalPage;
