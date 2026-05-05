import React, { useState, useEffect } from 'react';
import { 
  Mail, 
  Briefcase, 
  ChevronRight, 
  Download,
  Moon,
  Sun,
  MapPin,
  Terminal,
  Database
} from 'lucide-react';

// Custom inline SVGs for Brand Icons that were removed from lucide-react
const GithubIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path>
  </svg>
);

const LinkedinIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const App = () => {
  // Dark mode by default as requested
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Toggle theme
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const navigation = [
    { name: 'About', href: '#home' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  const experience = [
    {
      company: 'SIPROCAL',
      role: 'Mid Backend Developer (Acting Senior)',
      period: 'April 2022 — Present',
      description: 'Orchestrated the design and maintenance of 50+ high-availability microservices using Python and Java Spring Boot, supporting 1,000s of concurrent users with 99.9% uptime. Engineered a critical migration from AWS Athena to StarRocks, reducing analytical query latency by 50%.',
      tags: ['Python', 'FastAPI', 'Spring Boot', 'StarRocks', 'AWS']
    },
    {
      company: 'National University of Engineering',
      role: 'AI Legal Retrieval Engineer',
      period: 'April 2025 — Sept 2025',
      description: 'Engineered a production-ready RAG system utilizing Python, LangChain, and Milvus to automate complex legal retrieval with 92% accuracy. Optimized vector ingestion for 10,000+ legal documents, reducing ingestion time from hours to minutes.',
      tags: ['LangChain', 'Milvus', 'Hugging Face', 'Python', 'RAG']
    },
    {
      company: 'LOOPI',
      role: 'Lead Backend & Infrastructure Engineer',
      period: 'January 2021 — March 2022',
      description: 'Architected a multi-platform backend using Java Spring Boot and Firebase to manage promotions for 5,000+ active users. Orchestrated deployment workflows using Firebase Functions and Java microservices, reducing manual operational overhead by 40%.',
      tags: ['Java', 'Spring Boot', 'Firebase', 'GCP', 'Microservices']
    }
  ];

  const projects = [
    {
      title: 'Agentic RAG Engine',
      description: 'High-performance similarity search pipeline capable of processing complex unstructured datasets with automated context management to significantly reduce LLM hallucinations.',
      image: 'https://images.unsplash.com/photo-1551288049-bbbda5366392?auto=format&fit=crop&q=80&w=800',
      link: 'https://github.com/Sjeffmichael',
      github: 'https://github.com/Sjeffmichael'
    },
    {
      title: 'Scalable Microservices Architecture',
      description: 'A cloud-native AWS orchestration framework utilizing ECS, Lambda, and CloudFormation to ensure 99.9% reliability for enterprise-grade workloads.',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800',
      link: 'https://github.com/Sjeffmichael',
      github: 'https://github.com/Sjeffmichael'
    }
  ];

  const skills = {
    "Backend & APIs": ["Python", "Java (Spring Boot)", "FastAPI", "Flask", "Django", "Go / Rust (Intro)"],
    "Data & AI": ["LangChain", "Milvus", "StarRocks", "PostgreSQL", "MongoDB", "Hugging Face"],
    "Cloud & DevOps": ["AWS (ECS, S3, EC2, Lambda)", "Docker", "Kubernetes", "Linux (Ubuntu)", "CI/CD"]
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 scroll-smooth ${isDarkMode ? 'bg-slate-950 text-slate-200' : 'bg-white text-slate-800'}`}>
      
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 border-b ${isDarkMode ? 'bg-slate-950/80 border-slate-800 backdrop-blur-md' : 'bg-white/80 border-slate-100 backdrop-blur-md'}`}>
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">SG</div>
            <span className="font-bold tracking-tight hidden sm:block">Sjeff M. Gómez</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <a 
                key={item.name} 
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-indigo-500 ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`p-2 rounded-full transition-colors ${isDarkMode ? 'hover:bg-slate-800 text-yellow-400' : 'hover:bg-slate-100 text-slate-600'}`}
            >
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <a 
              href="#contact" 
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-full text-sm font-semibold transition-all shadow-sm active:scale-95"
            >
              Contact Me
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 md:pt-48 md:pb-32 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-indigo-500/20 bg-indigo-500/10 text-indigo-500 text-xs font-bold mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            <span>AVAILABLE FOR NEW OPPORTUNITIES</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
            Architecting <span className="text-indigo-600">scalable</span> cloud & AI ecosystems.
          </h1>
          <p className={`text-lg md:text-xl max-w-2xl mb-8 leading-relaxed ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            I'm Sjeff Michael Gómez, an agentic and result-oriented Senior Backend Engineer with 4+ years of experience. I specialize in high-performance Python ecosystems, complex microservices, and advanced RAG systems.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#experience" className="group flex items-center space-x-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-6 py-3 rounded-full font-bold transition-all hover:pr-8">
              <span>View Experience</span>
              <ChevronRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
            <div className="flex items-center space-x-4 px-4">
              <a href="https://github.com/Sjeffmichael" target="_blank" rel="noopener noreferrer" className={`p-2 transition-colors ${isDarkMode ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-indigo-600'}`}>
                <GithubIcon size={22} />
              </a>
              <a href="https://linkedin.com/in/michael-gomez-5871b9200" target="_blank" rel="noopener noreferrer" className={`p-2 transition-colors ${isDarkMode ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-indigo-600'}`}>
                <LinkedinIcon size={22} />
              </a>
              <a href="mailto:sjeffmichael56@gmail.com" className={`p-2 transition-colors ${isDarkMode ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-indigo-600'}`}>
                <Mail size={22} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className={`py-24 px-6 ${isDarkMode ? 'bg-slate-900/50' : 'bg-slate-50'}`}>
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-start md:space-x-20">
            <div className="md:w-1/3 mb-12 md:mb-0">
              <h2 className="text-3xl font-bold mb-4 flex items-center space-x-3">
                <Briefcase className="text-indigo-600" />
                <span>Experience</span>
              </h2>
              <p className={isDarkMode ? 'text-slate-400' : 'text-slate-600'}>
                Proven track record of maintaining 99.9% reliability across global AWS infrastructures and delivering thoroughly tested code.
              </p>
              <a href="#" className="mt-8 flex items-center space-x-2 text-indigo-600 font-bold group hover:underline underline-offset-4">
                <Download size={18} />
                <span>Download Full CV</span>
              </a>
            </div>
            
            <div className="md:w-2/3 space-y-12">
              {experience.map((job, idx) => (
                <div key={idx} className="relative pl-8 before:absolute before:left-0 before:top-2 before:bottom-0 before:w-px before:bg-indigo-600/20">
                  <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-indigo-600" />
                  <span className="text-sm font-bold text-indigo-600 mb-1 block">{job.period}</span>
                  <h3 className="text-xl font-bold mb-1">{job.role}</h3>
                  <p className="font-semibold text-slate-500 mb-3">{job.company}</p>
                  <p className={`mb-4 leading-relaxed ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    {job.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {job.tags.map(tag => (
                      <span key={tag} className={`text-xs px-2 py-1 rounded border ${isDarkMode ? 'border-slate-800 bg-slate-800 text-slate-300' : 'border-slate-200 bg-white text-slate-600'}`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-4 flex items-center space-x-3">
                <Database className="text-indigo-600" />
                <span>Engineering Focus</span>
              </h2>
              <p className={isDarkMode ? 'text-slate-400' : 'text-slate-600'}>
                Key areas of technical architecture and system design.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <div 
                key={idx} 
                className={`group rounded-2xl overflow-hidden border transition-all hover:shadow-xl ${isDarkMode ? 'bg-slate-900 border-slate-800 hover:border-slate-700' : 'bg-white border-slate-100 hover:border-slate-200'}`}
              >
                <div className="aspect-video overflow-hidden relative bg-slate-800">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-80 mix-blend-overlay"
                  />
                  <div className="absolute inset-0 bg-indigo-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-4">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-white text-slate-900 rounded-full hover:scale-110 transition-transform">
                      <GithubIcon size={20} />
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-indigo-500 transition-colors">{project.title}</h3>
                  <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={`py-24 px-6 ${isDarkMode ? 'bg-slate-900/50' : 'bg-slate-50'}`}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Technical Arsenal</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, list]) => (
              <div key={category} className={`p-8 rounded-2xl border ${isDarkMode ? 'bg-slate-950 border-slate-800' : 'bg-white border-slate-100'}`}>
                <h3 className="font-bold text-indigo-600 mb-6 uppercase tracking-wider text-xs">{category}</h3>
                <div className="flex flex-wrap gap-3">
                  {list.map(skill => (
                    <div key={skill} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                      <span className="font-medium text-sm">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 text-slate-500 mb-6">
            <MapPin size={16} />
            <span className="text-sm font-medium">Managua, Nicaragua (Open to Remote/Global)</span>
          </div>
          <h2 className="text-4xl font-bold mb-6">Let's build something scalable.</h2>
          <p className={`text-lg mb-10 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            I'm currently looking for new opportunities to leverage cloud architecture and AI engineering. Let's discuss how I can bring 99.9% reliability to your team.
          </p>
          <a 
            href="mailto:sjeffmichael56@gmail.com" 
            className="inline-flex items-center space-x-3 bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg shadow-indigo-500/20 active:scale-95"
          >
            <Mail size={20} />
            <span>Get in Touch</span>
          </a>
          
          <div className="mt-16 pt-16 border-t border-slate-100 dark:border-slate-800 flex flex-col items-center">
            <p className="text-sm text-slate-500 mb-6">Connect across platforms</p>
            <div className="flex space-x-6">
              {[
                { icon: <GithubIcon size={24} />, label: 'GitHub', link: 'https://github.com/Sjeffmichael' },
                { icon: <LinkedinIcon size={24} />, label: 'LinkedIn', link: 'https://linkedin.com/in/michael-gomez-5871b9200' },
                { icon: <Mail size={24} />, label: 'Email', link: 'mailto:sjeffmichael56@gmail.com' }
              ].map((social, i) => (
                <a key={i} href={social.link} target="_blank" rel="noopener noreferrer" className={`p-3 rounded-xl transition-all ${isDarkMode ? 'bg-slate-900 text-slate-400 hover:text-white' : 'bg-slate-50 text-slate-500 hover:text-indigo-600'}`}>
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-100 dark:border-slate-800 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Sjeff Michael Gómez Espinosa. All rights reserved.</p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <a href="https://github.com/Sjeffmichael" className="hover:text-indigo-600 transition-colors">GitHub</a>
            <a href="https://linkedin.com/in/michael-gomez-5871b9200" className="hover:text-indigo-600 transition-colors">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;