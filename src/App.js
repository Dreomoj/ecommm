import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layouts from './components/Layouts';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layouts />}>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        </Route>

      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App