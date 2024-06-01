import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Components/Layout/Header';
import Footer from './Components/Layout/Footer';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <div>
    <Header />
    <div className="row text-white">
      <div className="col-6">
      </div>
    </div>
    <Footer />
  </div>
);

// componentDidMount method was being called multiple times. hence replaced React.StrictMode with div
