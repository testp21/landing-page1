import React from "react";
import '../App.css';
const PricingTable = () => (
  <section className="pricing-section">
    <h2 className="section-title">Pricing Plans</h2>
    <div className="pricing-grid">
      {["Basic", "Pro", "Enterprise"].map((plan, index) => (
        <div key={index} className="pricing-card">
          <h3>{plan}</h3>
          <p>{`$${(index + 1) * 10}.99/month`}</p>
        </div>
      ))}
    </div>
  </section>
);

export default PricingTable;
