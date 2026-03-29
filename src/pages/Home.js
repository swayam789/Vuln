import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [typedText, setTypedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const fullText = 'Cyber Crime & Security Awareness';

  useEffect(() => {
    if (isTyping && typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    } else if (typedText.length === fullText.length) {
      setIsTyping(false);
    }
  }, [typedText, isTyping]);

  const features = [
    {
      icon: '🛡️',
      title: 'Security Training',
      description: 'Hands-on workshops and training sessions on cybersecurity best practices and threat prevention.'
    },
    {
      icon: '🔍',
      title: 'Awareness Campaigns',
      description: 'Regular campaigns to educate students about online threats, phishing, and digital safety.'
    },
    {
      icon: '🚀',
      title: 'Competitions',
      description: 'Organizing Capture The Flag (CTF) competitions and cybersecurity challenges.'
    },
    {
      icon: '🤝',
      title: 'Community Outreach',
      description: 'Collaborating with local organizations to promote cyber safety in the community.'
    }
  ];

  const stats = [
    { number: '150+', label: 'Active Members' },
    { number: '25+', label: 'Events Conducted' },
    { number: '1000+', label: 'Students Reached' },
    { number: '10+', label: 'Industry Partners' }
  ];

  const events = [
    {
      date: { day: '15', month: 'APR' },
      title: 'Cybersecurity Workshop',
      description: 'Learn about the latest security threats and prevention techniques.',
      time: '2:00 PM - 4:00 PM'
    },
    {
      date: { day: '22', month: 'APR' },
      title: 'CTF Competition',
      description: 'Test your skills in our monthly Capture The Flag competition.',
      time: '10:00 AM - 6:00 PM'
    },
    {
      date: { day: '05', month: 'MAY' },
      title: 'Guest Lecture: Industry Expert',
      description: 'Special session with a cybersecurity professional from a leading tech company.',
      time: '3:00 PM - 5:00 PM'
    }
  ];

  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h1>{typedText}</h1>
          <p className="hero-subtitle">Forbes College Student Club</p>
          <p className="hero-description">
            Empowering students with knowledge and skills to navigate the digital world safely and securely.
          </p>
          <div className="hero-buttons">
            <Link to="/about" className="btn btn-primary">Learn More</Link>
            <Link to="/contact" className="btn btn-secondary">Join Us</Link>
          </div>
        </div>
        <div className="hero-image">
          <div className="cyber-shield">
            <img src="/logo.png" alt="CCSA Logo" className="hero-logo" />
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2 className="section-title">What We Do</h2>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <h3>{stat.number}</h3>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="events">
        <div className="container">
          <h2 className="section-title" id="events">Upcoming Events</h2>
          <div className="events-grid">
            {events.map((event, index) => (
              <div key={index} className="event-card">
                <div className="event-date">
                  <span className="day">{event.date.day}</span>
                  <span className="month">{event.date.month}</span>
                </div>
                <div className="event-content">
                  <h3>{event.title}</h3>
                  <p>{event.description}</p>
                  <span className="event-time">{event.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
