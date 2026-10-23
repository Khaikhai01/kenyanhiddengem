import React from "react";

export default function Benefits({ benefits }) {
  return (
    <section className="benefits" id="about">
      <div className="section centered">
        <p className="eyebrow">Why use our platform?</p>
        <h2>More value. More adventure.</h2>
        <div className="benefit-grid">
          {benefits.map(({ icon: Icon, title, text }) => (
            <div className="benefit" key={title}>
              <Icon size={30} strokeWidth={1.7} />
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
