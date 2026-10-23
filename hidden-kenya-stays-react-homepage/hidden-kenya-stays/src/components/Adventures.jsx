import React from "react";
import { ArrowRight } from "lucide-react";

export default function Adventures({ adventureTypes }) {
  return (
    <section className="section">
      <div className="section-heading">
        <p className="eyebrow">Plan your Kenya adventure</p>
        <h2>Go beyond the stay</h2>
        <p>Find accommodation around the experiences you want to have.</p>
      </div>
      <div className="adventure-grid">
        {adventureTypes.map((type) => (
          <button className="adventure-card" key={type.title}>
            <img src={type.image} alt={type.title} />
            <span>{type.title}</span>
            <ArrowRight size={20} />
          </button>
        ))}
      </div>
    </section>
  );
}
