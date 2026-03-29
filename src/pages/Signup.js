import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Login.css';

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: ''
  });
  const [status, setStatus] = useState({ message: '', type: '' });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const showStatus = (message, type) => {
    setStatus({ message, type });
    setTimeout(() => {
      setStatus({ message: '', type: '' });
    }, 5000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validation
    if (!formData.username || !formData.password || !formData.confirmPassword) {
      showStatus('Please fill in all fields', 'error');
      return;
    }
    
    if (formData.password !== formData.confirmPassword) {
      showStatus('Passwords do not match', 'error');
      return;
    }
    
    if (formData.password.length < 6) {
      showStatus('Password must be at least 6 characters long', 'error');
      return;
    }
    
    setIsLoading(true);
    
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: formData.username,
          password: formData.password,
          type: 'normal_user' // Always set to normal_user
        })
      });
      
      const data = await response.json();
      
      if (response.ok) {
        showStatus('Account created successfully! Redirecting to login...', 'success');
        setTimeout(() => {
          window.location.href = '/login';
        }, 2000);
      } else {
        showStatus(data.message || 'Registration failed', 'error');
      }
    } catch (error) {
      console.error('Signup error:', error);
      showStatus('Failed to connect to server. Please try again.', 'error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-card">
          <div className="login-header">
            <div className="login-logo">
              <span>Cyber Crime & Security Awareness</span>
            </div>
            <h1>Join Our Club</h1>
            <p>Create your account to get started</p>
          </div>
          
          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
              <label htmlFor="username">Username *</label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
                placeholder="Choose a username"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="password">Password *</label>
              <div className="password-input-container">
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  placeholder="Create a password"
                />
                <div className="password-toggle" onClick={() => {
                  const input = document.getElementById('password');
                  const icon = document.getElementById('toggleIcon');
                  const type = input.getAttribute('type') === 'password' ? 'text' : 'password';
                  input.setAttribute('type', type);
                  icon.textContent = type === 'password' ? '👁️' : '👁️‍🗨️';
                }}>
                  <span id="toggleIcon">👁️</span>
                </div>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password *</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                placeholder="Confirm your password"
              />
            </div>
            
            {status.message && (
              <div className={`login-status ${status.type}`}>
                {status.message}
              </div>
            )}
            
            <button type="submit" className="btn btn-primary btn-full" disabled={isLoading}>
              {isLoading ? 'Creating Account...' : 'Create Account'}
            </button>
          </form>
          
          <div className="login-footer">
            <p>Already have an account? <Link to="/login">Login here</Link></p>
            <p>Having trouble? <a href="mailto:ccsa@forbescollege.edu">Contact support</a></p>
          </div>
        </div>
        
        <div className="login-background">
          <div className="cyber-pattern">
            <svg width="100%" height="100%" viewBox="0 0 1000 1000">
              <defs>
                <pattern id="cyberGrid" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
                  <circle cx="25" cy="25" r="2" fill="#00d4ff" opacity="0.3"/>
                  <line x1="25" y1="0" x2="25" y2="50" stroke="#00d4ff" stroke-width="0.5" opacity="0.2"/>
                  <line x1="0" y1="25" x2="50" y2="25" stroke="#00d4ff" stroke-width="0.5" opacity="0.2"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#cyberGrid)"/>
            </svg>
          </div>
          
          <div className="floating-elements">
            <div className="float-element">🔒</div>
            <div className="float-element">🛡️</div>
            <div className="float-element">🔐</div>
            <div className="float-element">🔑</div>
            <div className="float-element">🚨</div>
            <div className="float-element">💻</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;