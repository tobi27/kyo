import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Dashboard from './pages/Dashboard';
import Success from './pages/Success';
import ProtectedRoute from './components/ProtectedRoute';
import { syncUser } from './lib/api';

const LandingPage: React.FC = () => {
  return (
    <>
      <Hero />
      <Features />
      <Pricing />
      <FAQ />
    </>
  );
};

const App: React.FC = () => {
  const { isAuthenticated, getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    const sync = async () => {
      if (isAuthenticated) {
        try {
          const token = await getAccessTokenSilently();
          await syncUser(token);
        } catch (error) {
          console.error('Failed to sync user:', error);
        }
      }
    };
    sync();
  }, [isAuthenticated, getAccessTokenSilently]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 selection:bg-blue-500/30 selection:text-white">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </main>
      <Footer />
      <div className="noise-bg" />
    </div>
  );
};

export default App;
