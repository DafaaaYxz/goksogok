import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 border-t border-blue-500/30 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold text-blue-500">goksogok VX</h3>
            <p className="mt-4 text-sm text-gray-400">
              Unleashing the power of AI to create, innovate, and inspire.
            </p>
          </div>
          <div className="md:col-span-2">
            <div className="flex justify-end space-x-8">
              <div className="flex flex-col space-y-4">
                <h4 className="font-semibold">Quick Links</h4>
                <NavLink to="/" className="text-sm text-gray-400 hover:text-blue-400">Home</NavLink>
                <NavLink to="/about" className="text-sm text-gray-400 hover:text-blue-400">About</NavLink>
                <NavLink to="/terminal" className="text-sm text-gray-400 hover:text-blue-400">Terminal</NavLink>
              </div>
              <div className="flex flex-col space-y-4">
                <h4 className="font-semibold">Connect</h4>
                <a href="#" className="text-sm text-gray-400 hover:text-blue-400">Twitter</a>
                <a href="#" className="text-sm text-gray-400 hover:text-blue-400">GitHub</a>
                <a href="#" className="text-sm text-gray-400 hover:text-blue-400">Discord</a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-800 pt-8 flex justify-between items-center text-sm text-gray-500">
          <p>&copy; 2025 goksogok VX. All rights reserved.</p>
          <p>Developed by XdpzQ</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
