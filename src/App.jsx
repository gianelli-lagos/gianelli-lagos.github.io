import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";

import { About, Education, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, Footer} from "./components";


const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    
    <BrowserRouter>
    <div className={`relative z-0 ${darkMode ? "dark" : ""}`} >
      <div className='relative z-0 bg-[#F1F5F9] dark:bg-[#050816]'>
        {/* <div className='bg-flowerstar-pattern dark:bg-flowerstardark-pattern bg-cover bg-no-repeat bg-center'> */}
        <div className='g-cover bg-no-repeat bg-center'>
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
          <Hero darkMode={darkMode}/>
        </div>
        <About darkMode={darkMode}/>
        <Education darkMode={darkMode}/>
        <Experience darkMode={darkMode} />
        <Tech darkMode={darkMode} />
        <Works darkMode={darkMode}/>
        {/* <Feedbacks /> */}
        <div className='relative z-0'>
          <Contact darkMode={darkMode}/>
          <StarsCanvas />
          <Footer darkMode={darkMode}/>
        </div>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;