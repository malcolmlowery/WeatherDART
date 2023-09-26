import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { AuthProvider } from './context/AuthContext';
import './styles/index.css';
import { WeatherDataProvider } from './context/WeatherDataContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <WeatherDataProvider>
        <App />
      </WeatherDataProvider>
    </AuthProvider>
  </React.StrictMode>,
);
