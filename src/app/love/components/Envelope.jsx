"use client";

import { useRef, useState } from "react";

export default function Envelope({ onOpen }) {
  const audioRef = useRef(null);
  const [opening, setOpening] = useState(false);

  const handleOpen = () => {
    if (opening) return;

    setOpening(true);

    if (audioRef.current) {
      audioRef.current.volume = 0.4;

      audioRef.current.play().catch(() => {
        console.log("Music could not be played.");
      });
    }

    setTimeout(() => {
      onOpen();
    }, 2200);
  };

  return (
    <section className="envelope-screen">
      <audio ref={audioRef} src="/music/our-song.mp3" loop />

      <div className={`envelope-wrapper ${opening ? "envelope-opening" : ""}`}>
        <div className="envelope">
          <div className="envelope-flap"></div>

          <div className="envelope-letter">
            <p>For You</p>
            <span>❤️</span>
          </div>

          <button className="wax-seal" onClick={handleOpen} aria-label="Open letter">
            ❤️
          </button>
        </div>
      </div>

      <div className="envelope-text">
        <p className="small-label">A little something I made for you</p>

        <h1>
          For My
          <br />
          Favorite Person
        </h1>

        <p className="open-text">{opening ? "Opening your letter..." : "Click the heart to open"}</p>
      </div>
    </section>
  );
}
