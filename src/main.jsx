import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css'; // Import Tailwind CSS
import { HelmetProvider } from 'react-helmet-async';


createRoot(document.getElementById('root')).render(
  <StrictMode>
     <HelmetProvider>
    <App />
    </HelmetProvider>
  </StrictMode>,
)

