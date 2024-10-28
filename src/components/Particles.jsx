import React from 'react';

function Particles() {
  const particleOptions = {
    particles: {
      number: {
        value: window.innerWidth < 768 ? 20 : 50,
        density: {
          enable: true,
          value_area: window.innerWidth < 768 ? 600 : 800
        }
      },
      opacity: {
        value: window.innerWidth < 768 ? 0.8 : 0.5,
      },
      size: {
        value: window.innerWidth < 768 ? 3 : 2,
      }
    }
  };

  // ... rest of component ...
} 