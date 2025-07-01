import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaBuilding, FaCalendarAlt, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const experiences = [
  {
    role: 'Senior Mentor',
    company: 'SaarthiPath',
    period: 'May 2025 – Present',
    location: 'Noida, India',
    type: 'Part-time',
    logo: '/assets/saarthipath-logo.png', 
    companyUrl: 'https://saarthipath.com',
    certificateUrl: 'https://drive.google.com/file/d/1wa3gZ-ea1Atx7wuzvLbsJT4xP1a1WAgn/view?usp=sharing',
    responsibilities: [
      'Mentored 50+ students in foundational programming and DSA through structured sessions.',
      'Designed tailored DSA roadmaps for beginner to intermediate learners.',
      'Provided 1-on-1 doubt-solving sessions over video calls for DSA and MERN stack queries.'
    ],
    skills: ['DSA', 'Programming', 'Mentoring', 'MERN Stack']
  },
  {
    role: 'Web Development Intern',
    company: 'Accretive Technologies',
    period: 'Oct 2024 – Dec 2024',
    location: 'Remote',
    type: 'Internship',
    logo: '/assets/accretive-logo.png', 
    companyUrl: 'https://accretivetech.com',
    certificateUrl: 'https://drive.google.com/file/d/1iwxlmjkHzXEbhZBCqCgTcUS6s2WaoIa1/view?usp=sharing',
    responsibilities: [
      'Contributed to building 2 RESTful APIs for internal service modules.',
      'Worked on backend logic for basic CRUD operations on a MongoDB database with 500 records.',
      'Wrote and reviewed 300+ lines of Node.js/Express code in a collaborative Git workflow.'
    ],
    skills: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs']
  }
];

const ExperienceCard = ({ experience, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <motion.div 
      className="bg-white dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true }}
    >
      <div className="p-6 border-b border-gray-100 dark:border-gray-600">
        <div className="flex items-start">
          <div className="w-12 h-12 bg-gray-100 dark:bg-gray-600 rounded-lg flex items-center justify-center mr-4 overflow-hidden">
            {experience.logo ? (
              <img src={experience.logo} alt={`${experience.company} logo`} className="w-10 h-10 object-contain" />
            ) : (
              <FaBuilding className="text-blue-500 text-2xl" />
            )}
          </div>
          
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white">{experience.role}</h3>
            <div className="flex flex-wrap items-center mt-1">
              <a 
                href={experience.companyUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
              >
                {experience.company}
              </a>
              <span className="mx-2 text-gray-400">•</span>
              <span className="text-gray-600 dark:text-gray-300">{experience.type}</span>
            </div>
            
            <div className="flex flex-wrap items-center mt-2 text-sm text-gray-500 dark:text-gray-400">
              <div className="flex items-center mr-4">
                <FaCalendarAlt className="mr-1" />
                <span>{experience.period}</span>
              </div>
              <div className="flex items-center">
                <FaBriefcase className="mr-1" />
                <span>{experience.location}</span>
              </div>
              {experience.certificateUrl && (
                <div className="ml-4">
                  <a 
                    href={experience.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline flex items-center"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    View Certificate
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      <div className="px-6 py-4">
        <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-3">Key Responsibilities:</h4>
        <ul className="space-y-2 text-gray-600 dark:text-gray-400">
          {experience.responsibilities.slice(0, isExpanded ? experience.responsibilities.length : 2).map((resp, i) => (
            <motion.li 
              key={i} 
              className="flex items-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.1 }}
            >
              <span className="inline-block w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-2"></span>
              <span>{resp}</span>
            </motion.li>
          ))}
        </ul>
        
        {experience.responsibilities.length > 2 && (
          <motion.button
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-3 text-blue-600 dark:text-blue-400 font-medium flex items-center hover:underline"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            {isExpanded ? (
              <>
                <span>Show Less</span>
                <FaChevronUp className="ml-1" />
              </>
            ) : (
              <>
                <span>Show More</span>
                <FaChevronDown className="ml-1" />
              </>
            )}
          </motion.button>
        )}
      </div>
      
      <div className="px-6 pb-6">
        <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-3">Skills:</h4>
        <div className="flex flex-wrap gap-2">
          {experience.skills.map((skill, i) => (
            <motion.span 
              key={i}
              className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 bg-gradient-to-b from-gray-100 to-white dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-200">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">Work Experience</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My professional journey and the valuable experience I've gained along the way.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 gap-8">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} index={index} />
          ))}
        </div>
        
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-600 dark:text-gray-400">
            Interested in my qualifications? Check out my full resume for more details.
          </p>
          <motion.a 
            href="/assets/Devansh_Sharma_Resume.pdf" 
            download
            className="inline-flex items-center gap-2 mt-4 px-6 py-3 bg-gray-800 hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600 text-white rounded-lg font-medium transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download Full Resume
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
