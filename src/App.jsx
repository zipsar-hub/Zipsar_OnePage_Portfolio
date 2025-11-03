import React from 'react'
import Header from './Components/Header'
import Home from './Sections/Home'
import BlobCursor from './Components/BlobCursor'
import About from './Sections/About'
import Service from './Sections/Service'
import CaseStudy from './Sections/CaseStudy';
import News from './Sections/News';
import Contant from './Sections/Contant';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
const App = () => {
  return (
    <Router>
      <BlobCursor
        size={30}
        fillColor="#2569ED"
        hoverColor="#EDB842"
        hoverScale={1.5}
      >
        <div className="min-h-screen">
          <Header />
          <Routes>
            <Route path='/' index element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/service' element={<Service/>}/>
            <Route path='/case-study' element={<CaseStudy/>}/>
            <Route path='/news' element={<News/>}/>
            <Route path='/contact' element={<Contant/>}/>
          </Routes>
        </div>
      </BlobCursor>
    </Router>
  )
}

export default App