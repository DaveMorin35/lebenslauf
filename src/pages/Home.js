import { TypeAnimation } from "react-type-animation";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import Skills from "../components/Skills";
import About from "../components/About";
import Menu from "../components/Menu";
import Projects from "../components/Projects";

const WelcomeText = () => {
  const word = "Welcome";
  const [letters, setLetters] = useState([]);

  useEffect(() => {
    const letterElements = word.split("").map((letter, index) => (
      <motion.span
        key={index}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
      >
        {letter}
      </motion.span>
    ));

    setLetters(letterElements);
  }, [word]);

  return <>{letters}</>;
};

const Home = () => {
  const [showPage, setShowPage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPage(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!showPage) {
    return (
      <div className="bg-black min-h-screen flex items-center">
        <div className="text-4xl flex flex-grow justify-center text-transparent bg-gradient-to-r from-red-400 via-red-700 to-red-900 bg-clip-text-webkit">
          <WelcomeText />
        </div>
      </div>
    );
  }

  return (
    <>
      <AnimatePresence>
        <div className="flex flex-col min-h-screen">
          <div className="bg-black flex-grow">
            <Menu />
            <div className="flex flex-col h-screen justify-center items-center">
              <section
                id="Home"
                className="text-white grid md:grid-cols-2 sm:grid-cols-1 gap-4 ml-20"
              >
                <div className="md:mr-40 w-60 md:w-72 lg:w-96 sm:w-64 md:ml-20">
                  <img src="/Morin.png" alt="logo" className="transform transition duration-500 hover:scale-110" />
                </div>
                <div className="ml-4 mt-12 md:ml-20">
                  <h2 className=" md:text-2xl lg:text-5xl font-bold sm:ml-16 md:ml-0">
                    Hi, <br></br>I'm <span className="text-red-700">David</span>
                    <br></br>
                    <TypeAnimation
                      sequence={[
                        "React.js Developer",
                        1500,
                        "Java Developer",
                        1500,
                        "Sport addict",
                        1500,
                      ]}
                      speed={150}
                      repeat={Infinity}
                    />
                  </h2>
                  <a
                    type="button"
                    href="#Contact"
                    className="rounded-lg bg-red-700 px-4 py-1 mt-10 sm:ml-16 md:ml-0"
                  >
                    Contact
                  </a>
                  <div className="flex mt-6 md:justify-normal sm:justify-center">
                    <a
                      href="https://www.linkedin.com/in/david-morin-b57343291"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src="linkedin.png"
                        alt="linkedin"
                        className="invert  w-6"
                      />
                    </a>
                    <a
                      href="https://github.com/DaveMorin35"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src="github.png"
                        alt="github"
                        className="invert ml-6 w-6"
                      />
                    </a>
                  </div>
                </div>
              </section>
            </div>
          </div>
          <About />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </div>
      </AnimatePresence>
    </>
  );
};

export default Home;