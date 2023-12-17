import React, { useEffect } from "react";
import Typed from "typed.js";
import "./WordType.css";

const WordType = () => {
  useEffect(() => {
    const options = {
      strings: [" Food Delivery"],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };

    const typed = new Typed(".txt", options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className="conainer">
        <span className="ftext">Fast</span>
        <span className="txt"></span>
      </div>
    </>
  );
};

export default WordType;
