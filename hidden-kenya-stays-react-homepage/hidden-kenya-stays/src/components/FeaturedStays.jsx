import React from "react";
import { Heart, MapPin, Star, ArrowRight } from "lucide-react";

export default function FeaturedStays({ stays }) {
  // Tracks which stay names are "saved". A Set keeps this cheap to
  // check and toggle, and keying by name is fine here since names
  // are unique in the data — swap for stable ids once this is real data.
  const [saved, setSaved] = React.useState(new Set());

  function toggleSaved(name) {
    setSaved((prev) => {
      const next = new Set(prev);
      next.has(name) ? next.delete(name) : next.add(name);
      return next;
    });
  }

  return (
    <section className="section featured">
      <div className="section-heading row">
        <div>
          <p className="eyebrow">Featured stays</p>
          <h2>Handpicked Hidden Gems</h2>
        </div>
        <a href="#stays" className="text-link">
          View all stays <ArrowRight size={17} />
        </a>
      </div>

      <div className="stay-grid">
        {stays.map((stay) => (
          <article className="stay-card" key={stay.name}>
            <div className="stay-image">
              <img src={stay.image} alt={stay.name} />
              <button
                className={saved.has(stay.name) ? "heart active" : "heart"}
                aria-label={`Save ${stay.name}`}
                aria-pressed={saved.has(stay.name)}
                onClick={() => toggleSaved(stay.name)}
              >
                <Heart size={18} fill={saved.has(stay.name) ? "currentColor" : "none"} />
              </button>
            </div>
            <div className="stay-body">
              <h3>{stay.name}</h3>
              <p className="location">
                <MapPin size={15} /> {stay.location}
              </p>
              <p className="rating">
                <Star size={14} fill="currentColor" /> {stay.rating} <span>({stay.reviews} reviews)</span>
              </p>
              <p className="price">
                KSh {stay.price} <small>/ night</small>
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
