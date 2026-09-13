"use client";

import { useState } from "react";

import Envelope from "./components/Envelope";
import OpeningNote from "./components/OpeningNote";
import MemoryTimeline from "./components/MemoryTimeline";
import ReasonGenerator from "./components/ReasonGenerator";
import LoveVouchers from "./components/LoveVouchers";
import FinalNote from "./components/FinalNote";

export default function LovePage() {
  const [chapter, setChapter] = useState(0);

  return (
    <main className="love-page">
      {chapter === 0 && <Envelope onOpen={() => setChapter(1)} />}

      {chapter === 1 && <OpeningNote onNext={() => setChapter(2)} />}

      {chapter === 2 && <MemoryTimeline onNext={() => setChapter(3)} />}

      {chapter === 3 && <ReasonGenerator onNext={() => setChapter(4)} />}

      {chapter === 4 && <LoveVouchers onNext={() => setChapter(5)} />}

      {chapter === 5 && <FinalNote />}
    </main>
  );
}
