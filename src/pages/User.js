import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Dashboard.css';

const User = () => {
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({
    username: '',
    bio: ''
  });
  const [status, setStatus] = useState({ message: '', type: '' });
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    checkAuth();
    loadUserData();
  }, []);

  const checkAuth = () => {
    const token = localStorage.getItem('token');
    const userData = JSON.parse(localStorage.getItem('user') || '{}');
    
    if (!token || userData.type !== 'normal_user') {
      navigate('/login');
      return false;
    }
    setUser(userData);
    setFormData({
      username: userData.username || '',
      bio: userData.bio || ''
    });
    return true;
  };

  const loadUserData = async () => {
    if (!checkAuth()) return;

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/auth/me`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });

      if (response.ok) {
        const data = await response.json();
        setUser(data.user);
        setFormData({
          username: data.user.username || '',
          bio: data.user.bio || ''
        });
      }
    } catch (error) {
      console.error('Error loading user data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const showStatus = (message, type) => {
    setStatus({ message, type });
    setTimeout(() => {
      setStatus({ message: '', type: '' });
    }, 5000);
  };

  const updateProfile = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:5000/api/auth/profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('user', JSON.stringify(data.user));
        setUser(data.user);
        showStatus('Profile updated successfully', 'success');
      } else {
        showStatus('Failed to update profile', 'error');
      }
    } catch (error) {
      console.error('Error updating profile:', error);
      showStatus('Failed to update profile', 'error');
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  if (isLoading) {
    return (
      <div className="dashboard-page">
        <div className="loading">Loading user dashboard...</div>
      </div>
    );
  }

  return (
    <div className="dashboard-page">
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <h2>CCSA Member</h2>
            <span>Cyber Crime & Security Awareness</span>
          </div>
          <ul className="nav-menu">
            <li><a href="/" className="nav-link">Home</a></li>
            <li><a href="/User" className="nav-link active">Dashboard</a></li>
            <li><a href="#" onClick={logout} className="nav-link">Logout</a></li>
          </ul>
        </div>
      </nav>

      <main className="dashboard-main">
        <div className="dashboard-header">
          <div className="container">
            <div className="welcome-section">
              <h1>Welcome back, {user?.username}!</h1>
              <p>Your cybersecurity journey continues</p>
              <p>Easy test : E0BHEJ9apUTbs05dM2JtNaziNV0=</p>
            </div>
            <div className="user-profile">
              <div className="profile-avatar">
                <div className="avatar-placeholder">👤</div>
              </div>
              <div className="profile-info">
                <h3>{user?.username}</h3>
                <p>Member since: {user?.createdAt ? new Date(user.createdAt).toLocaleDateString() : 'Unknown'}</p>
                <span className="role-badge normal_user">Normal User</span>
              </div>
            </div>
          </div>
        </div>

        <section className="dashboard-content">
          <div className="container">
            <div className="dashboard-grid">
              <div className="dashboard-section">
                <h2>Your Progress</h2>
                <div className="progress-cards">
                  <div className="progress-card">
                    <div className="progress-icon">🛡️</div>
                    <div className="progress-info">
                      <h3>Security Basics</h3>
                      <div className="progress-bar">
                        <div className="progress-fill" style={{width: '75%'}}></div>
                      </div>
                      <p>75% Complete</p>
                    </div>
                  </div>
                  <div className="progress-card">
                    <div className="progress-icon">🔍</div>
                    <div className="progress-info">
                      <h3>Ethical Hacking</h3>
                      <div className="progress-bar">
                        <div className="progress-fill" style={{width: '40%'}}></div>
                      </div>
                      <p>40% Complete</p>
                    </div>
                  </div>
                  <div className="progress-card">
                    <div className="progress-icon">🔐</div>
                    <div className="progress-info">
                      <h3>Digital Forensics</h3>
                      <div className="progress-bar">
                        <div className="progress-fill" style={{width: '20%'}}></div>
                      </div>
                      <p>20% Complete</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="dashboard-section">
                <h2>Profile Settings</h2>
                <form onSubmit={updateProfile} className="profile-form">
                  <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                      type="text"
                      id="username"
                      name="username"
                      value={formData.username}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="bio">Bio</label>
                    <textarea
                      id="bio"
                      name="bio"
                      value={formData.bio}
                      onChange={handleChange}
                      rows="4"
                      placeholder="Tell us about yourself..."
                    ></textarea>
                  </div>
                  
                  {status.message && (
                    <div className={`form-status ${status.type}`}>
                      {status.message}
                    </div>
                  )}
                  
                  <button type="submit" className="btn btn-primary">Update Profile</button>
                </form>
              </div>
            </div>

            <div className="dashboard-section">
              <h2>Upcoming Events</h2>
              <div className="events-list">
                <div className="event-item">
                  <div className="event-date">
                    <span className="day">15</span>
                    <span className="month">APR</span>
                  </div>
                  <div className="event-details">
                    <h3>Cybersecurity Workshop</h3>
                    <p>Learn about the latest security threats</p>
                    <span className="event-time">2:00 PM - 4:00 PM</span>
                  </div>
                  <button className="btn btn-primary btn-small">Register</button>
                </div>
                <div className="event-item">
                  <div className="event-date">
                    <span className="day">22</span>
                    <span className="month">APR</span>
                  </div>
                  <div className="event-details">
                    <h3>CTF Competition</h3>
                    <p>Test your skills in our monthly competition</p>
                    <span className="event-time">10:00 AM - 6:00 PM</span>
                  </div>
                  <button className="btn btn-primary btn-small">Register</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default User;
