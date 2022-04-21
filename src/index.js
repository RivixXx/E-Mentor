import React from 'react';
import ReactDOM from 'react-dom/client';
import {HashRouter, Routes, Route} from "react-router-dom";
import App from './App/App';
import AppPage2 from "./App/AppPage2";


const root = ReactDOM.createRoot(document.getElementById('wrapper'));
root.render (
  
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}/>
        <Route path="/AppPage2" element={<AppPage2 />}/>
        <Route path="/App" element={<App />}/>
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
