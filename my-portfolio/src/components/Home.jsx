import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope, FaFileDownload } from 'react-icons/fa';

// Animated background particles
const ParticleBackground = () => {
  const [particles, setParticles] = useState([]);
  
  useEffect(() => {
    // Create 50 particles with random positions
    const newParticles = Array.from({ length: 50 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      speed: Math.random() * 0.3 + 0.1
    }));
    
    setParticles(newParticles);
    
    // Animation loop for particles
    const interval = setInterval(() => {
      setParticles(prev => prev.map(particle => ({
        ...particle,
        y: particle.y - particle.speed > 0 ? particle.y - particle.speed : 100
      })));
    }, 50);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="absolute inset-0 overflow-hidden">
      {particles.map((particle, index) => (
        <div 
          key={index}
          className="absolute rounded-full bg-blue-500 opacity-20 dark:opacity-30"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
          }}
        />
      ))}
    </div>
  );
};

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.3,
        delayChildren: 0.2,
      } 
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: 'spring',
        stiffness: 100,
      }
    }
  };

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen text-center bg-gradient-to-b from-gray-100 to-white dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-white px-4 overflow-hidden">
      <ParticleBackground />
      
      <motion.div 
        className="z-10 flex flex-col items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div 
          className="relative"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
        >
          <img 
            src="/assets/profile.jpg" 
            alt="Devansh Sharma" 
            className="w-40 h-40 rounded-full shadow-lg mb-6 border-4 border-blue-400 object-cover" 
          />
          <motion.div 
            className="absolute -bottom-2 -right-2 bg-blue-600 text-white rounded-full p-2"
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          >
            <span className="block h-4 w-4 rounded-full"></span>
          </motion.div>
        </motion.div>
        
        <motion.h1 
          className="text-5xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400"
          variants={itemVariants}
        >
          Devansh Sharma
        </motion.h1>
        
        <motion.p 
          className="text-xl mb-6 text-gray-700 dark:text-gray-300"
          variants={itemVariants}
        >
          Aspiring Software Engineer | MERN Stack | DSA Mentor
        </motion.p>
        
        <motion.div 
          className="flex gap-6 justify-center mb-8"
          variants={itemVariants}
        >
          <motion.a 
            href="mailto:debu1301@gmail.com" 
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 text-2xl"
            whileHover={{ scale: 1.2, y: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaEnvelope />
          </motion.a>
          <motion.a 
            href="https://www.linkedin.com/in/sharmadevansh1301/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 text-2xl"
            whileHover={{ scale: 1.2, y: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaLinkedin />
          </motion.a>
          <motion.a 
            href="https://github.com/GOKU1301" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 text-2xl"
            whileHover={{ scale: 1.2, y: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaGithub />
          </motion.a>
          <motion.a 
            href="/assets/Devansh_Sharma_Resume.pdf" 
            download 
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 text-2xl"
            whileHover={{ scale: 1.2, y: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaFileDownload />
          </motion.a>
        </motion.div>
        
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
          <motion.a 
            href="#projects" 
            className="px-8 py-3 bg-blue-600 rounded-full text-white font-semibold hover:bg-blue-700 transition shadow-lg flex items-center justify-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
          </motion.a>
          <motion.a 
            href="#contact" 
            className="px-8 py-3 bg-transparent border-2 border-blue-600 rounded-full text-blue-600 dark:text-blue-400 font-semibold hover:bg-blue-600/10 transition flex items-center justify-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
          </motion.a>
        </motion.div>
      </motion.div>
      
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1, repeat: Infinity, repeatType: 'reverse' }}
      >
        <div className="w-6 h-10 border-2 border-gray-600 dark:border-gray-400 rounded-full flex justify-center pt-1">
          <div className="w-1 h-2 bg-gray-600 dark:bg-gray-400 rounded-full animate-bounce"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
