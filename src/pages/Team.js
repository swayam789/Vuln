import React from 'react';
import { Link } from 'react-router-dom';

const Team = () => {
  const leadershipTeam = [
    {
      name: 'Sarah Johnson',
      role: 'Club President',
      major: 'Computer Science, Senior',
      bio: 'Passionate about ethical hacking and network security. Sarah leads our strategic initiatives and industry partnerships.',
      image: 'https://picsum.photos/seed/member1/300/300.jpg',
      social: ['LinkedIn', 'GitHub']
    },
    {
      name: 'Michael Chen',
      role: 'Vice President',
      major: 'Information Technology, Junior',
      bio: 'Specializes in cybersecurity policy and compliance. Michael oversees our awareness campaigns and training programs.',
      image: 'https://picsum.photos/seed/member2/300/300.jpg',
      social: ['LinkedIn', 'Twitter']
    },
    {
      name: 'Emily Rodriguez',
      role: 'Technical Lead',
      major: 'Cybersecurity, Senior',
      bio: 'Expert in penetration testing and security audits. Emily leads our technical workshops and CTF competitions.',
      image: 'https://picsum.photos/seed/member3/300/300.jpg',
      social: ['LinkedIn', 'GitHub']
    },
    {
      name: 'David Kim',
      role: 'Events Coordinator',
      major: 'Business Administration, Junior',
      bio: 'Manages event planning and logistics. David ensures our workshops and competitions run smoothly.',
      image: 'https://picsum.photos/seed/member4/300/300.jpg',
      social: ['LinkedIn', 'Instagram']
    }
  ];

  const facultyAdvisors = [
    {
      name: 'Dr. Robert Thompson',
      role: 'Faculty Advisor',
      major: 'Professor of Computer Science',
      bio: 'With over 15 years of experience in cybersecurity research, Dr. Thompson provides academic guidance and industry connections.',
      image: 'https://picsum.photos/seed/advisor1/300/300.jpg',
      social: ['LinkedIn', 'ResearchGate']
    },
    {
      name: 'Prof. Lisa Anderson',
      role: 'Co-Advisor',
      major: 'Assistant Professor of IT',
      bio: 'Specializes in digital forensics and cyber law. Prof. Anderson helps organize legal and ethical workshops.',
      image: 'https://picsum.photos/seed/advisor2/300/300.jpg',
      social: ['LinkedIn', 'Twitter']
    }
  ];

  const coreMembers = [
    { name: 'Alex Turner', role: 'Security Analyst', major: 'Sophomore, CS', image: 'https://picsum.photos/seed/core1/200/200.jpg' },
    { name: 'Jessica Liu', role: 'Workshop Instructor', major: 'Junior, IT', image: 'https://picsum.photos/seed/core2/200/200.jpg' },
    { name: 'Ryan Martinez', role: 'CTF Team Lead', major: 'Senior, Cybersecurity', image: 'https://picsum.photos/seed/core3/200/200.jpg' },
    { name: 'Sophie Wang', role: 'Social Media Manager', major: 'Sophomore, Marketing', image: 'https://picsum.photos/seed/core4/200/200.jpg' },
    { name: 'James Wilson', role: 'Lab Assistant', major: 'Junior, CS', image: 'https://picsum.photos/seed/core5/200/200.jpg' },
    { name: 'Maria Garcia', role: 'Content Creator', major: 'Sophomore, Communications', image: 'https://picsum.photos/seed/core6/200/200.jpg' },
    { name: 'Kevin Park', role: 'Network Security', major: 'Senior, IT', image: 'https://picsum.photos/seed/core7/200/200.jpg' },
    { name: 'Nina Patel', role: 'Outreach Coordinator', major: 'Junior, Business', image: 'https://picsum.photos/seed/core8/200/200.jpg' }
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
