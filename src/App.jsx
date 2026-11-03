import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowDown, ArrowRight, ArrowUpRight, BriefcaseBusiness, Code2,
  Download, ExternalLink, Github, Linkedin, Mail, Menu, MonitorSmartphone,
  Star, X, ChartNoAxesColumnIncreasing
} from 'lucide-react'
import { profile, skills, projects, experience } from './data'

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
}

function SectionTitle({ eyebrow, children, id }) {
  return <div className="section-heading" id={id}>
    {eyebrow && <span className="eyebrow">{eyebrow}</span>}
    <h2>{children}</h2><span className="heading-line" />
  </div>
}

function LaptopArt() {
  return <div className="hero-art" aria-label="Decorative code editor illustration">
    <div className="orbit orbit-one" /><div className="orbit orbit-two" />
    <div className="art-glow" />
    <div className="code-note">Code.<br/>Create.<br/>Innovate.</div>
    <div className="laptop">
      <div className="laptop-screen">
        <div className="editor-top"><span /><span /><span /><i>YASH / PORTFOLIO.JS</i></div>
        <div className="editor-body">
          <div className="line-numbers">01<br/>02<br/>03<br/>04<br/>05<br/>06<br/>07<br/>08<br/>09</div>
          <div className="code-lines">
            <p><b>const</b> <em>developer</em> = {'{'}</p>
            <p className="indent"><i>name</i>: <strong>'Yash Agrawal'</strong>,</p>
            <p className="indent"><i>role</i>: <strong>'Software Engineer'</strong>,</p>
            <p className="indent"><i>skills</i>: [</p>
            <p className="indent2"><strong>'JavaScript'</strong>, <strong>'React'</strong>,</p>
            <p className="indent2"><strong>'Java'</strong>, <strong>'Python'</strong></p>
            <p className="indent">],</p>
            <p>{'}'};</p>
            <p className="cursor-line"><b>developer</b>.build(); <span className="cursor">▋</span></p>
          </div>
        </div>
      </div>
      <div className="laptop-base" />
    </div>
    <span className="floating-chip chip-one">{"< />"}</span>
    <span className="floating-chip chip-two">UI / UX</span>
  </div>
}

