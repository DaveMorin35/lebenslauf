import Menu from "./Menu";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  return (
    <>
      <div className="bg-black">
        <div>
          <Menu />
        </div>
        <div className="flex flex-col h-screen justify-center items-center">
          <section
            id="Home"
            className=" text-white grid grid-cols-2 gap-4 ml-20 max-w-7xl"
          >
            <div className="">
              <h2 className="text-5xl font-bold">
                Hi, <br></br>I'm <span className="text-red-700">David</span>
                <br></br>
                <TypeAnimation
                  sequence={["React.js Developer", 500, "Java Developer", 500]}
                  speed={40}
                  repeat={Infinity}
                />
              </h2>
              <button
                type="button"
                className="rounded-lg bg-red-700 px-4 py-1 mt-10"
              >
                Contact
              </button>
            </div>
            <div className="ml-48">
              <img src="/logo.png" alt="logo" className="invert ml-12" />
            </div>
          </section>
        </div>
      </div>

      <div className="bg-black flex flex-col h-screen justify-center items-center">
        <div className="flex justify-center text-red-700 font-bold underline text-2xl mb-12 mt-12">
          <h1>About</h1>
        </div>
        <section
          id="About"
          className="text-white grid grid-cols-2 gap-4 ml-20 max-w-7xl mt-24 mr-6"
        >
          <div>
            <img src="/logo.png" alt="logo" className="invert ml-12" />
          </div>
          <div>
            <p>
              Hello, <br></br>Hard working software engineering student from
              Zenica in my third and final year. I'm also a former Pharmacy
              technician and a future full stack developer. I’ve found my
              passion in web development. I love spending time coding and
              encountering new challenges. I’m highly adaptable to new
              challenges and projects. I'm a Junior Scholar at Bosnia and
              Herzegovina Futures foundation and that is the best thing that
              happened to me.
            </p>
          </div>
        </section>
      </div>

      <div className="bg-black flex flex-col h-screen justify-center items-center">
        <div className="flex justify-center text-red-700 font-bold underline text-2xl mb-12">
          <h1>Skills</h1>
        </div>
        <section id="Skills" className="text-white grid grid-cols-2 gap-4 ml-20 max-w-7xl">
          {/* TAILWIND */}
        
            <div className="mr-10 flex items-center">
              <div className="mr-2">
                <img
                  src="/tailwind-css.svg"
                  alt="logo"
                  className="invert w-10"
                />
              </div>
              <div className="text-white">
                <h1 className="pt-2 sm:pt-5">TAILWIND</h1>
                <div className="mt-2 h-2 relative w-60 rounded-full overflow-hidden">
                  <div className="h-full bg-red-700 absolute w-full"></div>
                </div>
              </div>
            </div>

            {/* Javascript */}
            <div className="mr-10 flex items-center">
              <div className="mr-2">
                <img
                  src="/tailwind-css.svg"
                  alt="logo"
                  className="invert w-10"
                />
              </div>
              <div className="text-white">
                <h1 className="pt-2 sm:pt-5">Javascript</h1>
                <div className="mt-2 h-2 relative w-60 rounded-full overflow-hidden">
                  <div className="h-full bg-red-700 absolute w-full"></div>
                </div>
              </div>
            </div>
       

          {/* React.js */}
         
            <div className="mr-10 flex items-center">
              <div className="mr-2">
                <img
                  src="/tailwind-css.svg"
                  alt="logo"
                  className="invert w-10"
                />
              </div>
              <div className="text-white">
                <h1 className="pt-2 sm:pt-5">React.js</h1>
                <div className="mt-2 h-2 relative w-60 rounded-full overflow-hidden">
                  <div className="h-full bg-red-700 absolute w-full"></div>
                </div>
              </div>
            </div>

            {/* Java */}
            <div className="mr-10 flex items-center">
              <div className="mr-2">
                <img
                  src="/tailwind-css.svg"
                  alt="logo"
                  className="invert w-10"
                />
              </div>
              <div className="text-white">
                <h1 className="pt-2 sm:pt-5">Java</h1>
                <div className="mt-2 h-2 relative w-60 rounded-full overflow-hidden">
                  <div className="h-full bg-red-700 absolute w-full"></div>
                </div>
              </div>
            </div>
          

          {/* Sping Boot */}
        
            <div className="mr-10 flex items-center">
              <div className="mr-2">
                <img
                  src="/tailwind-css.svg"
                  alt="logo"
                  className="invert w-10"
                />
              </div>
              <div className="text-white">
                <h1 className="pt-2 sm:pt-5">Spring Boot</h1>
                <div className="mt-2 h-2 relative w-60 rounded-full overflow-hidden">
                  <div className="h-full bg-red-700 absolute w-full"></div>
                </div>
              </div>
            </div>

            {/* Spring Security */}
            <div className="mr-10 flex items-center">
              <div className="mr-2">
                <img
                  src="/tailwind-css.svg"
                  alt="logo"
                  className="invert w-10"
                />
              </div>
              <div className="text-white">
                <h1 className="pt-2 sm:pt-5">Spring Security</h1>
                <div className="mt-2 h-2 relative w-60 rounded-full overflow-hidden">
                  <div className="h-full bg-red-700 absolute w-full"></div>
                </div>
              </div>
            </div>
         
        </section>
      </div>
    </>
  );
}
