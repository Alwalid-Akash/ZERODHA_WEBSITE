// Apps.jsx (or Apps.js)
import React from "react";

const Apps = () => {
  return (
    <div className="container my-5" style={{ maxWidth: "600px" }}>
      <div className="card shadow-sm border-0 p-4">
        <h3 className="fw-semibold mb-1" style={{ color: "#1a1a2e" }}>
          Create a ticket
        </h3>
        <p className="text-secondary mb-4" style={{ fontSize: "0.95rem" }}>
          Our support team will get back to you within 24 hours.
        </p>

        <form>
          <div className="mb-3">
            <label htmlFor="email" className="form-label fw-medium">
              Email address
            </label>
            <input
              type="email"
              id="email"
              className="form-control"
              placeholder="you@example.com"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="subject" className="form-label fw-medium">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="form-control"
              placeholder="Brief description"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="description" className="form-label fw-medium">
              Description
            </label>
            <textarea
              id="description"
              className="form-control"
              rows="5"
              placeholder="Explain your issue in detail"
            />
          </div>

          <button type="submit" className="btn btn-primary w-100 py-2">
            Submit Ticket
          </button>
        </form>
      </div>
    </div>
  );
};

export default Apps;