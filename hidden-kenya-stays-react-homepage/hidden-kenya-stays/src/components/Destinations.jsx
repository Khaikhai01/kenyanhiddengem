import React from "react";
import { ArrowRight } from "lucide-react";

export default function Destinations({ destinations }) {
  return (
    <section className="section" id="explore">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Explore Kenya's</p>
          <h2>Hidden Gems</h2>
          <p>Discover amazing places in Kenya, from popular cities to off-the-beaten-path destinations.</p>
        </div>
      </div>
      <div className="destination-grid">
        {destinations.map((destination) => (
          <button className="destination-card" key={destination.name}>
            <img src={destination.image} alt={destination.name} />
            <span>{destination.name}</span>
          </button>
        ))}
        <button className="destination-card more-card">
          <span className="more-icon">
            <ArrowRight size={21} />
          </span>
          <span>More places</span>
        </button>
      </div>
    </section>
  );
}
