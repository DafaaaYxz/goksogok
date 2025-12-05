import React, { useState } from 'react';
import { generateImage } from '../services/geminiService';
import { useConfig } from '../contexts/ConfigContext';

const ImageGenPage: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState('');
  const [error, setError] = useState('');
  const { db, currentUser } = useConfig();

  const globalConfig = db?.globalConfig || { apiKeys: [] };
  const userConfig = currentUser?.config || {};
  const apiKeys = (userConfig.apiKeys && userConfig.apiKeys.length > 0) ? userConfig.apiKeys : globalConfig.apiKeys;

  const handleGenerateImage = async () => {
    if (!prompt.trim()) {
      setError('Please enter a prompt.');
      return;
    }

    setIsLoading(true);
    setError('');
    setImageUrl('');

    try {
      const generatedImageUrl = await generateImage(prompt, { apiKeys });
      setImageUrl(generatedImageUrl);
    } catch (err: any) {
      setError(`Failed to generate image: ${err.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold tracking-tight text-blue-400 sm:text-5xl">
            AI Image Generation
          </h1>
          <p className="mt-4 text-lg text-gray-400">
            Create stunning visuals with the power of AI.
          </p>
        </div>

        <div className="bg-gray-800/50 rounded-lg shadow-lg p-8 border border-blue-500/30">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Enter a prompt to generate an image..."
              className="flex-1 bg-gray-700 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={handleGenerateImage}
              disabled={isLoading}
              className="px-6 py-2 font-bold bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50"
            >
              {isLoading ? 'Generating...' : 'Generate'}
            </button>
          </div>

          {error && <p className="text-red-500 mt-4">{error}</p>}

          <div className="mt-8 flex justify-center">
            {isLoading ? (
              <div className="w-full h-96 bg-gray-700 rounded-lg flex items-center justify-center">
                <p className="animate-pulse">Generating image...</p>
              </div>
            ) : (
              imageUrl && (
                <img
                  src={imageUrl}
                  alt="Generated"
                  className="rounded-lg max-w-full h-auto"
                />
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageGenPage;
