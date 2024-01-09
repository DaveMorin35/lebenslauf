

export default function Projects() {

    return (
        <>
        <div className="bg-black flex flex-col h-screen justify-center items-center">
              <div className="flex justify-center text-red-700 font-bold underline text-2xl mb-12 mt-12">
                <h1>Projects</h1>
              </div>
              <section id="Projects" className="text-white grid ">
                <div className="grid grid-cols-3 gap-4 grid grid-cols-2 gap-4 max-w-7xl space-x-4 overflow-hidden">
                  <a
                    href="https://github.com/CodecoolGlobal/solar-watch-MVP-java-DaveMorin35.git"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="Weather.png"
                      alt="weather"
                      className="rounded-lg max-h-36 transition ease-in-out duration-700 hover:scale-110"
                    />
                  </a>
                  <a
                    href="https://wallner.bio/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="Wallner.png"
                      alt="wallner"
                      className="rounded-lg max-h-36 transition ease-in-out duration-700 hover:scale-110"
                    />
                  </a>
                  <a
                    href="https://github.com/DaveMorin35/Movie.git"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="Movies.png"
                      alt="movies"
                      className="rounded-lg max-h-36 transition ease-in-out duration-700 hover:scale-110"
                    />
                  </a>
                </div>
              </section>
            </div>
        </>
    )
}