"use client";

import { useState } from "react";

import { reasons } from "../data/reasons";

export default function ReasonGenerator({ onNext }) {
  const [reason, setReason] = useState("There are so many reasons...");

  const [isAnimating, setIsAnimating] = useState(false);

  const generateReason = () => {
    setIsAnimating(true);

    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * reasons.length);

      setReason(reasons[randomIndex]);
      setIsAnimating(false);
    }, 300);
  };

  return (
    <section className="chapter-screen reason-screen">
      <div className="chapter-number">Chapter III</div>

      <h2 className="chapter-title">Reasons Why</h2>

      <p className="chapter-subtitle">
        You probably already know some of them.
        <br />
        But maybe there are a few you haven't heard.
      </p>

      <div className="heart-jar">
        <div className="jar-hearts">
          <span>❤️</span>
          <span>💕</span>
          <span>💗</span>
          <span>💖</span>
          <span>❤️</span>
          <span>💗</span>
        </div>

        <div className="jar">
          <div className="jar-lid"></div>

          <div className="jar-body"></div>
        </div>
      </div>

      <div className={`reason-card ${isAnimating ? "reason-changing" : ""}`}>
        <span>♡</span>

        <p>{reason}</p>

        <span>♡</span>
      </div>

      <button className="heart-button" onClick={generateReason}>
        <span>❤️</span>
        Tell Me Something
      </button>

      <button className="chapter-button" onClick={onNext}>
        I Have Something For You
        <span>→</span>
      </button>
    </section>
  );
}
