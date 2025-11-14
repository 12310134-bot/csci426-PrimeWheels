import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Set site background image at runtime to avoid css-loader resolving public path during build
try {
  const publicUrl = process.env.PUBLIC_URL || '';
  // The user-added image filename in public/assets/backgrounf is 'bg.jpg'
  const imageUrl = publicUrl + '/assets/backgrounf/bg.jpg';
  const overlay = 'linear-gradient(rgba(0,0,0,0.04), rgba(0,0,0,0.04)), ';
  document.body.style.backgroundImage = overlay + `url('${imageUrl}')`;
  document.body.style.backgroundSize = 'cover';
  document.body.style.backgroundPosition = 'center center';
  document.body.style.backgroundAttachment = 'fixed';
  document.body.style.backgroundRepeat = 'no-repeat';
} catch (e) {
  // ignore in non-browser environments
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