function ProjectVisual({ type }) {
  if (type === 'dashboard') return <div className="project-visual dashboard-visual">
    <div className="mock-sidebar"><i /><i /><i /><i /></div>
    <div className="mock-content"><span className="mock-title" /><div className="mock-stats"><i /><i /><i /></div><div className="mock-chart"><span /><span /><span /><span /><span /><span /></div></div>
  </div>
  if (type === 'assistant') return <div className="project-visual assistant-visual">
    <div className="bot-orb">✳</div><div className="chat-lines"><i /><i /><i /><b /></div><span className="mini-spark">✦</span>
  </div>
  return <div className="project-visual code-visual">
    <div className="code-window"><div className="window-dots">● ● ●</div><Code2 size={56} strokeWidth={1.4}/><span>solve( )</span><div className="code-underline" /></div>
  </div>
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const navItems = ['Home', 'About', 'Projects', 'Experience', 'DSA', 'Contact']
  const closeMenu = () => setMenuOpen(false)

  return <div className="site-shell">
    <header className="topbar">
      <a href="#home" className="brand" onClick={closeMenu}><span className="brand-icon"><Code2 size={28}/></span><b>Yash Agrawal</b></a>
      <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X/> : <Menu/>}</button>
      <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
        {navItems.map((item, i) => <a key={item} className={i === 0 ? 'active' : ''} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>)}
      </nav>
      <a className="resume-button" href={profile.resume} download>Download Resume <Download size={14}/></a>
    </header>

    <main>
      <section className="hero section-wrap" id="home">
        <motion.div className="hero-copy" initial="hidden" animate="visible" variants={fadeUp}>
          <div className="hello-line"><span>Hi, I'm</span><i /></div>
          <h1>{profile.name}</h1>
          <h2>Aspiring <span>Software Engineer</span></h2>
          <p>{profile.tagline}</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">View My Projects <ArrowRight size={17}/></a>
            <a className="button button-outline" href="https://www.linkedin.com/in/yash-agrawal0611/" target="_blank">Let's Connect <Linkedin size={15}/></a>
          </div>
          <div className="hero-meta"><span className="status-dot"/> Open to learning, building & collaborating</div>
        </motion.div>
        <motion.div className="hero-visual-wrap" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .8, delay: .15 }}>
          <LaptopArt/>
        </motion.div>
      </section>

      <section className="about-section section-wrap section-divider" id="about">
        <motion.div className="profile-frame" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <div className="profile-placeholder">
            <img src={profile.photo} alt="Yash Agrawal" onError={e => { e.currentTarget.style.display = 'none' }} />
            <div className="photo-fallback"><span>YA</span><small>ADD PROFILE PHOTO</small></div>
          </div>
        </motion.div>
        <motion.div className="about-copy" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <SectionTitle>About Me</SectionTitle>
          <p>I'm a third-year B.Tech student at the <strong>School of Engineering, Jawaharlal Nehru University (JNU)</strong>, pursuing Electronics and Communication Engineering, graduating in 2028.</p>
          <p>I'm interested in frontend development, responsive web experiences, and problem-solving. I enjoy learning new technologies, strengthening my DSA skills in Java, and building practical projects that help me grow as an engineer.</p>
          <div className="about-facts"><span><b>2028</b> Graduation</span><span><b>ECE</b> Discipline</span><span><b>JNU</b> University</span></div>
        </motion.div>
        <motion.div className="skills-block" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <SectionTitle>Tech Stack</SectionTitle>
          <div className="skills-grid">
            {skills.map(skill => <div className="skill-card" key={skill.name}><span className={`skill-mark ${skill.className}`}>{skill.mark}</span><span>{skill.name}</span></div>)}
          </div>
          <p className="skill-note">Technologies and tools I'm learning and working with.</p>
        </motion.div>
      </section>

      <section className="projects-section section-wrap section-divider" id="projects">
        <div className="section-topline"><SectionTitle eyebrow="SELECTED WORK">My Projects</SectionTitle><span className="small-note">Sample layouts · Replace with real projects</span></div>
        <div className="projects-grid">
          {projects.map((project, i) => <motion.article className="project-card" key={project.name} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: i * .08 }}>
            <ProjectVisual type={project.visual}/>
            <div className="project-info">
              <div className="project-kicker">{project.type}</div><h3>{project.name}</h3><p>{project.description}</p>
              <div className="tag-row">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
              <div className="project-bottom"><small>{project.status}</small><a href={project.github} target="_blank" rel="noreferrer" aria-label={`GitHub for ${project.name}`}><ArrowUpRight size={17}/></a></div>
            </div>
          </motion.article>)}
        </div>
      </section>

      <section className="experience-section section-wrap section-divider" id="experience">
        <div className="experience-column">
          <SectionTitle eyebrow="GETTING INVOLVED">Experience & Volunteering</SectionTitle>
          <div className="timeline">
            {experience.map((item, i) => <div className="timeline-item" key={item.title}>
              <div className="timeline-icon">{i === 0 ? <BriefcaseBusiness size={19}/> : <Star size={19}/>}</div>
              <div><h3>{item.title}</h3><b>{item.organization}</b><p>{item.detail}</p><small>{item.date}</small></div>
            </div>)}
          </div>
        </div>
        <div className="dsa-column" id="dsa">
          <SectionTitle eyebrow="CONSISTENCY OVER COMPLETION">DSA Journey</SectionTitle>
          <p>Solving problems in Java, one step at a time.</p>
          <div className="dsa-panels">
            <div className="dsa-panel"><Code2 size={25}/><div><strong>Java</strong><small>Primary DSA language</small></div></div>
            <div className="dsa-panel"><ChartNoAxesColumnIncreasing size={25}/><div><strong>Keep learning</strong><small>Building problem-solving skills</small></div></div>
          </div>
          <a className="button button-outline leetcode-button" href={profile.leetcode} target="_blank" rel="noreferrer">View my LeetCode <ArrowRight size={16}/></a>
        </div>
      </section>

      <section className="contact-section section-wrap section-divider" id="contact">
        <div><span className="eyebrow">HAVE A PROJECT OR OPPORTUNITY?</span><h2>Let's build something<br/><em>meaningful.</em></h2><p>I'm always open to connecting, learning, and collaborating.</p></div>
        <a className="button button-primary contact-cta"  href="mailto:agrayash0611@gmail.com">Get in touch <ArrowUpRight size={17}/></a>
      </section>
    </main>

    <footer className="footer section-wrap">
      <a href="#home" className="brand"><span className="brand-icon"><Code2 size={25}/></span><b>Yash Agrawal</b></a>
      <div className="social-links">
        <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin/></a>
        <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github/></a>
        <a href={`mailto:${profile.email}`} aria-label="Email"><Mail/></a>
      </div>
      <span className="footer-note">Designed & built with <i>♥</i> by Yash</span>
    </footer>
  </div>
}

export default App
