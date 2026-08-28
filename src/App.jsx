import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";

import { About, Education, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, Footer } from "./components";
import { StarProvider } from "./contexts/StarContext";
import StarReveal from "./components/StarReveal";
import StarHint from "./components/StarHint";
import LastUpdated from "./components/LastUpdated";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <StarProvider>
      <BrowserRouter>
        <div className={`relative z-0 ${darkMode ? "dark" : ""}`}>
          <div className='relative z-0 bg-[#F1F5F9] dark:bg-[#050816]'>
            <div className='g-cover bg-no-repeat bg-center'>
              <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
              <Hero darkMode={darkMode} />
            </div>
            <About darkMode={darkMode} />
            <Education darkMode={darkMode} />
            <Experience darkMode={darkMode} />
            <Tech darkMode={darkMode} />
            <Works darkMode={darkMode} />
            {/* <Feedbacks /> */}
            <div className='relative z-0'>
              <Contact darkMode={darkMode} />
              <StarsCanvas darkMode={darkMode} />
              <Footer darkMode={darkMode} />
            </div>
          </div>

          <StarReveal darkMode={darkMode} />
          <StarHint />
          <LastUpdated />

        </div>
      </BrowserRouter>
    </StarProvider>
  );
}

export default App;