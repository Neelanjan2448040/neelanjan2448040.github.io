import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Education from '../components/Education'
import Experience from '../components/Experience'
import Publication from '../components/Publication'
import Contact from '../components/Contact'

const Home = () => {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <section id="education">
        <Education />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <Publication />
      <Contact />
    </main>
  );
};

export default Home;
