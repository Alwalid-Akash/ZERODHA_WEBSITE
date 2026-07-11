import React from "react";

function Team() {
  const members = [
    {
      name: "Nithin Kamath",
      role: "Founder & CEO",
    },
    {
      name: "Nikhil Kamath",
      role: "Co-founder",
    },
    {
      name: "Kailash Nadh",
      role: "CTO",
    },
  ];

  return (
    <section className="team">
      <div className="container">
        <h2>Meet our team</h2>

        <div className="team-grid">
          {members.map((member, index) => (
            <div className="team-card" key={index}>
              <div className="avatar"></div>
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;