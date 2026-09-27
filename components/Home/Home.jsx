import React, { useEffect, useState } from "react";
import "./Home.css";
import man from "../../assets/man.png";

function Home() {
  const texts = [
    "A FRONTEND DEVELOPER",
    "A SOFTWARE DEVELOPER",
    "A WEB DESIGNER",
  ];

  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentText = texts[textIndex];

    if (charIndex < currentText.length) {
      const timer = setTimeout(() => {
        setDisplayText(currentText.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 100);

      return () => clearTimeout(timer);
    }

    const timer = setTimeout(() => {
      setDisplayText("");
      setCharIndex(0);
      setTextIndex((textIndex + 1) % texts.length);
    }, 1000);

    return () => clearTimeout(timer);
  }, [charIndex, textIndex]);

  return (
    <div id="home">

      <div className="lefthome">
        <div className="homedetails">

          <div className="line1">
            I'M
          </div>

          <div className="line2">
            ARPIT SRIVASTAVA
          </div>

          <div className="line3">
            {displayText}|
          </div>

          <button>Hire Me</button>

        </div>
      </div>

      <div className="righthome">
        <img src={man} alt="Developer" />
      </div>

    </div>
  );
}

export default Home;