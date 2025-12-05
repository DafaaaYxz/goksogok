import React from 'react';
import { NavLink } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <main>
        {/* Hero Section */}
        <section className="py-20 text-center">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-5xl font-extrabold tracking-tight text-blue-400 sm:text-6xl md:text-7xl">
              Welcome to CentralGPT VX
            </h1>
            <p className="mt-6 text-xl text-gray-300">
              Your intelligent assistant for crafting amazing applications.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <NavLink
                to="/terminal"
                className="px-8 py-3 text-lg font-bold bg-blue-600 rounded-md hover:bg-blue-700 transition-colors"
              >
                Get Started
              </NavLink>
              <a
                href="#"
                className="px-8 py-3 text-lg font-bold bg-gray-700 rounded-md hover:bg-gray-800 transition-colors"
              >
                Learn More
              </a>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-white">
                Features
              </h2>
              <p className="mt-4 text-lg text-gray-400">
                Everything you need to build and deploy modern AI-powered apps.
              </p>
            </div>
            <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <div className="bg-gray-900 p-8 rounded-lg">
                <h3 className="text-xl font-bold text-blue-400">Intelligent Chat</h3>
                <p className="mt-4 text-gray-400">
                  Engage with a powerful AI that can understand and respond in natural language.
                </p>
              </div>
              <div className="bg-gray-900 p-8 rounded-lg">
                <h3 className="text-xl font-bold text-blue-400">Image Generation</h3>
                <p className="mt-4 text-gray-400">
                  Create stunning visuals with our advanced image generation capabilities.
                </p>
              </div>
              <div className="bg-gray-900 p-8 rounded-lg">
                <h3 className="text-xl font-bold text-blue-400">Voice Chat</h3>
                <p className="mt-4 text-gray-400">
                  Interact with our AI using your voice for a more immersive experience.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-white">
              Ready to get started?
            </h2>
            <p className="mt-4 text-lg text-gray-400">
              Create an account today and start building the future.
            </p>
            <div className="mt-8">
              <NavLink
                to="/register"
                className="px-8 py-3 text-lg font-bold bg-blue-600 rounded-md hover:bg-blue-700 transition-colors"
              >
                Sign Up Now
              </NavLink>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
