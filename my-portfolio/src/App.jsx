import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code, 
  Brain, 
  Briefcase, 
  GraduationCap, 
  User,
  Mail, 
  Download, 
  ArrowRight,
  ChevronRight,
  Terminal,
  Cpu,
  Database,
  Globe,
  Layers,
  Edit2,
  Plus,
  Trash2,
  Check,
  Link as LinkIcon
} from 'lucide-react';
import { portfolioData } from './data';
import './App.css';

const App = () => {
  const [isEditingBlogs, setIsEditingBlogs] = useState(false);
  const [blogs, setBlogs] = useState(() => {
    try {
      const savedBlogs = localStorage.getItem('portfolio_blogs');
      return savedBlogs ? JSON.parse(savedBlogs) : portfolioData.blogs;
    } catch (e) {
      console.error("Error loading blogs from localStorage:", e);
      return portfolioData.blogs;
    }
  });

  useEffect(() => {
    localStorage.setItem('portfolio_blogs', JSON.stringify(blogs));
  }, [blogs]);

  const handleUpdateBlog = (index, field, value) => {
    const updatedBlogs = [...blogs];
    updatedBlogs[index] = { ...updatedBlogs[index], [field]: value };
    setBlogs(updatedBlogs);
  };

  const handleDeleteBlog = (index) => {
    const updatedBlogs = blogs.filter((_, i) => i !== index);
    setBlogs(updatedBlogs);
  };

  const handleAddBlog = () => {
    const newBlog = {
      title: "New Blog Post",
      excerpt: "Write a short summary of your article here.",
      date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
      category: "TECH",
      link: "",
    };
    setBlogs([...blogs, newBlog]);
  };

  const data = portfolioData;

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const getSkillIcon = (category) => {
    const cat = category.toLowerCase();
    if (cat.includes('lang')) return <Terminal size={18} />;
    if (cat.includes('machine') || cat.includes('ai')) return <Brain size={18} />;
    if (cat.includes('backend') || cat.includes('system')) return <Cpu size={18} />;
    if (cat.includes('data')) return <Database size={18} />;
    if (cat.includes('web') || cat.includes('lib') || cat.includes('front')) return <Globe size={18} />;
    return <Layers size={18} />;
  };

  return (
    <div className="portfolio">
      <header>
        <motion.div 
          className="logo" 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }}
          style={{ fontWeight: 900, fontSize: '1.5rem', letterSpacing: '-1px' }}
        >
          Eeshan Dontaraju<span style={{ color: 'var(--text-muted)' }}>.</span>
        </motion.div>

        <nav style={{ display: 'flex', gap: '24px', fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
          <a href="#skills">Skills</a>
          <a href="#experience">Journey</a>
          <a href="#projects">Projects</a>
          <a href="#certificates">Certificates</a>
          <a href="#blogs">Blog</a>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className="hero">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            <div className="role-label">
              <Code size={18} /> {data.title}
            </div>
            <h1>
              I build <br />
              Scalable Systems & Intelligent Models
            </h1>
            <p>{data.summary}</p>
            
            <div style={{ marginTop: '40px', display: 'flex', gap: '16px' }}>
              <a href="#contact" className="btn-cta">
                Get in Touch <ArrowRight size={20} />
              </a>
              <a href="resumes/EeshanResume.pdf" download className="btn-cta" style={{ background: 'transparent', border: '1px solid var(--border)', color: 'var(--text-primary)' }}>
                <Download size={20} /> Resume
              </a>
            </div>
          </motion.div>
        </section>

        {/* Skills Section (Bento Grid) */}
        <section id="skills">
          <motion.h2 
            initial="hidden" 
            whileInView="visible" 
            variants={fadeUp} 
            viewport={{ once: true }}
            style={{ fontSize: '2.5rem', marginBottom: '48px', fontWeight: 800 }}
          >
            Expertise
          </motion.h2>
          
          <div className="bento-grid">
            {data.skills.map((skillGroup, idx) => (
              <motion.div 
                key={idx}
                className={`bento-item ${skillGroup.items.length > 5 ? 'medium' : ''}`}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px', color: 'var(--text-primary)' }}>
                  {getSkillIcon(skillGroup.category)}
                  <h4>{skillGroup.category}</h4>
                </div>
                <div className="skills-list">
                  {skillGroup.items.map((skill, sIdx) => (
                    <span key={sIdx} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience">
          <motion.h2 
            initial="hidden" 
            whileInView="visible" 
            variants={fadeUp} 
            viewport={{ once: true }}
            style={{ fontSize: '2.5rem', marginBottom: '48px', fontWeight: 800 }}
          >
            Journey
          </motion.h2>
          
          <div className="timeline">
            <motion.div 
              className="timeline-item"
              initial="hidden"
              whileInView="visible"
              variants={fadeUp}
              viewport={{ once: true }}
            >
              <div className="timeline-date">{data.experience.period}</div>
              <h3>{data.experience.role} @ {data.experience.company}</h3>
              <ul style={{ marginTop: '16px', color: 'var(--text-secondary)' }}>
                {data.experience.points.map((point, idx) => (
                  <li key={idx} style={{ marginBottom: '12px', display: 'flex', gap: '12px' }}>
                    <ChevronRight size={18} style={{ flexShrink: 0, color: 'var(--text-muted)' }} />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div 
              className="timeline-item"
              initial="hidden"
              whileInView="visible"
              variants={fadeUp}
              viewport={{ once: true }}
            >
              <div className="timeline-date">{data.education.period}</div>
              <h3>{data.education.degree}</h3>
              <p style={{ color: 'var(--text-secondary)' }}>{data.education.institution}</p>
              <div style={{ marginTop: '8px', fontWeight: 700 }}>CGPA: {data.education.cgpa}/10</div>
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects">
          <motion.h2 
            initial="hidden" 
            whileInView="visible" 
            variants={fadeUp} 
            viewport={{ once: true }}
            style={{ fontSize: '2.5rem', marginBottom: '48px', fontWeight: 800 }}
          >
            Crafted Projects
          </motion.h2>
          
          <div className="projects-grid">
            {data.projects.map((project, idx) => (
              <motion.div 
                key={project.title}
                className="project-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
              >
                <h3>{project.title}</h3>
                <div className="project-tech">
                  {project.technologies.map((tech, tIdx) => (
                    <span key={tIdx} className="tech-pill">{tech}</span>
                  ))}
                </div>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '24px' }}>{project.description}</p>
                <ul style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                  {project.points.map((p, pIdx) => (
                    <li key={pIdx} style={{ marginBottom: '8px', display: 'flex', gap: '8px' }}>
                      <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'currentColor', marginTop: '8px', flexShrink: 0 }} />
                      {p}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Certificates Section */}
        <section id="certificates" style={{ paddingBottom: 0 }}>
          <motion.h2 
            initial="hidden" 
            whileInView="visible" 
            variants={fadeUp} 
            viewport={{ once: true }}
            style={{ fontSize: '2.5rem', marginBottom: '48px', fontWeight: 800 }}
          >
            Certifications
          </motion.h2>
        </section>

        <div className="marquee-container">
          <motion.div 
            className="marquee-content"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ 
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
          >
            {[...data.certificates, ...data.certificates].map((cert, idx) => (
              <div key={idx} className="certificate-item">
                <img src={cert.image} alt={cert.title} title={cert.title} />
              </div>
            ))}
          </motion.div>
        </div>

        <section id="blogs">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '48px' }}>
            <motion.h2 
              initial="hidden" 
              whileInView="visible" 
              variants={fadeUp} 
              viewport={{ once: true }}
              style={{ fontSize: '2.5rem', fontWeight: 800, margin: 0 }}
            >
              Project Reports and Blogs.
            </motion.h2>
          </div>
          
          <div className="blogs-grid">
            {blogs.map((blog, idx) => (
              <motion.div 
                key={idx}
                className="blog-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <>
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                      <span className="tech-pill" style={{ background: 'var(--accent)', color: '#fff', border: 'none' }}>{blog.category}</span>
                      <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{blog.date}</span>
                    </div>
                    <h3>{blog.title}</h3>
                    <p className="blog-excerpt-read">{blog.excerpt}</p>
                  </div>
                  {blog.link ? (
                    <a href={blog.link} target="_blank" rel="noopener noreferrer" className="blog-meta link-btn" style={{ textDecoration: 'none' }}>
                      <span>Read Article</span>
                      <ArrowRight size={16} />
                    </a>
                  ) : (
                    <div className="blog-meta" style={{ color: 'var(--text-muted)', cursor: 'default' }}>
                      <span>Coming Soon..</span>
                    </div>
                  )}
                </>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact">
          <motion.div 
            className="contact-container"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2>Ready to collaborate?</h2>
            <p style={{ fontSize: '1.25rem', opacity: 0.8, marginBottom: '40px' }}>
              Currently seeking opportunities where I can make an impact.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <a href={`mailto:${data.contact.email}`} className="btn-cta">
                <Mail size={20} /> Say Hello
              </a>
              <a href="resumes/EeshanResume.pdf" download className="btn-cta" style={{ background: 'transparent', border: '1px solid #fff', color: '#fff' }}>
                <Download size={20} /> Resume
              </a>
              <a href={data.contact.linkedin} target="_blank" rel="noopener noreferrer" className="btn-cta" style={{ background: 'transparent', border: '1px solid #fff', color: '#fff' }}>
                LinkedIn
              </a>
              <a href={data.contact.github} target="_blank" rel="noopener noreferrer" className="btn-cta" style={{ background: 'transparent', border: '1px solid #fff', color: '#fff' }}>
                GitHub
              </a>
            </div>
          </motion.div>
        </section>
      </main>

      <footer style={{ padding: '40px 0', borderTop: '1px solid var(--border)', textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.875rem' }}>
        <p> {data.name} {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
};

export default App;
