import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import App from './App/App';
import AppPage2 from "./App/AppPage2";


const root = ReactDOM.createRoot(document.getElementById('wrapper'));
root.render (
  
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}/>
        <Route path="/AppPage2" element={<AppPage2 />}/>
        {/* <Route path="/App" element={<App />}/> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
