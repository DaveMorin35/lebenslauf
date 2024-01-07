import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Typed from "react-typed";

export default function Welcome() {
  const [showHomePage, setShowHomePage] = useState(false);
  const navigate = useNavigate();

  const handleHomePage = () => {
    setShowHomePage(true);
    navigate("/home");
  };



  return (
    <>
    <div className="bg-black min-h-screen items-center flex flex-col">
      <div className="text-4xl text-white flex flex-grow flex-col justify-center">
        <Typed 
        strings={["Welcome"]} 
        typeSpeed={100} 
        showCursor={true} 
        onComplete={handleHomePage}
        />
      </div>
    </div>
  </>
  );
}
