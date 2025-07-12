import React from "react";
import { FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Portfolio() {
  const addSparkles = (e, count = 4) => {
    for (let i = 0; i < count; i++) {
      const spark = document.createElement("span");
      spark.innerText = "✨";
      spark.className =
        "absolute animate-bounce text-yellow-400 text-xl pointer-events-none z-50";
      spark.style.top = Math.random() * 30 + "px";
      spark.style.left = Math.random() * 100 + "px";
      spark.style.transform = `rotate(${Math.random() * 360}deg) scale(${Math.random() + 0.5})`;
      e.currentTarget.appendChild(spark);
      setTimeout(() => spark.remove(), 800);
    }
  };

  const SparkSpin = ({ children, ...props }) => (
    <motion.div
      whileHover={{ rotateY: 360 }}
      transition={{ duration: 1 }}
      onClick={(e) => addSparkles(e, 4)}
      className="relative inline-block cursor-pointer"
      style={{ transformStyle: "preserve-3d", perspective: 1000 }}
      {...props}
    >
      {children}
    </motion.div>
  );

  const AnimatedTitle = ({ emoji, title }) => (
    <motion.h2
      className="text-2xl font-semibold mb-2 inline-block cursor-pointer relative"
      whileHover={{ rotateY: 360 }}
      transition={{ duration: 0.8 }}
      whileTap={{ scale: 0.95 }}
      onClick={(e) => addSparkles(e)}
      style={{ transformStyle: "preserve-3d", perspective: 1000 }}
    >
      {emoji} {title}
    </motion.h2>
  );

  return (
    <motion.div
      className="font-sans bg-gradient-to-br from-blue-100 to-purple-200 min-h-screen text-gray-800"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Header */}
      <header className="text-center py-10">
        <motion.h1
          className="text-4xl font-bold text-[#343838] cursor-pointer relative inline-block"
          whileHover={{ rotateY: 360 }}
          transition={{ duration: 1 }}
          onClick={(e) => addSparkles(e)}
          style={{
            transformStyle: "preserve-3d",
            perspective: 1000,
          }}
        >
          Shruthilaya VS
        </motion.h1>
        <p className="text-lg italic">
          CSBS Student | Cybersecurity & Frontend Enthusiast
        </p>
        <p className="text-sm">
          ENTJ • Tamil | Telugu | Hindi | English 
        </p>
      </header>

      {/* About Me */}
      <motion.section className="px-6 md:px-20 py-6" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
        <AnimatedTitle emoji="👩‍💻" title="About Me" />
        <p>
          I have completed my schooling in Everwin vidhayasharm at 2023.
          I am a 3rd-year B.Tech CSBS student at Panimalar Engineering College. I love Cybersecurity & Frontend Dev. 
          I have done 3 internships so far (ISUZU, Numeric UPS, TekPyramid), built apps, joined in many competions, and I also know 4 different languages.
        </p>
      </motion.section>

      {/* Skills */}
      <motion.section className="px-6 md:px-20 py-6" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
        <AnimatedTitle emoji="🧠" title="Skills" />
        <ul className="list-disc ml-6">
          <li>Languages: Python, C, C++, SQL</li>
          <li>Frontend: HTML, Tailwind CSS, React.js</li>
          <li>Tools: GitHub, Figma (basic), VS Code</li>
          <li>Soft skills: Public speaking, team collaboration</li>
        </ul>
      </motion.section>

      {/* Certifications */}
      <motion.section className="px-6 md:px-20 py-6" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
        <AnimatedTitle emoji="🏅" title="Certifications" />
        <ul className="list-disc ml-6">
          <li>Oracle Cloud & AI</li>
          <li>AWS Cloud Security</li>
          <li>Infosys Generative AI</li>
          <li>NASSCOM Cybersecurity</li>
        </ul>
      </motion.section>

      {/* Hackathons */}
      <motion.section className="px-6 md:px-20 py-6" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
        <AnimatedTitle emoji="🚀" title="Hackathons & Ideathons" />
        <ul className="list-disc ml-6">
          <li>TATA Imagination Challenge</li>
          <li>Infosys Springboard Ideathon</li>
          <li>IEEE YESIST12</li>
          <li>Bharatiya ISRO Hackathon</li>
        </ul>
      </motion.section>

      {/* Internships */}
      <motion.section className="px-6 md:px-20 py-6" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
        <AnimatedTitle emoji="💼" title="Internships" />
        <ul className="list-disc ml-6">
          <li><strong>ISUZU Motors India:</strong> Learned IT & HRMS in the automotive industry</li>
          <li><strong>Numeric UPS:</strong> Coordinated internal tasks & processes</li>
          <li><strong>TekPyramid:</strong> Real-world exposure to web development</li>
        </ul>
      </motion.section>

      {/* Projects */}
      <motion.section className="px-6 md:px-20 py-6" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
        <AnimatedTitle emoji="📦" title="Projects" />
        <ul className="list-disc ml-6">
          <li>🌫 Air Quality Forecast Application</li>
          <li>🌦 Real Time Weather Application</li>
          <li>🎵 Music Application</li>
        </ul>
      </motion.section>

      {/* Fun Zone */}
      <motion.section className="px-6 md:px-20 py-6" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
        <AnimatedTitle emoji="🎉" title="Fun Zone" />
        <p>
          Favorite anime: <strong>Attack on Titan</strong><br />
          Favorite K-drama: <strong>Extraordinary You</strong><br />
          Hobbies: Gardening, Grooming Pets , Story telling 
        </p>
      </motion.section>

      {/* Contact */}
      <motion.section className="px-6 md:px-20 py-6 text-center" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
        <AnimatedTitle emoji="📫" title="Contact" />
        <div className="flex justify-center gap-4 text-xl flex-wrap">
          <SparkSpin>
            <a href="mailto:shruthilayavs@gmail.com" className="flex items-center gap-1 hover:underline">
              <FaEnvelope /> shruthilayavs@gmail.com
            </a>
          </SparkSpin>
          <SparkSpin>
            <a href="tel:+918072307661" className="flex items-center gap-1 hover:underline">
              <FaPhone /> 8072307661
            </a>
          </SparkSpin>
          <SparkSpin>
            <a href="https://github.com/ShruthilayaVS" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:underline">
              <FaGithub /> GitHub
            </a>
          </SparkSpin>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="text-center py-6 text-sm text-gray-500">
        Made with 💙 by Shruthilaya VS | © 2025
      </footer>
    </motion.div>
  );
}
