import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Navbar from "./navbar/Navbar";
import ChatWidget from "./pages/ChatWidget";

function App() {
  const [theme, setTheme] = useState("dark");


  const [count, setCount] = useState(0);

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <BrowserRouter>
 
      <Navbar
        theme={theme}
        setTheme={setTheme}
        count={count}
      />

      <ChatWidget />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              count={count}
              setCount={setCount}
            />
          }
        />

        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;