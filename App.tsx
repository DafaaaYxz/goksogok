import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { ConfigProvider, useConfig } from './contexts/ConfigContext';

// Pages
import HomePage from './pages/HomePage';
import TerminalPage from './pages/TerminalPage';
import ImageGenPage from './pages/ImageGenPage';
import VoiceChatPage from './pages/VoiceChatPage';
import DatabasePage from './pages/DatabasePage';
import AboutPage from './pages/AboutPage';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/admin/Dashboard';
import UserDashboard from './pages/UserDashboard';

const AppContent: React.FC = () => {
  const { currentUser } = useConfig();
  
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <main className="flex-grow relative z-10">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/login" element={<LoginPage />} />
          
          {/* User Routes */}
          <Route path="/dashboard" element={currentUser ? <UserDashboard /> : <Navigate to="/login" />} />
          <Route path="/terminal" element={currentUser ? <TerminalPage /> : <Navigate to="/login" />} />
          <Route path="/image-gen" element={currentUser ? <ImageGenPage /> : <Navigate to="/login" />} />
          <Route path="/voice-chat" element={currentUser ? <VoiceChatPage /> : <Navigate to="/login" />} />
          <Route path="/database" element={currentUser ? <DatabasePage /> : <Navigate to="/login" />} />
          
          <Route path="/admin/login" element={<Navigate to="/login" replace />} />
          <Route path="/register" element={<Navigate to="/login" replace />} />
          
          {/* Admin Routes */}
          <Route path="/admin/dashboard" element={<Dashboard />} />
        </Routes>
      </main>

      <Footer />

      {currentUser && (
        <div className="fixed bottom-8 right-8 z-50">
          <a href="#/image-gen" className="w-14 h-14 bg-blue-600 rounded-full border-2 border-white shadow-[0_0_15px_rgba(0,0,255,0.5)] flex items-center justify-center hover:scale-110 transition-all duration-300 group text-white no-underline">
            <i className="fa-solid fa-image text-white text-xl"></i>
          </a>
        </div>
      )}
    </div>
  );
};

const App: React.FC = () => {
  return (
    <ConfigProvider>
      <Router>
        <AppContent />
      </Router>
    </ConfigProvider>
  );
};

export default App;
