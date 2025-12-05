import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useConfig } from '../contexts/ConfigContext';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { currentUser, logout, isAdmin, db } = useConfig();
  const navigate = useNavigate();

  const headerTitle = currentUser ? currentUser.username.toUpperCase() : (db?.globalConfig?.aiName || 'goksogok');
  const version = "VX";

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const navItems = [
    { name: 'Home', path: '/', public: true },
    { name: 'Dashboard', path: '/dashboard', public: false },
    { name: 'Terminal', path: '/terminal', public: false },
    { name: 'Image Gen', path: '/image-gen', public: false },
    { name: 'Voice Chat', path: '/voice-chat', public: false },
    { name: 'About', path: '/about', public: true }
  ].filter(item => item.public || currentUser);

  return (
    <nav className="sticky top-0 z-50 bg-gray-900/80 backdrop-blur-lg border-b border-blue-500/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <NavLink to="/" className="flex items-center gap-3 group">
            <svg className="w-8 h-8 text-blue-500 group-hover:animate-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
            <span className="text-xl font-bold text-white tracking-wider">
              {headerTitle} <span className="text-blue-500">{version}</span>
            </span>
          </NavLink>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `text-sm font-semibold transition-colors duration-300 ${
                    isActive ? 'text-blue-400' : 'text-gray-300 hover:text-blue-400'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            {currentUser ? (
              <>
                {isAdmin && (
                  <NavLink to="/admin/dashboard" className="text-xs text-gray-400 hover:text-white">
                    Admin
                  </NavLink>
                )}
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 text-sm font-bold bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                  Logout
                </button>
              </>
            ) : (
              <NavLink
                to="/login"
                className="px-4 py-2 text-sm font-bold bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                Login
              </NavLink>
            )}
          </div>

          <div className="flex md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-gray-300 hover:text-white"
            >
              <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium ${
                    isActive ? 'text-blue-400 bg-gray-800' : 'text-gray-300 hover:text-white hover:bg-gray-800'
                  }`
                }
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </NavLink>
            ))}
            <div className="border-t border-gray-700 pt-4 mt-4">
              {currentUser ? (
                <button
                  onClick={handleLogout}
                  className="w-full text-left block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800"
                >
                  Logout
                </button>
              ) : (
                <NavLink
                  to="/login"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800"
                >
                  Login
                </NavLink>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
