import Menu from "../components/Menu";
import { TypeAnimation } from "react-type-animation";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import Skills from "../components/Skills";
import About from "../components/About";
import Projects from "../components/Projects";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <AnimatePresence>
        <motion.div
          className="bg-black flex flex-col min-h-screen"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          exit={{ scaleY: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex flex-col min-h-screen">
            <div className="bg-black flex-grow">
              <Menu />
              <div className="flex flex-col h-screen justify-center items-center">
                <section
                  id="Home"
                  className=" text-white grid grid-cols-2 gap-4 ml-20 max-w-7xl"
                >
                  <div className="">
                    <h2 className="text-5xl font-bold">
                      Hi, <br></br>I'm{" "}
                      <span className="text-red-700">David</span>
                      <br></br>
                      <TypeAnimation
                        sequence={[
                          "React.js Developer",
                          500,
                          "Java Developer",
                          500,
                        ]}
                        speed={40}
                        repeat={Infinity}
                      />
                    </h2>
                    <a
                      type="button"
                      href="#Contact"
                      className="rounded-lg bg-red-700 px-4 py-1 mt-10"
                    >
                      Contact
                    </a>
                    <div className="flex mt-6">
                      <a
                      href="https://www.linkedin.com/in/david-morin-b57343291"
                      target="_blank"
                      >
                      <img src="linkedin.png" alt="linkedin" className="invert  w-6"/>
                        </a>
                      <img src="github.png" alt="github" className="invert ml-6 w-6"/>
                    </div>
                  </div>
                  <div className="ml-48">
                    <img src="/logo.png" alt="logo" className="invert ml-12" />
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
}
