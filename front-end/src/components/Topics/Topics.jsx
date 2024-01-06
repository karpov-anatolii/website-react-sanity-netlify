import React, { useState } from "react";
import "./Topics.css";
import {
  mastering,
  MixingConcole,
  mixing,
  vocals,
  daw,
  frequencies,
  bgElement1,
} from "../../assets";

const Topics = () => {
  const [currentImage, setCurrentImage] = useState(frequencies);

  return (
    <section id="topics" className="black">
      <div className="wrapper">
        <h2>What will you learn?</h2>
        <div className="content-container">
          <ul className="topics-list">
            <li onMouseEnter={() => setCurrentImage(frequencies)}>
              What are frequencies?
            </li>
            <li onMouseEnter={() => setCurrentImage(daw)}>Using DAW</li>
            <li onMouseEnter={() => setCurrentImage(vocals)}>
              Vocals Processing
            </li>
            <li onMouseEnter={() => setCurrentImage(mixing)}>Mixing</li>
            <li onMouseEnter={() => setCurrentImage(MixingConcole)}>
              Mixing Console
            </li>
            <li onMouseEnter={() => setCurrentImage(mastering)}>Mastering</li>
          </ul>
          <div className="topic-image">
            <img src={currentImage} alt="" />
          </div>
        </div>
        <img src={bgElement1} alt="" className="bg-element-1" />
      </div>
    </section>
  );
};

export default Topics;
