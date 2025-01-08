import { useState, useEffect } from "react";
import Navbar from "./components/navbar/Navbar";
import Homepage from "./components/homepage/Homepage";

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <div>
      <Navbar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      <main >
        <Homepage isDarkMode={isDarkMode} /> 
      </main>
    </div>
  );
};

export default App;
