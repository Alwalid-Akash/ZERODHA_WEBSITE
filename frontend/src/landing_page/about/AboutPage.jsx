import React from "react";
import Hero from "./Hero";
import Team from "./Team";

function AboutPage() {
  return (
    <div className="about-page">
      <Hero />
      <Team />

      <section className="about-content">
        <div className="container">
          <h2>About Zerodha</h2>

          <p>
            Zerodha is India's largest stock broker, trusted by millions of
            investors and traders. We built Zerodha with a simple mission:
            make investing accessible, transparent, and affordable for everyone.
          </p>

          <p>
            With technology at our core, we provide powerful trading platforms,
            educational resources, and tools that help people make better
            financial decisions.
          </p>

          <div className="about-cards">
            <div className="card">
              <h3>1+ Crore</h3>
              <p>Customers</p>
            </div>

            <div className="card">
              <h3>₹1000+ Cr</h3>
              <p>Daily Trading Volume</p>
            </div>

            <div className="card">
              <h3>2010</h3>
              <p>Founded</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;