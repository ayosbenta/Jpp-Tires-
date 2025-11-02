import React, { useState } from 'react';

const NavLink: React.FC<{ sectionId: string; children: React.ReactNode; onClick: () => void; }> = ({ sectionId, children, onClick }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    onClick();
  };

  return (
    <a href={`#${sectionId}`} onClick={handleClick} className="text-gray-300 hover:text-red-500 transition-colors duration-300 text-lg px-3 py-2 rounded-md">
      {children}
    </a>
  );
};

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isTiresOpen, setIsTiresOpen] = useState(false);

  const closeMobileMenu = () => setIsMenuOpen(false);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    if (isMenuOpen) {
      closeMobileMenu();
    }
  };

  return (
    <header className="bg-slate-900/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="#home" onClick={(e) => handleLinkClick(e, 'home')} className="text-2xl font-bold text-white">
              JPP <span className="text-red-500">Tires Trading</span>
            </a>
          </div>
          <div className="hidden md:block">
            <nav className="flex items-center space-x-4">
              <a href="#home" onClick={(e) => handleLinkClick(e, 'home')} className="text-gray-300 hover:text-red-500 transition-colors duration-300 text-lg px-3 py-2 rounded-md">Home</a>
              <div className="relative" onMouseEnter={() => setIsTiresOpen(true)} onMouseLeave={() => setIsTiresOpen(false)}>
                <button className="text-gray-300 hover:text-red-500 transition-colors duration-300 text-lg px-3 py-2 rounded-md flex items-center">
                  Tires
                  <svg className={`w-4 h-4 ml-1 transition-transform duration-200 ${isTiresOpen ? 'transform rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </button>
                {isTiresOpen && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-slate-800 rounded-md shadow-lg py-1 z-20">
                    <a href="#tires" onClick={(e) => handleLinkClick(e, 'tires')} className="block px-4 py-2 text-sm text-gray-300 hover:bg-slate-700 hover:text-red-500">All-Season</a>
                    <a href="#tires" onClick={(e) => handleLinkClick(e, 'tires')} className="block px-4 py-2 text-sm text-gray-300 hover:bg-slate-700 hover:text-red-500">Summer</a>
                    <a href="#tires" onClick={(e) => handleLinkClick(e, 'tires')} className="block px-4 py-2 text-sm text-gray-300 hover:bg-slate-700 hover:text-red-500">Winter</a>
                    <a href="#tires" onClick={(e) => handleLinkClick(e, 'tires')} className="block px-4 py-2 text-sm text-gray-300 hover:bg-slate-700 hover:text-red-500">Performance</a>
                  </div>
                )}
              </div>
              <a href="#services" onClick={(e) => handleLinkClick(e, 'services')} className="text-gray-300 hover:text-red-500 transition-colors duration-300 text-lg px-3 py-2 rounded-md">Services</a>
              <a href="#about" onClick={(e) => handleLinkClick(e, 'about')} className="text-gray-300 hover:text-red-500 transition-colors duration-300 text-lg px-3 py-2 rounded-md">About</a>
              <a href="#contact" onClick={(e) => handleLinkClick(e, 'contact')} className="text-gray-300 hover:text-red-500 transition-colors duration-300 text-lg px-3 py-2 rounded-md">Contact</a>
            </nav>
          </div>
          <div className="hidden md:block">
            <a href="#contact" onClick={(e) => handleLinkClick(e, 'contact')} className="inline-block bg-red-500 text-white font-bold py-2 px-5 rounded-md hover:bg-red-600 transition-all duration-300 transform hover:scale-105">
              Get a Quote
            </a>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center">
            <a href="#home" onClick={(e) => handleLinkClick(e, 'home')} className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Home</a>
            <a href="#tires" onClick={(e) => handleLinkClick(e, 'tires')} className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Tires</a>
            <a href="#services" onClick={(e) => handleLinkClick(e, 'services')} className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Services</a>
            <a href="#about" onClick={(e) => handleLinkClick(e, 'about')} className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">About</a>
            <a href="#contact" onClick={(e) => handleLinkClick(e, 'contact')} className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Contact</a>
             <a href="#contact" onClick={(e) => handleLinkClick(e, 'contact')} className="mt-4 inline-block w-full bg-red-500 text-white font-bold py-2 px-5 rounded-md hover:bg-red-600 transition-all duration-300">
              Get a Quote
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;