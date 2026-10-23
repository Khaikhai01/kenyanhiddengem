import React from "react";
import { ArrowRight } from "lucide-react";

export default function OwnerCta() {
  return (
    <section className="owner-cta" id="list">
      <div className="owner-inner">
        <div>
          <p className="eyebrow light">Are you a property owner?</p>
          <h2>List your B&amp;B, lodge, guesthouse or hotel.</h2>
          <p>Reach more travelers looking for affordable, authentic places to stay.</p>
        </div>
        <button className="light-button">
          List Your Property <ArrowRight size={18} />
        </button>
      </div>
    </section>
  );
}
