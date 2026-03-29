import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    newsletter: false
  });

  const [formStatus, setFormStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setFormStatus('Please fill in all required fields');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormStatus('Please enter a valid email address');
      return;
    }

    // Simulate form submission
    setFormStatus('Sending...');
    setTimeout(() => {
      setFormStatus('Message sent successfully! We will get back to you soon.');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        newsletter: false
      });
    }, 1500);
  };

  const membershipOptions = [
    {
      title: 'Regular Member',
      price: 'Free',
      featured: false,
      features: [
        'Attend all workshops and events',
        'Access to basic learning resources',
        'Club newsletter subscription',
        'Networking opportunities'
      ]
    },
    {
      title: 'Active Member',
      price: '$25/semester',
      featured: true,
      badge: 'Most Popular',
      features: [
        'Everything in Regular Member',
        'Priority event registration',
        'Advanced workshop access',
        'CTF team participation',
        'Club merchandise',
        'Leadership opportunities'
      ]
    },
    {
      title: 'Leadership Track',
      price: '$50/semester',
      featured: false,
      features: [
        'Everything in Active Member',
        'Leadership training program',
        'Industry mentorship',
        'Certification preparation',
        'Conference attendance support',
        'Resume building workshops'
      ]
    }
  ];

  const faqs = [
    {
      question: 'Do I need prior cybersecurity experience to join?',
      answer: 'No! We welcome students from all backgrounds and experience levels. We provide training and resources for beginners.'
    },
    {
      question: 'How often do you hold meetings?',
      answer: 'We hold general meetings every other Tuesday, with additional workshops and events throughout the semester.'
    },
    {
      question: 'Can I join if I\'m not a computer science major?',
      answer: 'Absolutely! Cybersecurity affects all fields. We have members from business, law, arts, and other disciplines.'
    },
    {
      question: 'What kind of events do you organize?',
      answer: 'We organize workshops, CTF competitions, guest lectures, awareness campaigns, and social events.'
    },
    {
      question: 'How can I get involved in leadership?',
      answer: 'Start as an active member, participate regularly, and watch for leadership opportunities announced each semester.'
    },
    {
      question: 'Do you offer certifications?',
      answer: 'We provide preparation resources for certifications like CompTIA Security+ and organize group study sessions.'
    }
  ];

  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1>Contact Us</h1>
          <p>Get in touch with the Cyber Crime & Security Awareness Club</p>
        </div>
      </section>

      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Get in Touch</h2>
              <p>
                We'd love to hear from you! Whether you're interested in joining our club, attending an event, or learning more about cybersecurity, we're here to help.
              </p>
              
              <div className="contact-items">
                <div className="contact-item">
                  <div className="contact-icon">📧</div>
                  <div className="contact-details">
                    <h3>Email</h3>
                    <p>ccsa@forbescollege.edu</p>
                    <p className="contact-note">For general inquiries and membership applications</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">📱</div>
                  <div className="contact-details">
                    <h3>Phone</h3>
                    <p>+1 (555) 123-4567</p>
                    <p className="contact-note">Monday - Friday: 9:00 AM - 5:00 PM</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">📍</div>
                  <div className="contact-details">
                    <h3>Location</h3>
                    <p>Student Center, Room 204</p>
                    <p>Forbes College, Main Campus</p>
                    <p className="contact-note">Office hours: Tuesday & Thursday 2:00 PM - 4:00 PM</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">💬</div>
                  <div className="contact-details">
                    <h3>Social Media</h3>
                    <div className="social-links">
                      <a href="#">Facebook</a>
                      <a href="#">Twitter</a>
                      <a href="#">LinkedIn</a>
                      <a href="#">Instagram</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="contact-form">
              <h2>Send us a Message</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="membership">Membership Application</option>
                    <option value="workshop">Workshop Registration</option>
                    <option value="partnership">Partnership Inquiry</option>
                    <option value="general">General Question</option>
                    <option value="media">Media Request</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  ></textarea>
                </div>
                
                <div className="form-group">
                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      id="newsletter"
                      name="newsletter"
                      checked={formData.newsletter}
                      onChange={handleInputChange}
                    />
                    <span>Send me updates about upcoming events and workshops</span>
                  </label>
                </div>
                
                {formStatus && (
                  <div className={`form-status ${formStatus.includes('success') ? 'success' : 'error'}`}>
                    {formStatus}
                  </div>
                )}
                
                <button type="submit" className="btn btn-primary">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="membership-section">
        <div className="container">
          <h2 className="section-title">Join Our Club</h2>
          <div className="membership-options">
            {membershipOptions.map((option, index) => (
              <div key={index} className={`membership-card ${option.featured ? 'featured' : ''}`}>
                {option.badge && <div className="membership-badge">{option.badge}</div>}
                <h3>{option.title}</h3>
                <div className="membership-price">{option.price}</div>
                <ul className="membership-features">
                  {option.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>{feature}</li>
                  ))}
                </ul>
                <button className={`btn ${option.featured ? 'btn-primary' : 'btn-outline'}`}>
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="faq-section">
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="faq-grid">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
