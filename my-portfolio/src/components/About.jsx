import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaLaptopCode, FaChalkboardTeacher, FaCode } from 'react-icons/fa';

const About = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 } 
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const timelineItems = [
    {
      year: '2023 - Present',
      title: 'Senior Mentor',
      company: 'SaarthiPath',
      description: 'Guiding students in Data Structures and Algorithms, conducting mock interviews, and providing career guidance.',
      icon: <FaChalkboardTeacher />
    },
    {
      year: '2022 - 2023',
      title: 'Web Development Intern',
      company: 'Accretive Technologies',
      description: 'Developed full-stack web applications using React.js, Node.js, and MongoDB. Implemented responsive designs and RESTful APIs.',
      icon: <FaLaptopCode />
    },
    {
      year: '2021 - 2025',
      title: 'B.Tech in Computer Science',
      company: 'Jaypee Institute of Information Technology',
      description: 'Focusing on web development, data structures, algorithms, and software engineering principles.',
      icon: <FaGraduationCap />
    }
  ];

  const skills = [
    { category: 'Frontend', items: ['React.js', 'Next.js', 'HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'Tailwind CSS'] },
    { category: 'Backend', items: ['Node.js', 'Express.js', 'MongoDB', 'MySQL', 'Firebase', 'REST APIs'] },
    { category: 'Tools & Others', items: ['Git', 'GitHub', 'VS Code', 'AWS S3', 'Vercel', 'Railway'] }
  ];

  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-b from-white to-gray-100 dark:from-gray-800 dark:to-gray-900 text-gray-800 dark:text-gray-200">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">About Me</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I'm Devansh Sharma, a Computer Science student at Jaypee Institute of Information Technology (GPA: 7.6/10, expected May 2026). Passionate about web development, DSA, and mentoring, I have experience as a Senior Mentor at SaarthiPath and as a Web Development Intern at Accretive Technologies. I love building impactful products, competitive programming, and have solved 1000+ DSA problems across major platforms.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Bio Section */}
          <motion.div
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeIn}>
              <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white flex items-center">
                <FaCode className="mr-2 text-blue-500" /> My Journey
              </h3>
              <motion.p className="mb-4 text-gray-600 dark:text-gray-300">
                I'm Devansh Sharma, a Computer Science student at Jaypee Institute of Information Technology with a passion for web development and mentoring. I specialize in the MERN stack and enjoy building applications that solve real-world problems.
              </motion.p>
              <motion.p className="mb-4 text-gray-600 dark:text-gray-300">
                Currently, I'm working as a Senior Mentor at SaarthiPath, where I guide students in Data Structures and Algorithms. I've also interned at Accretive Technologies as a Web Development Intern, where I contributed to building robust web applications.
              </motion.p>
              <motion.p className="text-gray-600 dark:text-gray-300">
                When I'm not coding, I enjoy solving complex algorithmic problems, participating in hackathons, and exploring new technologies to expand my skill set.
              </motion.p>
            </motion.div>
            
            <motion.div variants={fadeIn} className="mt-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Technical Skills</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {skills.map((skillGroup, index) => (
                  <div key={index} className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md">
                    <h4 className="font-bold text-blue-600 dark:text-blue-400 mb-3">{skillGroup.category}</h4>
                    <ul className="space-y-2">
                      {skillGroup.items.map((skill, idx) => (
                        <li key={idx} className="flex items-center">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                          <span>{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Timeline Section */}
          <motion.div
            className="relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-blue-200 dark:bg-blue-900"></div>
            
            {timelineItems.map((item, index) => (
              <motion.div 
                key={index} 
                className="mb-12 relative pl-12"
                variants={fadeIn}
              >
                <div className="absolute left-0 top-0 bg-blue-500 text-white p-2 rounded-full">
                  {item.icon}
                </div>
                <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">{item.year}</span>
                  <h3 className="text-xl font-bold mt-1 mb-1">{item.title}</h3>
                  <h4 className="text-gray-600 dark:text-gray-300 font-medium mb-2">{item.company}</h4>
                  <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.a 
            href="/assets/Devansh_Sharma_Resume.pdf" 
            download
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download Resume
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
