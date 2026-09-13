"use client";

import { useState } from "react";

import { memories } from "../data/memories";

export default function MemoryTimeline({ onNext }) {
  const [selectedMemory, setSelectedMemory] = useState(null);

  return (
    <section className="chapter-screen memory-screen">
      <div className="chapter-number">Chapter II</div>

      <h2 className="chapter-title">Our Memories</h2>

      <p className="chapter-subtitle">Some moments I never want to forget.</p>

      <div className="timeline">
        {memories.map((memory, index) => (
          <div className={`timeline-item ${index % 2 === 0 ? "timeline-left" : "timeline-right"}`} key={memory.id}>
            <div className="timeline-dot">❤️</div>

            <button className="memory-card" onClick={() => setSelectedMemory(memory)}>
              <div className="memory-image">
                <img src={memory.image} alt={memory.title} />
              </div>

              <div className="memory-content">
                <span>{memory.date}</span>

                <h3>{memory.title}</h3>

                <p>Click to remember →</p>
              </div>
            </button>
          </div>
        ))}
      </div>

      {selectedMemory && (
        <div className="memory-modal" onClick={() => setSelectedMemory(null)}>
          <div className="memory-modal-card" onClick={(event) => event.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedMemory(null)}>
              ×
            </button>

            <img src={selectedMemory.image} alt={selectedMemory.title} />

            <span>{selectedMemory.date}</span>

            <h3>{selectedMemory.title}</h3>

            <p>{selectedMemory.message}</p>
          </div>
        </div>
      )}

      <button className="chapter-button" onClick={onNext}>
        There Is More
        <span>→</span>
      </button>
    </section>
  );
}
