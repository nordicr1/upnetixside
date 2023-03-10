import React from "react";
import './App.css'

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from './components/Sidebar';
import Dashboard from "./pages/Dashboard";
import Sobre from "./pages/About";
import Chat from "./pages/Chat";
import Tutoriais from "./pages/Tutoriais";
import Planos from "./pages/Planos";
import Links from "./pages/Links";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Sidebar>
          <Routes>
              <Route path='/' element={<Dashboard/>} />
              <Route path='/dashboard' element={<Dashboard/>}/>
              <Route path='/sobre' element={<Sobre />}/>
              <Route path='/chat' element={<Chat/>}/>
              <Route path='/tutoriais' element={<Tutoriais/>}/>
              <Route path='/planos' element={<Planos/>}/>
              <Route path='/links' element={<Links/>}/>
            </Routes>
        </Sidebar>
          
      </BrowserRouter>
    </div>
  );
}

export default App;
