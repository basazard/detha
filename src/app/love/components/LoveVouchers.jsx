"use client";

import { useState } from "react";
import { vouchers } from "../data/vouchers";

export default function LoveVouchers({ onNext }) {
  const [claimed, setClaimed] = useState([]);

  const redeemVoucher = (voucher) => {
    if (claimed.includes(voucher.id)) {
      return;
    }

    setClaimed([...claimed, voucher.id]);
  };

  return (
    <section className="chapter-screen voucher-screen">
      <div className="chapter-number">Chapter IV</div>

      <h2 className="chapter-title">Love Vouchers</h2>

      <p className="chapter-subtitle">
        A few things you can officially claim.
        <br />
        Whenever you want. ❤️
      </p>

      <div className="voucher-grid">
        {vouchers.map((voucher) => {
          const isClaimed = claimed.includes(voucher.id);

          return (
            <div className={`voucher ${isClaimed ? "voucher-claimed" : ""}`} key={voucher.id}>
              <div className="voucher-icon">{voucher.icon}</div>

              <div className="voucher-details">
                <span className="voucher-label">LOVE VOUCHER</span>

                <h3>{voucher.title}</h3>

                <p>{voucher.description}</p>
              </div>

              <button className="redeem-button" disabled={isClaimed} onClick={() => redeemVoucher(voucher)}>
                {isClaimed ? "✓ Claimed" : "Redeem ❤️"}
              </button>
            </div>
          );
        })}
      </div>

      <button className="chapter-button" onClick={onNext}>
        One Last Thing...
        <span>→</span>
      </button>
    </section>
  );
}
