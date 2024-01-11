import Menu from "../components/Menu";
import { TypeAnimation } from "react-type-animation";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import Skills from "../components/Skills";
import About from "../components/About";
import Projects from "../components/Projects";

const Home = () => {
  return (
    <>
      <AnimatePresence>
        <motion.div
          className="bg-black flex flex-col min-h-screen"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex flex-col min-h-screen">
            <div className="bg-black flex-grow">
              <Menu />
              <div className="flex flex-col h-screen justify-center items-center">
                <section
                  id="Home"
                  className="text-white grid md:grid-cols-2 sm:grid-cols-1 gap-4 ml-20"
                >
                  <div className="md:mr-40 w-60 md:w-72 lg:w-96 sm:w-64 md:ml-20">
                    <img src="/Morin.png" alt="logo" className="" />
                  </div>
                  <div className="ml-4 mt-12 md:ml-20">
                    <h2 className=" md:text-2xl lg:text-5xl font-bold sm:ml-16 md:ml-0">
                      Hi, <br></br>I'm{" "}
                      <span className="text-red-700">David</span>
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
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default Home;
