"use client";

import { useState } from "react";

export default function FinalNote() {
  const [accepted, setAccepted] = useState(false);

  return (
    <section className="chapter-screen final-screen">
      {!accepted ? (
        <>
          <div className="chapter-number">Our Next Chapter</div>

          <div className="final-heart">❤️</div>

          <h2 className="final-title">
            Dan ini...
            <br />
            baru awal dari semuanya.
          </h2>

          <div className="final-letter">
            <p>Udah banyak banget kenangan yang kita lewati berdua.</p>

            <p>Tapi sejujurnya, bagian favorit Mas bukan cuma tentang ngeliat ke belakang dan ingat hal-hal yang udah pernah kita laluin.</p>

            <p>Tapi pas Mas nyadar, ternyata masih banyak banget hal seru yang belum sempat kita coba bareng.</p>

            <p>
              Masih banyak tempat keren buat didatengin.
              <br />
              Masih banyak kulineran enak yang harus dicobain.
              <br />
              Masih banyak obrolan random yang belum diceritain.
              <br />
              Masih banyak bercandaan garing yang bikin ketawa.
              <br />
              Dan masih banyak hari-hari biasa yang bakal makin berkesan kalau sama Ade.
            </p>

            <p>Dan semoga...</p>

            <p className="final-emphasis">masih banyak bab-bab baru cerita kita selanjutnya.</p>

            <p>
              Jadi, buat semua kenangan yang pernah ada...
              <br />
              dan buat semua petualangan seru yang udah nunggu di depan.
            </p>

            <p className="final-signature">
              Dengan segenap rasa sayang,
              <br />
              <span>❤️ Mas</span>
            </p>
          </div>

          <div className="date-card">
            <span>PETUALANGAN KITA SELANJUTNYA</span>

            <strong>Segera Hadir</strong>

            <p>Tanggal mainnya lagi kita siapin.</p>
          </div>

          <button className="final-button" onClick={() => setAccepted(true)}>
            Lanjut Jalan Bareng Mas ❤️
          </button>
        </>
      ) : (
        <div className="accepted-screen">
          <div className="big-heart">❤️</div>

          <h1>Kisah Kita Berlanjut</h1>

          <p>Dan Mas gak sabar buat nunggu kejutan berikutnya bareng Ade.</p>

          <div className="floating-hearts">❤️ 💕 💗 💖 ❤️</div>
        </div>
      )}
    </section>
  );
}
