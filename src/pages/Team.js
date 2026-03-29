import React from 'react';
import { Link } from 'react-router-dom';

const Team = () => {
  const leadershipTeam = [
    {
      name: 'Angad Thapa',
      role: 'Club President',
      major: 'Computer Science, 5th Semester',
      bio: 'Passionate about ethical hacking and network security. Angad leads our strategic initiatives and industry partnerships.',
      image: '/placeholder.jpg',
      social: ['LinkedIn', 'GitHub']
    },
    {
      name: 'Sakar Ghimire',
      role: 'Vice President',
      major: 'Computer Science, 3rd Semester',
      bio: 'Specializes in cybersecurity policy and compliance. Sakar oversees our awareness campaigns and training programs.',
      image: '/placeholder.jpg',
      social: ['LinkedIn', 'Twitter']
    },
    {
      name: 'Bipesh Koirala',
      role: 'Technical Lead (Networking)',
      major: 'Computer Science, 5th Semester',
      bio: 'Expert in networking and system administration. Bipesh leads our technical workshops.',
      image: '/placeholder.jpg',
      social: ['LinkedIn', 'GitHub']
    },
        {
      name: 'Swayam Lama',
      role: 'Technical Lead (Cybersecurity)',
      major: 'Computer Science, 5th Semester',
      bio: 'Expert in cybersecurity and ethical hacking. Swayam leads our CTF competitions and security challenges.',
      image: '/placeholder1.png',
      social: ['LinkedIn', 'GitHub']
    },
    {
      name: 'Roshni Shah',
      role: 'Events Coordinator',
      major: 'Computer Science, 5th Semester',
      bio: 'Manages event planning and logistics. Roshni ensures our workshops and competitions run smoothly.',
      image: '/placeholder.jpg',
      social: ['LinkedIn', 'Instagram']
    },
    {
      name: 'Sandesh Rijal',
      role: 'Secretary',
      major: 'Computer Science, 5th Semester',
      bio: 'Manages event reports and documentation. Sandesh ensures all our activities are properly recorded and documented.',
      image: '/placeholder.jpg',
      social: ['LinkedIn', 'Instagram']
    },
    {
      name: 'Aayush Poudel',
      role: 'Treasurer',
      major: 'Computer Science, 5th Semester',
      bio: 'Manages the club\'s finances and budget allocation.',
      image: '/placeholder.jpg',
      social: ['LinkedIn', 'Instagram']
    },
    {
      name: 'Ramjiwan Mahato',
      role: 'Graphics Designer',
      major: 'Computer Science, 3th Semester',
      bio: 'Responsible for designing promotional materials and event graphics.',
      image: '/placeholder.jpg',
      social: ['LinkedIn', 'Instagram']
    },

  ];

  const facultyAdvisors = [
    {
      name: 'Er. Raj Kumar Sapkota',
      role: 'Faculty Advisor',
      major: 'HOD of Computer Science',
      bio: 'With over 10 years of experience in computer science education, Er. Raj Kumar Sapkota provides academic guidance and industry connections.',
      image: '/placeholder.jpg',
      social: ['LinkedIn', 'ResearchGate']
    },
    {
      name: 'Prof. Anuj Khanal',
      role: 'Faculty Advisor',
      major: 'Professor of IT',
      bio: 'Highly knowledgeable in information technology, Networking and cybersecurity.',
      image: '/placeholder.jpg',
      social: ['LinkedIn', 'Twitter']
    }
  ];

const coreMembers = [
  // Secretary
  { name: 'Sandesh Rijal', role: 'Secretary', major: '5th Semester, CS', image: '/placeholder.jpg' },
  { name: 'Samridhi RL Kunwar', role: 'Secretary', major: '3rd Semester, CS', image: '/placeholder.jpg' },
  { name: 'Sabina BK', role: 'Secretary', major: '1st Semester, CS', image: '/placeholder.jpg' },

  // Coordinator
  { name: 'Roshni Shah', role: 'Coordinator', major: '5th Semester, CS', image: '/placeholder.jpg' },
  { name: 'Jenish Shrestha', role: 'Coordinator', major: '3rd Semester, CS', image: '/placeholder.jpg' },
  { name: 'Onish Rana Magar', role: 'Coordinator', major: '5th Semester, CS', image: '/placeholder.jpg' },

  // Treasurer
  { name: 'Aayush Poudel', role: 'Treasurer', major: '5th Semester, CS', image: '/placeholder.jpg' },
  { name: 'Kalyan Tiwari', role: 'Treasurer', major: '5th Semester, CS', image: '/placeholder.jpg' },
  { name: 'Sumitra Adhikari', role: 'Treasurer', major: '5th Semester, CS', image: '/placeholder.jpg' },
  { name: 'Aayush Gurung', role: 'Treasurer', major: '3rd Semester, CS', image: '/placeholder.jpg' },

  // Graphics
  { name: 'Ramjiwan Mahato', role: 'Graphics', major: '3rd Semester, CS', image: '/placeholder.jpg' },
  { name: 'Samikshya Devkota', role: 'Graphics', major: '5thSemester, CS', image: '/placeholder.jpg' },
  { name: 'Pragati Karki', role: 'Graphics', major: '1st Semester, CS', image: '/placeholder.jpg' },

  // Media
  { name: 'Sadiksha Timsina', role: 'Media', major: '5th Semester, CS', image: '/placeholder.jpg' },
  { name: 'Biswodip Sedhai', role: 'Media', major: '5th Semester, CS', image: '/placeholder.jpg' },
  { name: 'Soniya Khatri', role: 'Media', major: '1st Semester, CS', image: '/placeholder.jpg' },

  // Program Host
  { name: 'Samir Chapagain', role: 'Program Host', major: '3rd Semester, CS', image: '/placeholder.jpg' },
  { name: 'Sampada Rijal', role: 'Program Host', major: '5th Semester, CS', image: '/placeholder.jpg' },
  { name: 'Swostika Ghimire', role: 'Program Host', major: '3rd Semester, CS', image: '/placeholder.jpg' },
];

  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1>Our Team</h1>
          <p>Meet the passionate individuals driving our cybersecurity mission</p>
        </div>
      </section>

      <section className="team-leadership">
        <div className="container">
          <h2 className="section-title">Leadership Team</h2>
          <div className="team-grid">
            {leadershipTeam.map((member, index) => (
              <div key={index} className="team-member">
                <div className="member-image">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="member-info">
                  <h3>{member.name}</h3>
                  <p className="member-role">{member.role}</p>
                  <p className="member-major">{member.major}</p>
                  <p className="member-bio">{member.bio}</p>
                  <div className="member-social">
                    {member.social.map((social, socialIndex) => (
                      <a key={socialIndex} href="#">{social}</a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="team-advisors">
        <div className="container">
          <h2 className="section-title">Faculty Advisors</h2>
          <div className="advisors-grid">
            {facultyAdvisors.map((advisor, index) => (
              <div key={index} className="advisor-member">
                <div className="member-image">
                  <img src={advisor.image} alt={advisor.name} />
                </div>
                <div className="member-info">
                  <h3>{advisor.name}</h3>
                  <p className="member-role">{advisor.role}</p>
                  <p className="member-major">{advisor.major}</p>
                  <p className="member-bio">{advisor.bio}</p>
                  <div className="member-social">
                    {advisor.social.map((social, socialIndex) => (
                      <a key={socialIndex} href="#">{social}</a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="team-members">
        <div className="container">
          <h2 className="section-title">Core Members</h2>
          <div className="members-grid">
            {coreMembers.map((member, index) => (
              <div key={index} className="member-card">
                <div className="member-photo">
                  <img src={member.image} alt={member.name} />
                </div>
                <h4>{member.name}</h4>
                <p>{member.role}</p>
                <p>{member.major}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="join-team">
        <div className="container">
          <div className="join-content">
            <h2>Join Our Team</h2>
            <p>
              We're always looking for passionate students to join our mission. Whether you're a cybersecurity expert or just starting your journey, there's a place for you in our team.
            </p>
            <div className="join-benefits">
              <div className="benefit-item">
                <h4>🎓 Learn New Skills</h4>
                <p>Gain hands-on experience in cybersecurity</p>
              </div>
              <div className="benefit-item">
                <h4>🤝 Build Network</h4>
                <p>Connect with industry professionals</p>
              </div>
              <div className="benefit-item">
                <h4>🏆 Compete & Win</h4>
                <p>Participate in national competitions</p>
              </div>
              <div className="benefit-item">
                <h4>📜 Get Certified</h4>
                <p>Access certification preparation resources</p>
              </div>
            </div>
            <Link to="/contact" className="btn btn-primary">Apply to Join</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
