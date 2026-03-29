import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Gallery = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const galleryItems = [
    {
      id: 1,
      category: 'competition',
      title: 'Cybersecurity Basic HTB CTF',
      description: 'HTB CTF - Basic Level',
      image: '/1.jpg'
    },
    {
      id: 2,
      category: 'events',
      title: 'CTF Training ',
      description: 'Dec 22, CTF training session',
      image: '/2.jpg'
    },
    {
      id: 3,
      category: 'competitions',
      title: 'Quiz Competition',
      description: 'Dec 27 2024, Quiz competition',
      image: '/3.jpg'
    },
    {
      id: 4,
      category: 'competitions',
      title: 'Quiz Competition',
      description: 'Dec 27 2024, Quiz competition',
      image: '/4.jpg'
    },
    {
      id: 5,
      category: 'competitions',
      title: 'Quiz Competition',
      description: 'Dec 27 2024, Quiz competition',
      image: '/5.jpg'
    },
    {
      id: 6,
      category: 'competitions',
      title: 'Quiz Competition',
      description: 'Dec 27 2024, Quiz competition',
      image: '/6.jpg'
    },
    {
      id: 7,
      category: 'competitions',
      title: 'Quiz Competition',
      description: 'Dec 27 2024, Quiz competition',
      image: '/7.jpg'
    },
    {
      id: 8,
      category: 'competitions',
      title: 'Quiz Competition',
      description: 'Dec 27 2024, Quiz competition',
      image: '/8.jpg'
    },
    {
      id: 9,
      category: 'competitions',
      title: 'Quiz Competition',
      description: 'Dec 27 2024, Quiz competition',
      image: '/9.jpg'
    },
    {
      id: 10,
      category: 'competitions',
      title: 'Quiz Competition',
      description: 'Dec 27 2024, Quiz competition',
      image: '/10.jpg'
    },
    {
      id: 11,
      category: 'team',
      title: 'CCSA orientation',
      description: 'March 29 2026, CCSA orientation',
      image: '/11.jpeg'
    },
    {
      id: 12,
      category: 'team',
      title: 'CCSA orientation',
      description: 'March 29 2026, CCSA orientation',
      image: '/12.jpeg'
    },
    {
      id: 13,
      category: 'team',
      title: 'CCSA orientation',
      description: 'March 29 2026, CCSA orientation',
      image: '/13.jpeg'
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
