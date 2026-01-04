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

      {/* Security & Trust Section */}
      <section id="security" className="py-24 px-6 bg-slate-900 border-y border-slate-800">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Security & Privacy First</h2>
          <p className="text-slate-400 max-w-2xl mx-auto mb-12">
            Your prompts never leave your VPC. We operate on a strictly zero-trust metadata-only basis.
          </p>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="bg-slate-950 p-6 rounded-xl border border-slate-800">
              <h4 className="text-white font-bold mb-2">Data Boundaries</h4>
              <p className="text-sm text-slate-500">Payloads and prompt content are stripped at the edge. Only token counts and model IDs are ingested.</p>
            </div>
            <div className="bg-slate-950 p-6 rounded-xl border border-slate-800">
              <h4 className="text-white font-bold mb-2">BYOC Deployment</h4>
              <p className="text-sm text-slate-500">Deploy the sidecar proxy directly into your Kubernetes cluster or AWS VPC.</p>
            </div>
            <div className="bg-slate-950 p-6 rounded-xl border border-slate-800">
              <h4 className="text-white font-bold mb-2">Audit Trails</h4>
              <p className="text-sm text-slate-500">Cryptographically verifiable logs for every transaction, ready for compliance review.</p>
            </div>
          </div>
        </div>
      </section>

      <Pricing />
      <FAQ />

      {/* Final CTA */}
      <section className="py-32 px-6 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">Stop Guessing. Start Controlling.</h2>
        <p className="text-xl text-slate-400 mb-10">Turn your AI operations into a predictable, billable business unit today.</p>
        <div className="flex justify-center gap-4">
          <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-500 transition-colors shadow-lg shadow-blue-900/30">
            Get Started Now
          </button>
          <button className="bg-transparent border border-slate-700 text-white px-8 py-4 rounded-lg font-bold hover:bg-slate-800 transition-colors">
            Contact Sales
          </button>
        </div>
      </section>
    </>
  );
};

const App: React.FC = () => {
  const { isAuthenticated, getAccessTokenSilently } = useAuth0();

  // Sync user to database on login
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
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route path="/success" element={<Success />} />
        </Routes>
      </main>

      <Footer />
      <div className="noise-bg" />
    </div>
  );
};

export default App;
