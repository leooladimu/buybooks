//import React from 'react'
//import ReactDOM from 'react-dom/client'
//import App from './App.jsx'
//import './index.css'
//
//ReactDOM.createRoot(document.getElementById('root')).render(
//  <React.StrictMode>
//    <App />
//  </React.StrictMode>
//)
import { createRoot } from "react-dom/client";

import App from "./App.jsx";
import './App.css'

const rootNode = document.querySelector("#root");

if (rootNode) {
  createRoot(rootNode).render(<App />);
}