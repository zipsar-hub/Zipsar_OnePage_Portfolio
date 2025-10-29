import React from 'react'
import Header from './Components/Header'
import Home from './Sections/Home'
import BlobCursor from './Components/BlobCursor'
import About from './Sections/About'
import Service from './Sections/Service'
import CaseStudy from './Sections/CaseStudy';
import News from './Sections/News';
import Contant from './Sections/Contant';

const App = () => {
  return (
    <BlobCursor
      size={30}
      fillColor="#8C00FF"
      hoverColor="#05339C"
      hoverScale={1.5}
    >
      <div className="min-h-screen">
        <Header />
        <Home />
        <About />
        <Service />
        <CaseStudy />
        <News />
        <Contant />
      </div>
    </BlobCursor>
  )
}

export default App