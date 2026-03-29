import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Dashboard.css';

const Admin = () => {
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState([]);
  const [stats, setStats] = useState({ totalUsers: 0, normalUsers: 0, adminUsers: 0 });
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    checkAuth();
    loadUserData();
  }, []);

  const checkAuth = () => {
    const token = localStorage.getItem('token');
    const userData = JSON.parse(localStorage.getItem('user') || '{}');
    
    if (!token || userData.type !== 'admin') {
      navigate('/login');
      return false;
    }
    setUser(userData);
    return true;
  };

  const loadUserData = async () => {
    if (!checkAuth()) return;

    try {
      // Load users
      const usersResponse = await fetch('http://localhost:5000/api/users', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });

      if (usersResponse.ok) {
        const usersData = await usersResponse.json();
        setUsers(usersData.users || []);
        
        // Calculate stats
        const normalUsers = usersData.users?.filter(u => u.type === 'normal_user').length || 0;
        const adminUsers = usersData.users?.filter(u => u.type === 'admin').length || 0;
        
        setStats({
          totalUsers: usersData.users?.length || 0,
          normalUsers,
          adminUsers
        });
      }
    } catch (error) {
      console.error('Error loading user data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const promoteToAdmin = async (userId) => {
    if (!confirm('Are you sure you want to promote this user to admin?')) return;

    try {
      const response = await fetch(`http://localhost:5000/api/users/${userId}/role`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({ type: 'admin' })
      });

      if (response.ok) {
        alert('User promoted to admin successfully');
        loadUserData(); // Reload data
      } else {
        alert('Failed to promote user');
      }
    } catch (error) {
      console.error('Error promoting user:', error);
      alert('Failed to promote user');
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  if (isLoading) {
    return (
      <div className="dashboard-page">
        <div className="loading">Loading admin dashboard...</div>
      </div>
    );
  }

  return (
    <div className="dashboard-page">
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <h2>CCSA Admin</h2>
            <span>Cyber Crime & Security Awareness</span>
          </div>
          <ul className="nav-menu">
            <li><a href="/" className="nav-link">Home</a></li>
            <li><a href="/Admin" className="nav-link active">Dashboard</a></li>
            <li><a href="#" onClick={logout} className="nav-link">Logout</a></li>
          </ul>
        </div>
      </nav>

      <main className="dashboard-main">
        <div className="dashboard-header">
          <div className="container">
            <h1>Admin Dashboard</h1>
            <p>Manage CCSA club members and activities</p>
          </div>
        </div>

        <section className="dashboard-stats">
          <div className="container">
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-icon">👥</div>
                <h3>{stats.totalUsers}</h3>
                <p>Total Members</p>
              </div>
              <div className="stat-card">
                <div className="stat-icon">👤</div>
                <h3>{stats.normalUsers}</h3>
                <p>Normal Users</p>
              </div>
              <div className="stat-card">
                <div className="stat-icon">👨‍💼</div>
                <h3>{stats.adminUsers}</h3>
                <p>Admin Users</p>
              </div>
            </div>
          </div>
        </section>

        <section className="dashboard-content">
          <div className="container">
            <div className="dashboard-section">
              <h2>User Management</h2>
              <div className="users-table">
                <div className="table-header">
                  <span>Username</span>
                  <span>Type</span>
                  <span>Joined</span>
                  <span>Actions</span>
                </div>
                {users.map(user => (
                  <div key={user._id} className="table-row">
                    <span>{user.username}</span>
                    <span className={`role-badge ${user.type}`}>{user.type}</span>
                    <span>{new Date(user.createdAt).toLocaleDateString()}</span>
                    <span>
                      {user.type === 'normal_user' && (
                        <button 
                          className="btn-small btn-primary"
                          onClick={() => promoteToAdmin(user._id)}
                        >
                          Promote to Admin
                        </button>
                      )}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Admin;
