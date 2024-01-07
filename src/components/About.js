export default function About() {
  return (
    <>
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

            <div className="flex justify-center">
              <button
                type="button"
                className="rounded-lg bg-red-700 px-4 py-1 mt-10 mr-6"
              >
                Download CV
              </button>
              <button
                type="button"
                className="rounded-lg bg-red-700 px-4 py-1 mt-10"
              >
                Download Certificate
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
