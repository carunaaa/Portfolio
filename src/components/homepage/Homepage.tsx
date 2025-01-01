import { FC } from "react";
import About from "../about/About";
import Projects from "../project/Projects";
import Contact from "../contact/Contact";

interface HomepageProps {
  isDarkMode: boolean;
}

const Homepage: FC<HomepageProps> = ({ isDarkMode }) => {
  return (
    <div>
      <section id="home">
        <About isDarkMode={isDarkMode} />
      </section>
      <section id="projects">
        <Projects isDarkMode={isDarkMode} />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default Homepage;
