import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaLaptopCode, FaServer, FaTools, FaStar, FaRegStar } from 'react-icons/fa';

const Skills = () => {
  const [activeTab, setActiveTab] = useState('all');
  
  const skillCategories = [
    { id: 'all', name: 'All Skills', icon: <FaStar /> },
    { id: 'languages', name: 'Languages', icon: <FaCode /> },
    { id: 'frontend', name: 'Frontend', icon: <FaLaptopCode /> },
    { id: 'backend', name: 'Backend', icon: <FaServer /> },
    { id: 'tools', name: 'Tools & Others', icon: <FaTools /> }
  ];

  const skills = [
    {
      category: 'languages',
      title: 'Languages',
      items: [
        { name: 'C/C++', level: 95, color: 'from-blue-500 to-blue-400' },
        { name: 'JavaScript', level: 90, color: 'from-blue-500 to-blue-400' },
        { name: 'Python (Basic)', level: 60, color: 'from-blue-500 to-blue-400' },
        { name: 'Java (Basic)', level: 60, color: 'from-blue-500 to-blue-400' }
      ]
    },
    {
      category: 'webdev',
      title: 'Web Development',
      items: [
        { name: 'React.js', level: 85, color: 'from-blue-500 to-blue-400' },
        { name: 'Node.js', level: 90, color: 'from-blue-500 to-blue-400' },
        { name: 'Express.js', level: 85, color: 'from-blue-500 to-blue-400' },
        { name: 'MySQL', level: 75, color: 'from-blue-500 to-blue-400' },
        { name: 'PostgreSQL', level: 65, color: 'from-blue-500 to-blue-400' },
        { name: 'MongoDB', level: 80, color: 'from-blue-500 to-blue-400' }
      ]
    },
    {
      category: 'tools',
      title: 'Tools & Others',
      items: [
        { name: 'Git', level: 90, color: 'from-blue-500 to-blue-400' },
        { name: 'GitHub', level: 90, color: 'from-blue-500 to-blue-400' },
        { name: 'VS Code', level: 95, color: 'from-blue-500 to-blue-400' }
      ]
    }
  ];

  const filteredSkills = activeTab === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeTab);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const renderStars = (level) => {
    const stars = [];
    const fullStars = Math.floor(level / 20);
    const hasHalfStar = level % 20 >= 10;
    
    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<FaStar key={i} className="text-yellow-400" />);
      } else if (i === fullStars && hasHalfStar) {
        stars.push(
          <div key={i} className="relative">
            <FaRegStar className="text-yellow-400" />
            <FaStar className="absolute top-0 left-0 text-yellow-400 w-1/2 overflow-hidden" />
          </div>
        );
      } else {
        stars.push(<FaRegStar key={i} className="text-yellow-400" />);
      }
    }
    
    return stars;
  };

  return (
    <section id="skills" className="py-20 px-4 bg-gradient-to-b from-white to-gray-100 dark:from-gray-800 dark:to-gray-900 text-gray-800 dark:text-gray-200">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">Technical Skills</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My technical toolkit that I've developed and refined throughout my journey.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {skillCategories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`px-4 py-2 rounded-full flex items-center gap-2 transition-all ${activeTab === category.id
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>{category.icon}</span>
              <span>{category.name}</span>
            </motion.button>
          ))}
        </div>

        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {filteredSkills.map((skillGroup, idx) => (
            <motion.div 
              key={idx}
              className="bg-white dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden"
              variants={fadeInUp}
            >
              <div className="p-6 border-b border-gray-100 dark:border-gray-600">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">{skillGroup.title}</h3>
              </div>
              <div className="p-6">
                <div className="space-y-6">
                  {skillGroup.items.map((skill, i) => (
                    <motion.div 
                      key={i}
                      className="space-y-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{skill.name}</span>
                        <div className="flex space-x-1">
                          {renderStars(skill.level)}
                        </div>
                      </div>
                      <div className="h-2 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden">
                        <motion.div 
                          className={`h-full bg-gradient-to-r ${skill.color}`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, ease: "easeOut" }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-600 dark:text-gray-400">
            I'm constantly learning and adding new skills to my repertoire.
          </p>
          <motion.a 
            href="#contact"
            className="inline-flex items-center gap-2 mt-4 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            Let's Discuss a Project
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
