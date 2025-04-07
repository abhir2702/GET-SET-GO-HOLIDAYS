// Security measures for asset protection

// Add type definition for webkit style properties
declare global {
  interface CSSStyleDeclaration {
    webkitTouchCallout: string;
  }
}

// Anti-DevTools measures
export const preventDevTools = () => {
  // Prevent right click
  document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    return false;
  });

  // Prevent keyboard shortcuts
  document.addEventListener('keydown', (e) => {
    // Prevent F12
    if (e.key === 'F12') {
      e.preventDefault();
      return false;
    }

    // Prevent Ctrl+Shift+I
    if (e.ctrlKey && e.shiftKey && e.key === 'I') {
      e.preventDefault();
      return false;
    }

    // Prevent Ctrl+Shift+J
    if (e.ctrlKey && e.shiftKey && e.key === 'J') {
      e.preventDefault();
      return false;
    }

    // Prevent Ctrl+Shift+C
    if (e.ctrlKey && e.shiftKey && e.key === 'C') {
      e.preventDefault();
      return false;
    }

    // Prevent Ctrl+U (view source)
    if (e.ctrlKey && e.key === 'u') {
      e.preventDefault();
      return false;
    }
  });

  // Detect when DevTools is opened
  const detectDevTools = () => {
    const widthThreshold = window.outerWidth - window.innerWidth > 160;
    const heightThreshold = window.outerHeight - window.innerHeight > 160;
    
    if (widthThreshold || heightThreshold) {
      document.body.innerHTML = 'Developer tools are not allowed on this website.';
    }
  };

  setInterval(detectDevTools, 1000);
};

// Initialize all security measures
export const initializeSecurity = () => {
  preventDevTools();
  
  // Remove image protection features, keeping only dev tools prevention
};