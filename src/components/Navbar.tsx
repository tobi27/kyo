import React, { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate, Link } from 'react-router-dom';
import { ShieldCheck, Menu, X, ArrowUpRight, User, LogOut } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const { isAuthenticated, isLoading, loginWithRedirect, logout, user } = useAuth0();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'Security', href: '#security' },
    { name: 'Pricing', href: '#pricing' },
  ];

  const handleLogin = () => {
    loginWithRedirect();
  };

  const handleLogout = () => {
    logout({ logoutParams: { returnTo: window.location.origin } });
  };

  const handleStart = () => {
    if (isAuthenticated) {
      navigate('/dashboard');
    } else {
      loginWithRedirect();
    }
  };

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50 flex justify-center pt-4 md:pt-6 px-4 pointer-events-none">
        <nav
          className={`pointer-events-auto transition-all duration-500 ease-out flex items-center justify-between
            ${isScrolled
              ? 'w-full md:w-[700px] bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-full py-2.5 px-4 shadow-2xl shadow-black/50'
              : 'w-full max-w-7xl py-4 bg-transparent border-transparent'
            }`}
        >
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className={`p-1.5 rounded-full transition-colors ${isScrolled ? 'bg-white/10' : 'bg-slate-800/50 border border-white/5'}`}>
              <ShieldCheck className="w-4 h-4 text-white" />
            </div>
            <span className={`font-medium tracking-tight text-white ${isScrolled ? 'text-sm' : 'text-lg'}`}>XiGate</span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-300
                  ${isScrolled
                    ? 'text-slate-400 hover:text-white hover:bg-white/5'
                    : 'text-slate-400 hover:text-white'
                  }`}
              >
                {link.name}
              </a>
            ))}
            {isAuthenticated && (
              <Link
                to="/dashboard"
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-300
                  ${isScrolled
                    ? 'text-blue-400 hover:text-white hover:bg-white/5'
                    : 'text-blue-400 hover:text-white'
                  }`}
              >
                Dashboard
              </Link>
            )}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            {isLoading ? (
              <div className="w-16 h-8 bg-slate-800 rounded animate-pulse" />
            ) : isAuthenticated ? (
              <div className="relative">
                <button
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
                >
                  {user?.picture ? (
                    <img src={user.picture} alt="" className="w-6 h-6 rounded-full" />
                  ) : (
                    <User className="w-4 h-4 text-white" />
                  )}
                  <span className="hidden md:block text-xs text-white">{user?.name || user?.email}</span>
                </button>

                {isUserMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-slate-900 border border-slate-700 rounded-lg shadow-xl py-1 z-50">
                    <Link
                      to="/dashboard"
                      onClick={() => setIsUserMenuOpen(false)}
                      className="flex items-center gap-2 px-4 py-2 text-sm text-slate-300 hover:bg-slate-800"
                    >
                      <User className="w-4 h-4" />
                      Dashboard
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="flex items-center gap-2 w-full px-4 py-2 text-sm text-red-400 hover:bg-slate-800"
                    >
                      <LogOut className="w-4 h-4" />
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <button
                  onClick={handleLogin}
                  className={`hidden md:block text-xs font-medium text-slate-300 hover:text-white transition-colors ${isScrolled ? 'px-3' : 'px-4'}`}
                >
                  Login
                </button>
                <button
                  onClick={handleStart}
                  className={`
                    rounded-full font-medium text-xs transition-all flex items-center gap-1 group
                    ${isScrolled
                      ? 'bg-white text-black hover:bg-slate-200 px-4 py-2'
                      : 'bg-white text-black hover:bg-slate-200 px-5 py-2.5 shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)]'
                    }
                  `}
                >
                  Start <ArrowUpRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </>
            )}

            {/* Mobile Toggle */}
            <button
              className="md:hidden text-slate-300 p-1"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-[#020305]/95 backdrop-blur-3xl transition-all duration-500 md:hidden ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col h-full pt-32 px-8 pb-10 space-y-8">
          {navLinks.map((link, i) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-3xl font-light text-slate-300 hover:text-white transition-colors block border-b border-white/5 pb-4"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              {link.name}
            </a>
          ))}
          {isAuthenticated && (
            <Link
              to="/dashboard"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-3xl font-light text-blue-400 hover:text-white transition-colors block border-b border-white/5 pb-4"
            >
              Dashboard
            </Link>
          )}
          <div className="pt-8 mt-auto space-y-4">
            {isAuthenticated ? (
              <button
                onClick={handleLogout}
                className="w-full bg-red-600 text-white rounded-full py-4 font-bold text-sm"
              >
                Logout
              </button>
            ) : (
              <>
                <button
                  onClick={handleLogin}
                  className="w-full bg-transparent border border-white/20 text-white rounded-full py-4 font-bold text-sm"
                >
                  Login
                </button>
                <button
                  onClick={handleStart}
                  className="w-full bg-white text-black rounded-full py-4 font-bold text-sm"
                >
                  Get Started
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
