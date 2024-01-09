
export default function About() {

const handleCertificateDownload = () => {
  const certificateFile = "Zertifikat.pdf";

  const link = document.createElement("a");
  link.href = certificateFile;
  link.target = '_blank';
  link.download = 'Zertifikat.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const handleCv = () => {
  const CvFile = "cv_DavidMorin.pdf";

  const link = document.createElement("a");
  link.href = CvFile;
  link.target= "_blank";
  link.download = "cv_DavidMorin";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
  return (
    <>
      <div className="bg-black flex flex-col h-screen justify-center items-center">
        <div className="flex justify-center text-red-700 font-bold underline text-2xl mb-12 mt-12">
          <h1>About</h1>
        </div>
        <section
          id="About"
          className="text-white grid grid-cols-2 gap-4 max-w-5xl mt-24 mr-6"
        >
          <div>
            <p>
              Hello, <br></br>As a recently certified full-stack developer specializing in modern web applications, 
              I bring a current and innovative perspective to the field. 
              My comprehensive training has provided me with a strong base in diverse technology stacks, positioning me for success in dynamic project environments. 
              Fueled by a passion for code excellence and streamlined solutions, 
              I am excited to explore new technologies and actively contribute to innovative projects.
            </p>

            <div className="flex justify-center">
              <button
                type="button"
                className="rounded-lg bg-red-700 px-4 py-1 mt-10 mr-6"
                onClick={handleCv}
              >
                Download CV
              </button>
              <button
                type="button"
                className="rounded-lg bg-red-700 px-4 py-1 mt-10"
                onClick={handleCertificateDownload}
              >
                Download Certificate
              </button>
            </div>
          </div>
          <div className="ml-32">
            <img src="/Morin.jpg" alt="logo" className="ml-12 rounded-xl w-64" />
          </div>
        </section>
      </div>
    </>
  );
}
