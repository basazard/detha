"use client";

import { useEffect, useState } from "react";

export default function OpeningNote({ onNext }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setVisible(true);
    }, 200);
  }, []);

  return (
    <section className={`chapter-screen paper-screen ${visible ? "chapter-visible" : ""}`}>
      <div className="chapter-number">Chapter I</div>

      <h2 className="chapter-title">The Opening Note</h2>

      <div className="letter-paper">
        <div className="paper-decoration">✦</div>

        <p className="letter-greeting">Untuk Ade Tersayang,,</p>

        <p>
          Ngga kerasa ya, hampir dua tahun yang lalu kita pertama kali saling mengenal dan memulai hubungan ini. Kalau ngeliat lagi perjalanan yang udah kita
          lewatin, rasanya bener bener diluar nalar. Kita pernah sama-sama ketawa, ngelewatinnya dengan bahagia, sampe akhirnya harus merasakan pisah dan
          berjalan sendiri dulu.
        </p>

        <p>
          Saat kita sempat terputus kemarin, Mas menyadari satu hal: ruang yang kosong itu emang dibuat untuk Ade. Perpisahan kemarin ngasih tau Mas banyak hal
          tentang betapa berharganya kehadiran Ade, dan Mas jadi kehilangan arah tanpa ada Ade di samping Mas.
        </p>

        <p>
          Terima kasih ya, De, sudah berkenan untuk membuka pintu hati lagi dan memberi kesempatan buat hubungan kita. balik pegangan tangan dengan Ade mungkin
          salah satu hal terbaik yang Mas syukuri tahun ini.
        </p>

        <p>
          Kali ini, Mas ingin janji, bukan janji yang gimana-gimana, tapi janji untuk berjuang. Ayoo, kita saling menguatkan di setiap musim yang akan kita
          hadapi nanti. Kalau ada hari yang berat, cerita ke Mas, ya? Kita lewati semuanya sama-sama. Mas akan berusaha jadi tempat ade kembali dan penyemangat
          terbaik buat Ade, kayak Ade yang selalu jadi alasan Mas untuk terus berjuang.
        </p>

        <p>Terima kasih sudah memilih untuk kembali dan berjuang lagi dengan Mas.</p>

        <p className="letter-signature">
          Dengan penuh rasa sayang,
          <br />
          <span>Mas ❤️</span>
        </p>
      </div>

      <button className="chapter-button" onClick={onNext}>
        Continue Our Story
        <span>→</span>
      </button>
    </section>
  );
}
