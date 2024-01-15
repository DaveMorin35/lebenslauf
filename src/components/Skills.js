export default function Skills() {
  return (
    <>
      <div className="bg-black flex flex-col h-screen justify-center items-center">
        <div className="flex text-red-700 font-bold underline text-3xl mb-12">
          <h1>Skills</h1>
        </div>
        <section
          id="Skills"
          className="text-white grid grid-cols-1 md:grid-cols-2 gap-4 "
        >
          {/* TAILWIND */}

          <div className="mr-10 flex items-center">
            <div className="mr-2">
              <img
                src="/tailwind-css.svg"
                alt="logo"
                className="invert w-6 sm:w-8"
              />
            </div>
            <div className="text-white">
              <h1 className="pt-2 sm:pt-5">Tailwind</h1>
              <div className="mt-2 h-2 relative w-60 rounded-full overflow-hidden">
                <div className="h-full bg-red-700 absolute w-full"></div>
              </div>
            </div>
          </div>

          {/* Javascript */}
          <div className="mr-10 flex items-center ">
            <div className="mr-2 ">
              <img
                src="/javascript.png"
                alt="logo"
                className="invert w-6 sm:w-8"
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
              <img src="/react.png" alt="logo" className="invert w-6 sm:w-8" />
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
              <img src="/java.png" alt="logo" className="invert w-6 sm:w-8" />
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
                src="/spring-boot.png"
                alt="logo"
                className="invert w-6 sm:w-8"
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
                src="/springsecurity.png"
                alt="logo"
                className="invert w-6 sm:w-8"
              />
            </div>
            <div className="text-white">
              <h1 className="pt-2 sm:pt-5">Spring Security</h1>
              <div className="mt-2 h-2 relative w-60 rounded-full overflow-hidden">
                <div className="h-full bg-red-700 absolute w-full"></div>
              </div>
            </div>
          </div>

          {/* SQL*/}
          <div className="mr-10 flex items-center">
            <div className="mr-2">
              <img src="/sql.png" alt="logo" className="invert w-6 sm:w-8" />
            </div>
            <div className="text-white">
              <h1 className="pt-2 sm:pt-5">Sql</h1>
              <div className="mt-2 h-2 relative w-60 rounded-full overflow-hidden">
                <div className="h-full bg-red-700 absolute w-full"></div>
              </div>
            </div>
          </div>

          {/* GIT */}
          <div className="mr-10 flex items-center">
            <div className="mr-2">
              <img src="/github.png" alt="logo" className="invert w-6 sm:w-8" />
            </div>
            <div className="text-white">
              <h1 className="pt-2 sm:pt-5">Git</h1>
              <div className="mt-2 h-2 relative w-60 rounded-full overflow-hidden">
                <div className="h-full bg-red-700 absolute w-full"></div>
              </div>
            </div>
          </div>

          {/* Wordpress */}
          <div className="mr-10 flex items-center">
            <div className="mr-2">
              <img
                src="/wordpress.png"
                alt="logo"
                className="invert w-6 sm:w-8"
              />
            </div>
            <div className="text-white">
              <h1 className="pt-2 sm:pt-5">Wordpress</h1>
              <div className="mt-2 h-2 relative w-60 rounded-full overflow-hidden">
                <div className="h-full bg-red-700 absolute w-full"></div>
              </div>
            </div>
          </div>

          {/* Css3*/}
          <div className="mr-10 flex items-center">
            <div className="mr-2">
              <img src="/css3.png" alt="logo" className="invert w-6 sm:w-8" />
            </div>
            <div className="text-white">
              <h1 className="pt-2 sm:pt-5">Css3</h1>
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
