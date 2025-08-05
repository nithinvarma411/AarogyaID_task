import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import TaskTwo from './pages/TaskTwo';

function App() {

  return (
    <BrowserRouter basename='/'>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/part1" element={<h1>About</h1>} />
        <Route path="/part2" element={<TaskTwo />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App
