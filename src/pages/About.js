import React from 'react';

const About = () => {
  const activities = [
    {
      icon: '🎓',
      title: 'Educational Workshops',
      description: 'Monthly workshops covering topics like password security, phishing awareness, social media safety, and data protection.'
    },
    {
      icon: '🏆',
      title: 'Competitions',
      description: 'Annual CTF competitions, hackathons, and cybersecurity challenges to test and improve practical skills.'
    },
    {
      icon: '📢',
      title: 'Awareness Campaigns',
      description: 'Campus-wide campaigns during Cybersecurity Awareness Month and other important dates throughout the year.'
    },
    {
      icon: '🤝',
      title: 'Industry Partnerships',
      description: 'Collaborations with cybersecurity companies and professionals for guest lectures and mentorship programs.'
    },
    {
      icon: '🔧',
      title: 'Hands-on Training',
      description: 'Practical sessions on ethical hacking, penetration testing, and security tool usage in our dedicated lab.'
    },
    {
      icon: '📚',
      title: 'Research Projects',
      description: 'Student-led research projects on emerging cyber threats and security solutions.'
    }
  ];

  const achievements = [
    {
      year: '2024',
      title: 'Best Student Club Award',
      description: 'Recognized as the most active and impactful student club at Forbes College'
    },
    {
      year: '2023',
      title: 'Regional CTF Champions',
      description: 'Our team won first place in the Regional Collegiate Cybersecurity Competition'
    },
    {
      year: '2022',
      title: '500+ Students Trained',
      description: 'Reached a milestone of training over 500 students in cybersecurity basics'
    },
    {
      year: '2021',
      title: 'Club Foundation',
      description: 'Officially established as a recognized student organization at Forbes College'
    }
  ];

  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1>About Us</h1>
          <p>Learn about our mission, vision, and commitment to cybersecurity education</p>
        </div>
      </section>

      <section className="about-content">
        <div className="container">
          <div className="about-grid">
            <div className="about-text">
              <h2>Our Mission</h2>
              <p>
                To educate and empower Forbes College students with the knowledge and skills necessary to navigate the digital world safely, protect themselves from cyber threats, and become responsible digital citizens.
              </p>
              
              <h2>Our Vision</h2>
              <p>
                To create a campus community where every student is cyber-aware, security-conscious, and equipped to contribute to a safer digital environment both within and beyond the college.
              </p>
              
              <h2>Our Values</h2>
              <ul className="values-list">
                <li><strong>Education:</strong> We believe in continuous learning and knowledge sharing</li>
                <li><strong>Integrity:</strong> We promote ethical behavior in all digital interactions</li>
                <li><strong>Innovation:</strong> We embrace new technologies and security approaches</li>
                <li><strong>Community:</strong> We foster collaboration and mutual support</li>
                <li><strong>Excellence:</strong> We strive for the highest standards in cybersecurity practices</li>
              </ul>
            </div>
            <div className="about-image">
              <div className="about-visual">
                <svg width="400" height="400" viewBox="0 0 400 400">
                  <circle cx="200" cy="200" r="180" fill="none" stroke="#00d4ff" strokeWidth="2" opacity="0.2"/>
                  <circle cx="200" cy="200" r="150" fill="none" stroke="#00d4ff" strokeWidth="1" opacity="0.3"/>
                  <circle cx="200" cy="200" r="120" fill="none" stroke="#00d4ff" strokeWidth="1" opacity="0.4"/>
                  <rect x="150" y="150" width="100" height="100" fill="none" stroke="#00d4ff" strokeWidth="2"/>
                  <circle cx="200" cy="200" r="40" fill="#00d4ff" opacity="0.1"/>
                  <text x="200" y="210" textAnchor="middle" fill="#00d4ff" fontSize="18" fontWeight="bold">CCSA</text>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="activities">
        <div className="container">
          <h2 className="section-title">Our Activities</h2>
          <div className="activities-grid">
            {activities.map((activity, index) => (
              <div key={index} className="activity-card">
                <div className="activity-icon">{activity.icon}</div>
                <h3>{activity.title}</h3>
                <p>{activity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="achievements">
        <div className="container">
          <h2 className="section-title">Our Achievements</h2>
          <div className="achievements-timeline">
            {achievements.map((achievement, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-date">{achievement.year}</div>
                <div className="timeline-content">
                  <h3>{achievement.title}</h3>
                  <p>{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
