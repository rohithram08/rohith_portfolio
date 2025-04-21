import React from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import './App.css';
function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? 'bg-gradient-to-b from-gray-900 to-gray-800 text-white min-h-screen font-sans' : 'bg-gradient-to-b from-white to-gray-100 text-gray-900 min-h-screen font-sans'}>
      <header className="p-6 text-center flex flex-col items-center">
        <div className="flex justify-between items-center w-full max-w-6xl">
          <div></div>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full border hover:bg-gray-700 transition"
          >
            {darkMode ? <Sun className="text-yellow-400" /> : <Moon className="text-blue-600" />}
          </button>
        </div>
        <motion.img 
          src="/Rohith_ram_H.jpg" 
          alt="Rohith Ram H" 
          className="profile-image" 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1, rotate: 5 }}
        />
        <motion.h1 
          className="text-5xl font-bold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Rohith Ram H
        </motion.h1>
        <p className="text-gray-400 mt-2 text-lg">Emerging Software Engineer | Data Scientist</p>
      </header>

      <nav className="flex justify-center space-x-8 p-4 border-b border-gray-700 backdrop-blur-sm bg-opacity-30 sticky top-0 z-50">
        {['About', 'Projects', 'Skills', 'Certificates', 'Contact'].map((item) => (
          <a 
            key={item} 
            href={`#${item.toLowerCase()}`} 
            className="nav-link"
          >
            {item}
          </a>
        ))}
      </nav>

      <section id="about" className="p-8 text-center">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          About Me
        </motion.h2>
        <p className="max-w-2xl mx-auto text-gray-400 text-lg">
          I am a pre-final year Computer Science and Engineering student at PERI Institute of Technology with a GPA of 8.23/10. I have a keen interest in Data Science, High-Performance Computing, and enhancing machine learning algorithms for large datasets. I have hands-on experience with Python, desktop applications, and ongoing research projects on economic loss trends in India and Japan. I'm always eager to innovate, learn, and collaborate on challenging tech problems.
        </p>
      </section>

      <section id="projects" className="p-8">
        <motion.h2 
          className="text-4xl font-semibold mb-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[{
            title: 'Expense Tracker Application',
            desc: 'A user-friendly app for tracking personal expenses, built with React.js and backend integration.'
          }, {
            title: 'Weather Voice Assistant',
            desc: 'An interactive desktop assistant providing real-time weather updates through voice commands.'
          }, {
            title: 'Real-Time Cloak Effect',
            desc: 'A computer vision project creating a real-time invisibility effect using OpenCV and Python.'
          }].map((proj, index) => (
            <motion.div 
              key={index} 
              className="project-card"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-2xl font-semibold mb-2">{proj.title}</h3>
              <p className="text-gray-400">{proj.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="skills" className="p-8 text-center">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Skills
        </motion.h2>
        <p className="max-w-3xl mx-auto text-gray-400 text-lg">
          Python, C, Java, MySQL, MATLAB, React.js, OpenCV, HTML, CSS, VS Code, Visual Studio, Anaconda Navigator, Spyder, Jupyter Notebook, Git, GitHub
        </p>
      </section>

      <section id="certificates" className="p-8 text-center">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Certificates & Internships
        </motion.h2>
        <p className="max-w-3xl mx-auto text-gray-400 text-lg">     
          - Data Structure using Java by NPTEL<br/>
          - AI-ML Program from Pantech Solutions<br/>
          - 5+ Data Science and Python workshops/webinars
        </p>
      </section>

      <section id="contact" className="p-8 text-center">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Contact
        </motion.h2>
        <div className="text-gray-400 text-lg space-y-2">
          <p>📞 <a href="tel:+919043630691" className="text-yellow-400 hover:underline">+91 9043630691</a></p>
          <p>📧 <a href="mailto:rohithram5467@gmail.com" className="text-yellow-400 hover:underline">rohithram5467@gmail.com</a></p>
          <p>📍 Chennai, India</p>
          <p>🌐 <a href="http://www.rohithram08portfolio.com" className="text-yellow-400 hover:underline">rohithram08portfolio.com</a></p>
          <p>🔗 <a href="https://www.linkedin.com/in/rohith-ram-h-3175b825b/" className="text-yellow-400 hover:underline">LinkedIn Profile</a></p>
        </div>
      </section>
    </div>
  );
}

export default App;
