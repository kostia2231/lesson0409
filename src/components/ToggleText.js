import React, { useState, useRef } from "react";
import styles from "../components/ToggleText.module.css";

export default function ToggleText() {
  const textRef = useRef(null);
  const [isVisible, setIsVisible] = useState(true);
  const [duration, setDuration] = useState(0.5);

  function handleToggle() {
    const animationDuration = `${duration}s`;
    textRef.current.style.transition = `all ${animationDuration} ease`;

    if (isVisible) {
      textRef.current.style.maxHeight = "0";
      textRef.current.style.opacity = "0";
      textRef.current.style.overflow = "hidden";
    } else {
      textRef.current.style.maxHeight = "200px";
      textRef.current.style.opacity = "1";
    }

    setIsVisible(!isVisible);
  }

  return (
    <div className={styles}>
      <div className={styles.topWrapper}>
        <button onClick={handleToggle}>{isVisible ? "Hide" : "Show"}</button>
        <input
          type="number"
          value={duration}
          min="0.1"
          step="0.1"
          max="10"
          onChange={(e) => setDuration(parseFloat(e.target.value) || 0.5)}
        />
        <p style={{ color: "white" }}>— is animation duration.</p>
      </div>
      <div
        ref={textRef}
        style={{
          maxHeight: "200px",
          opacity: "1",
          transition: `all ${duration}s ease`,
          overflow: "hidden",
        }}
        className={styles.textWrapper}
      >
        <p>This is hidden text, please press the button to hide or show it!</p>
      </div>
    </div>
  );
}
