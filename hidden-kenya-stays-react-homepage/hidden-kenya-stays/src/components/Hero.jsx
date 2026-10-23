import React from "react";
import { Search, MapPin, CalendarDays, Users } from "lucide-react";

export default function Hero() {
  // Each field gets its own piece of state. This is what makes the
  // search box a "controlled" form: React holds the truth, the inputs
  // just reflect it.
  const [destination, setDestination] = React.useState("");
  const [checkIn, setCheckIn] = React.useState("");
  const [checkOut, setCheckOut] = React.useState("");
  const [guests, setGuests] = React.useState(2);
  const [guestsOpen, setGuestsOpen] = React.useState(false);

  function handleSearch() {
    // No backend yet, so this just proves the state is real.
    // Later this is where you'd call an API or update a route/query string.
    console.log({ destination, checkIn, checkOut, guests });
    alert(
      `Searching ${destination || "anywhere"} · ${checkIn || "any date"} → ${
        checkOut || "any date"
      } · ${guests} guest${guests > 1 ? "s" : ""}`
    );
  }

  return (
    <section className="hero">
      <div className="hero-overlay" />
      <div className="hero-content">
        <p className="eyebrow light">Affordable stays • Local experiences • Real Kenya</p>
        <h1>
          Discover Kenya
          <br />
          without breaking
          <br />
          the bank
        </h1>
        <p className="hero-subtitle">Affordable B&amp;Bs • Lodgings • Hotels • Guesthouses</p>

        <div className="search-box">
          <div className="search-field destination">
            <MapPin size={21} />
            <div>
              <label htmlFor="destination-input">Where are you going?</label>
              <input
                id="destination-input"
                placeholder="e.g. Nairobi, Mombasa..."
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
              />
            </div>
          </div>

          <div className="search-field">
            <CalendarDays size={20} />
            <div>
              <label htmlFor="checkin-input">Check-in</label>
              <input
                id="checkin-input"
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
              />
            </div>
          </div>

          <div className="search-field">
            <CalendarDays size={20} />
            <div>
              <label htmlFor="checkout-input">Check-out</label>
              <input
                id="checkout-input"
                type="date"
                value={checkOut}
                min={checkIn || undefined}
                onChange={(e) => setCheckOut(e.target.value)}
              />
            </div>
          </div>

          <div className="search-field guests">
            <Users size={20} />
            <div className="guest-control">
              <label>Guests</label>
              <button
                type="button"
                className="guest-toggle"
                onClick={() => setGuestsOpen(!guestsOpen)}
              >
                {guests} guest{guests > 1 ? "s" : ""}
              </button>

              {guestsOpen && (
                <div className="guest-dropdown">
                  <div className="guest-row">
                    <span>Guests</span>
                    <div className="qty-controls">
                      <button
                        type="button"
                        className="qty-btn"
                        onClick={() => setGuests((g) => Math.max(1, g - 1))}
                      >
                        −
                      </button>
                      <span>{guests}</span>
                      <button
                        type="button"
                        className="qty-btn"
                        onClick={() => setGuests((g) => Math.min(12, g + 1))}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <button className="search-button" onClick={handleSearch}>
            <Search size={18} /> Search
          </button>
        </div>
      </div>
    </section>
  );
}
