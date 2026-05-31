// src/components/common/Navbar.jsx (Wider & Longer Glassmorphism Version)
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  BeakerIcon, 
  UserCircleIcon, 
  XMarkIcon,
  Bars3Icon,
  ChevronDownIcon
} from '@heroicons/react/24/outline';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    
    // Check if user is logged in (you can implement actual auth check here)
    const token = localStorage.getItem('authToken');
    const role = localStorage.getItem('userRole');
    if (token) {
      setIsLoggedIn(true);
      setUserRole(role);
    }
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userRole');
    setIsLoggedIn(false);
    setUserRole(null);
    setIsProfileDropdownOpen(false);
    // Redirect to home or login page
    window.location.href = '/';
  };

  const navLinks = [
    { path: '/', name: 'Home' },
    { path: '/consultation', name: 'Consult a Doctor' },
    { path: '/medicines', name: 'Order Medicines' },
    { path: '/about', name: 'About Us' },
    ...(isLoggedIn ? [{ path: '/dashboard', name: 'Dashboard' }] : []),
  ];

  const isActive = (path) => {
    return location.pathname === path;
  };

  const getDashboardLink = () => {
    if (userRole === 'doctor') return '/doctor-dashboard';
    if (userRole === 'vendor') return '/vendor-dashboard';
    return '/patient-dashboard';
  };

  return (
    <>
      <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-2' : 'py-6'
      }`}>
        <div className="px-6 sm:px-8 lg:px-12">
          <div className="max-w-7xl mx-auto">
            {/* Wider navbar container - increased width and padding */}
            <div className={`bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl transition-all duration-300 ${
              scrolled ? 'shadow-lg' : 'shadow-2xl'
            } border border-white/20 w-full`}>
              {/* Increased height with more padding */}
              <div className="px-8 sm:px-10 lg:px-12 py-3">
                <div className="flex justify-between items-center h-20">
                  {/* Logo and Brand - Larger and more prominent */}
                  <Link to="/" className="flex items-center space-x-3 group">
                    <div className="relative">
                      <div className="bg-gradient-to-br from-blue-500 to-blue-700 p-2 rounded-xl shadow-lg">
                        <BeakerIcon className="h-8 w-8 text-white transition-transform duration-300 group-hover:rotate-12" />
                      </div>
                      <div className="absolute inset-0 bg-blue-500 rounded-full blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                        Aragya<span className="text-blue-600">D2D</span>
                      </span>
                      <span className="text-xs text-gray-500">Healthcare at your doorstep</span>
                    </div>
                  </Link>

                  {/* Desktop Menu - More spacing */}
                  <div className="hidden md:flex items-center space-x-2">
                    {navLinks.map((link) => (
                      <Link
                        key={link.path}
                        to={link.path}
                        className="relative px-5 py-3 overflow-hidden group"
                      >
                        <span className={`relative z-10 text-base font-medium transition-colors duration-300 ${
                          isActive(link.path) 
                            ? 'text-blue-600' 
                            : 'text-gray-700 group-hover:text-blue-600'
                        }`}>
                          {link.name}
                        </span>
                        {/* Animated underline - thicker and more prominent */}
                        <span className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full transition-all duration-300 ${
                          isActive(link.path) ? 'w-full' : 'w-0 group-hover:w-full'
                        }`}></span>
                        {/* Hover background effect */}
                        <span className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></span>
                      </Link>
                    ))}
                  </div>

                  {/* Right side buttons - Larger */}
                  <div className="hidden md:flex items-center space-x-4">
                    {/* Auth Buttons */}
                    {isLoggedIn ? (
                      <div className="relative">
                        <button 
                          onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
                          className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-5 py-2.5 rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-md hover:shadow-xl text-sm font-medium"
                        >
                          <UserCircleIcon className="h-5 w-5" />
                          <span>My Account</span>
                          <ChevronDownIcon className={`h-4 w-4 transition-transform duration-300 ${isProfileDropdownOpen ? 'rotate-180' : ''}`} />
                        </button>
                        
                        {/* Profile Dropdown */}
                        {isProfileDropdownOpen && (
                          <div className="absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden z-50 animate-slideDown">
                            <div className="p-4 border-b border-gray-100">
                              <p className="text-sm font-semibold text-gray-800">Signed in as</p>
                              <p className="text-xs text-gray-500 mt-1 capitalize">{userRole}</p>
                            </div>
                            <div className="py-2">
                              <Link 
                                to={getDashboardLink()}
                                onClick={() => setIsProfileDropdownOpen(false)}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition"
                              >
                                Dashboard
                              </Link>
                              <Link 
                                to="/profile"
                                onClick={() => setIsProfileDropdownOpen(false)}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition"
                              >
                                Profile Settings
                              </Link>
                              <Link 
                                to="/appointments"
                                onClick={() => setIsProfileDropdownOpen(false)}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition"
                              >
                                My Appointments
                              </Link>
                              <Link 
                                to="/orders"
                                onClick={() => setIsProfileDropdownOpen(false)}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition"
                              >
                                Order History
                              </Link>
                              <hr className="my-2" />
                              <button 
                                onClick={handleLogout}
                                className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition"
                              >
                                Sign Out
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="flex items-center space-x-3">
                        <Link to="/signup">
                          <button className="bg-transparent border-2 border-blue-600 text-blue-600 px-5 py-2 rounded-xl hover:bg-blue-50 transition-all duration-300 text-sm font-medium">
                            Sign Up
                          </button>
                        </Link>
                        <Link to="/login">
                          <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2.5 rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-md hover:shadow-xl text-sm font-medium">
                            Sign In
                          </button>
                        </Link>
                      </div>
                    )}
                  </div>

                  {/* Mobile menu button - Larger */}
                  <div className="md:hidden">
                    <button 
                      onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                      className="p-2.5 rounded-xl bg-gray-100/80 backdrop-blur-sm text-gray-700 hover:bg-gray-200 transition-colors"
                    >
                      {isMobileMenuOpen ? (
                        <XMarkIcon className="h-6 w-6" />
                      ) : (
                        <Bars3Icon className="h-6 w-6" />
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Mobile Menu - Enhanced */}
              {isMobileMenuOpen && (
                <div className="md:hidden border-t border-gray-100/50 py-4 px-8 animate-slideDown">
                  <div className="flex flex-col space-y-3">
                    {navLinks.map((link) => (
                      <Link
                        key={link.path}
                        to={link.path}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`relative px-4 py-3 rounded-xl transition-all duration-300 ${
                          isActive(link.path) 
                            ? 'bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-600' 
                            : 'text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        <span className="text-base font-medium block">{link.name}</span>
                        {isActive(link.path) && (
                          <span className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1.5 h-8 bg-gradient-to-b from-blue-600 to-indigo-600 rounded-r"></span>
                        )}
                      </Link>
                    ))}
                    
                    <div className="pt-4 mt-3 border-t border-gray-100/50">
                      {isLoggedIn ? (
                        <>
                          <div className="px-4 py-3 bg-gray-50 rounded-xl mb-3">
                            <p className="text-sm font-semibold text-gray-800">Signed in as</p>
                            <p className="text-xs text-gray-500 mt-1 capitalize">{userRole}</p>
                          </div>
                          <Link to={getDashboardLink()} onClick={() => setIsMobileMenuOpen(false)}>
                            <button className="w-full bg-gray-100 text-gray-700 px-4 py-3 rounded-xl text-base font-medium mb-2">
                              Dashboard
                            </button>
                          </Link>
                          <button 
                            onClick={handleLogout}
                            className="w-full bg-red-500 text-white px-4 py-3 rounded-xl text-base font-medium shadow-md hover:bg-red-600 transition"
                          >
                            Sign Out
                          </button>
                        </>
                      ) : (
                        <>
                          <Link to="/signup" onClick={() => setIsMobileMenuOpen(false)}>
                            <button className="w-full border-2 border-blue-600 text-blue-600 px-4 py-3 rounded-xl text-base font-medium mb-3">
                              Sign Up
                            </button>
                          </Link>
                          <Link to="/login" onClick={() => setIsMobileMenuOpen(false)}>
                            <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-3 rounded-xl text-base font-medium shadow-md">
                              Sign In
                            </button>
                          </Link>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Increased spacer to prevent content from going under navbar */}
      <div className="h-28"></div>

      {/* Add animation styles */}
      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
      `}</style>
    </>
  );
};

export default Navbar;