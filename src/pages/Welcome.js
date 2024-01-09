import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Typewriter = ({ text, speed, onComplete }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setDisplayedText((prevText) => prevText + text[index]);
      setIndex((prevIndex) => prevIndex + 1);
    }, speed);

    return () => {
      clearInterval(timer);
    };
  }, [text, index, speed]);

  useEffect(() => {
    if (index === text.length) {
      onComplete && onComplete();
      navigate('/home');
    }
  }, [index, text, onComplete, navigate]);

  return <span>{displayedText}</span>;
};

export default function Welcome() {
  const [showHomePage, setShowHomePage] = useState(false);
  const navigate = useNavigate();

  const handleHomePage = () => {
    setShowHomePage(true);
    navigate('/home');
  };

  return (
    <>
      <div className="bg-black min-h-screen items-center flex flex-col">
        <div className="text-4xl text-white flex flex-grow flex-col justify-center">
          <Typewriter text="Welcome" speed={100} onComplete={handleHomePage} />
        </div>
      </div>
    </>
  );
}
