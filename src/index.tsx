import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Components/Layout/Header';
import Footer from './Components/Layout/Footer';
import Counter from './Components/Counter';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <div>
    <Header />
    <div className='p-2 m-2 row text-center'>
      <Counter />
    </div>
    <Footer />
  </div>
);

// componentDidMount method was being called multiple times. hence replaced React.StrictMode with div
