import React, { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#1f1f1f] shadow-lg z-40">
      {/* ... existing nav content ... */}
      
      {/* Make sure the hamburger button has an onClick handler */}
      <button 
        className="lg:hidden block" 
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Mobile menu */}
      <div className={`lg:hidden ${isOpen ? 'block' : 'hidden'} absolute top-full left-0 right-0 bg-[#1f1f1f] z-50 w-full`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          {/* ... menu items ... */}
        </div>
      </div>
    </nav>
  );
} 