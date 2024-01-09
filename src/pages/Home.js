import Menu from "../components/Menu";
import { TypeAnimation } from "react-type-animation";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import Skills from "../components/Skills";
import About from "../components/About";
import Projects from "../components/Projects";

export default function Home() {
  return (
    <>
      <AnimatePresence>
        <motion.div
          className="bg-black flex flex-col min-h-screen"
          initial={{  opacity: 0}}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
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
                   <div className="mr-48 w-96">
                    <img src="/Morin.png" alt="logo" className="" />
                  </div>
                  <div className="ml-24 mt-16">
                    <h2 className="text-5xl font-bold">
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
                        <a
                        href="https://github.com/DaveMorin35"
                        target="_blank">
                      <img src="github.png" alt="github" className="invert ml-6 w-6"/>
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
}
