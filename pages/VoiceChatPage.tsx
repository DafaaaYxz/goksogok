import React, { useState } from 'react';
import { useConfig } from '../contexts/ConfigContext';

const VoiceChatPage: React.FC = () => {
  const [text, setText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const { db, currentUser } = useConfig();

  const handleSpeak = () => {
    if (!text.trim()) {
      setError('Please enter some text.');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      const utterance = new SpeechSynthesisUtterance(text);
      const voices = window.speechSynthesis.getVoices();
      const animeVoice = voices.find(voice => voice.name.includes('Anime') || voice.lang.startsWith('ja'));

      if (animeVoice) {
        utterance.voice = animeVoice;
      } else {
        console.warn('Anime voice not found, using default.');
      }

      utterance.onend = () => setIsLoading(false);
      utterance.onerror = (e) => {
        setError(`Speech synthesis error: ${e.error}`);
        setIsLoading(false);
      };

      window.speechSynthesis.speak(utterance);
    } catch (err: any) {
      setError(`Failed to speak: ${err.message}`);
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold tracking-tight text-blue-400 sm:text-5xl">
            AI Voice Chat
          </h1>
          <p className="mt-4 text-lg text-gray-400">
            Hear the AI speak in an anime-style voice.
          </p>
        </div>

        <div className="bg-gray-800/50 rounded-lg shadow-lg p-8 border border-blue-500/30">
          <div className="flex flex-col sm:flex-row gap-4">
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Enter text for the AI to speak..."
              className="flex-1 bg-gray-700 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={4}
            />
            <button
              onClick={handleSpeak}
              disabled={isLoading}
              className="px-6 py-2 font-bold bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50"
            >
              {isLoading ? 'Speaking...' : 'Speak'}
            </button>
          </div>

          {error && <p className="text-red-500 mt-4">{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default VoiceChatPage;
