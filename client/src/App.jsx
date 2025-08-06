import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import TaskOne from './pages/TaskOne';
import TaskTwo from './pages/TaskTwo';

function App() {

  return (
    <BrowserRouter basename='/'>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/part1" element={<TaskOne/>} />
        <Route path="/part2" element={<TaskTwo />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App
