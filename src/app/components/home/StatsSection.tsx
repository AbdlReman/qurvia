import React from 'react';

const StatsSection: React.FC = () => {
  const stats = [
    {
      id: 1,
      number: "1305",
      label: "ENROLLED LEARNERS"
    },
    {
      id: 2,
      number: "1528",
      label: "FOREIGN STUDENTS"
    },
    {
      id: 3,
      number: "247",
      label: "SUCCESSFULLY TRAINED"
    },
    {
      id: 4,
      number: "922",
      label: "SCHEDULE LESSONS"
    }
  ];

  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat) => (
            <div key={stat.id} className="stat-item">
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
