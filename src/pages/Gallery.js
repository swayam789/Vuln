import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Gallery = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const galleryItems = [
    {
      id: 1,
      category: 'workshops',
      title: 'Cybersecurity Basics Workshop',
      description: 'March 2024 - Introduction to online safety',
      image: 'https://picsum.photos/seed/workshop1/400/300.jpg'
    },
    {
      id: 2,
      category: 'competitions',
      title: 'Annual CTF Competition',
      description: 'February 2024 - 24-hour hacking challenge',
      image: 'https://picsum.photos/seed/ctf1/400/300.jpg'
    },
    {
      id: 3,
      category: 'events',
      title: 'Cybersecurity Awareness Month',
      description: 'October 2023 - Campus-wide campaign',
      image: 'https://picsum.photos/seed/awareness1/400/300.jpg'
    },
    {
      id: 4,
      category: 'team',
      title: 'Team Strategy Meeting',
      description: 'January 2024 - Planning spring activities',
      image: 'https://picsum.photos/seed/team1/400/300.jpg'
    },
    {
      id: 5,
      category: 'workshops',
      title: 'Ethical Hacking Workshop',
      description: 'November 2023 - Hands-on penetration testing',
      image: 'https://picsum.photos/seed/workshop2/400/300.jpg'
    },
    {
      id: 6,
      category: 'competitions',
      title: 'Regional Cybersecurity Competition',
      description: 'December 2023 - Our team won 1st place',
      image: 'https://picsum.photos/seed/ctf2/400/300.jpg'
    },
    {
      id: 7,
      category: 'events',
      title: 'Industry Guest Lecture',
      description: 'September 2023 - Security expert from TechCorp',
      image: 'https://picsum.photos/seed/guest1/400/300.jpg'
    },
    {
      id: 8,
      category: 'team',
      title: 'Team Building Activity',
      description: 'August 2023 - Welcome new members',
      image: 'https://picsum.photos/seed/team2/400/300.jpg'
    },
    {
      id: 9,
      category: 'workshops',
      title: 'Digital Forensics Workshop',
      description: 'July 2023 - Evidence collection techniques',
      image: 'https://picsum.photos/seed/workshop3/400/300.jpg'
    },
    {
      id: 10,
      category: 'events',
      title: 'Student Club Fair',
      description: 'May 2023 - Recruiting new members',
      image: 'https://picsum.photos/seed/fair1/400/300.jpg'
    },
    {
      id: 11,
      category: 'competitions',
      title: 'Cybersecurity Hackathon',
      description: 'April 2023 - 48-hour coding challenge',
      image: 'https://picsum.photos/seed/hackathon1/400/300.jpg'
    },
    {
      id: 12,
      category: 'team',
      title: 'Achievement Celebration',
      description: 'March 2023 - Recognizing outstanding members',
      image: 'https://picsum.photos/seed/celebration1/400/300.jpg'
    }
  ];

  const stats = [
    { number: '50+', label: 'Events Organized' },
    { number: '2000+', label: 'Photos Captured' },
    { number: '15', label: 'Competitions Won' },
    { number: '500+', label: 'Happy Participants' }
  ];

  const filters = [
    { key: 'all', label: 'All' },
    { key: 'workshops', label: 'Workshops' },
    { key: 'competitions', label: 'Competitions' },
    { key: 'events', label: 'Events' },
    { key: 'team', label: 'Team' }
  ];

  const filteredItems = selectedFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedFilter);

  const openLightbox = (image) => {
    // Simple lightbox implementation
    const modal = document.createElement('div');
    modal.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.9);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 2000;
      cursor: pointer;
    `;
    
    const modalImg = document.createElement('img');
    modalImg.src = image;
    modalImg.style.cssText = `
      max-width: 90%;
      max-height: 90%;
      border-radius: 10px;
    `;
    
    modal.appendChild(modalImg);
    document.body.appendChild(modal);
    
    modal.addEventListener('click', function() {
      document.body.removeChild(modal);
    });
  };

  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1>Gallery</h1>
          <p>Explore our events, workshops, and club activities</p>
        </div>
      </section>

      <section className="gallery-filters">
        <div className="container">
          <div className="filter-buttons">
            {filters.map((filter) => (
              <button
                key={filter.key}
                className={`filter-btn ${selectedFilter === filter.key ? 'active' : ''}`}
                onClick={() => setSelectedFilter(filter.key)}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="gallery-grid">
        <div className="container">
          <div className="gallery-items">
            {filteredItems.map((item) => (
              <div key={item.id} className="gallery-item" onClick={() => openLightbox(item.image)}>
                <div className="gallery-image">
                  <img src={item.image} alt={item.title} />
                  <div className="gallery-overlay">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="gallery-stats">
        <div className="container">
          <h2 className="section-title">Our Impact in Numbers</h2>
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <h3>{stat.number}</h3>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="gallery-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Be Part of Our Next Event</h2>
            <p>Join us for upcoming workshops, competitions, and awareness campaigns. Check our events page for the latest schedule.</p>
            <div className="cta-buttons">
              <Link to="/#events" className="btn btn-primary">View Events</Link>
              <Link to="/contact" className="btn btn-secondary">Get Involved</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
