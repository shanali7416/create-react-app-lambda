

import {  Profile} from './components';

import React from "react";
import "./App.css";
import { BrowserRouter ,Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Profile/>
      <BrowserRouter>
       <Routes>
            <Route path="profile" element={<Profile/>} />
           
        </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
