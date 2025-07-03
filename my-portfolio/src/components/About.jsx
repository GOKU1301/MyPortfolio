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
    year: 'Expected: May 2026',
    title: 'B.Tech in Computer Science',
    company: 'Jaypee Institute of Information Technology',
    description: '',
    icon: <FaGraduationCap />
  },
  {
    year: 'May 2025 – Present',
    title: 'Senior Mentor',
    company: 'SaarthiPath',
    description: 'Mentoring college freshers by guiding them through their learning journey, helping them build strong foundations in Data Structures & Algorithms (DSA) and assisting with common challenges in the MERN stack.',
    icon: <FaChalkboardTeacher />
  },
  {
    year: 'Oct 2024 – Dec 2024',
    title: 'Web Development Intern',
    company: 'Accretive Technologies',
    description: 'Contributed to building an internal intern management tool with modules for task tracking, profile management, and feedback. Developed backend APIs using Express.js and MongoDB in a collaborative Git workflow.',
    icon: <FaLaptopCode />
  }
];

  const skills = [
    { category: 'Frontend', items: ['React.js', 'Next.js', 'HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS'] },
    { category: 'Backend', items: ['TypeScript','Node.js', 'Express.js', 'MongoDB', 'MySQL', 'Firebase', 'REST APIs'] },
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
  Hey! I am Devansh, Currently in my final year pursuing B.Tech from Jaypee Institute of Information Technology. I love solving real-world problems by building impactful projects. Currently in the process of learning GenAI and how I can mix it with the MERN stack to build cool stuff!! Parallely, I am a senior mentor at SaarthiPath where I try to guide college freshers in their journey and solve their DSA and MERN stack queries.  Feel free to explore my portfolio :)
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
              My academic path began at St. Peter’s College, Agra, where I completed my schooling with 97.5% in the ISC Science stream.</motion.p>
<motion.p className="mb-4 text-gray-600 dark:text-gray-300">
Along the way, I discovered a passion for building impactful projects and working with MERN stack to build scalable applications. During my internship at Accretive Technologies, I gained hands-on experience in developing internal RESTful APIs and backend logic with Node.js, Express, and MongoDB.
</motion.p>
<motion.p className="mb-4 text-gray-600 dark:text-gray-300">
Alongside that, I’ve solved over 1000+ DSA problems, constantly refining my problem-solving skills. As a Senior Mentor at SaarthiPath, I now help college freshers do the same — guiding them through programming fundamentals, DSA, and full-stack development.</motion.p>
<motion.p className="mb-4 text-gray-600 dark:text-gray-300">
Today, I’m exploring the world of Generative AI, combining it with full-stack development to create solutions that are not just functional, but intelligent.
</motion.p>
<motion.p className="text-gray-600 dark:text-gray-300">
When I’m not coding, I’m either trying to beat my personal record at the gym, pretending to be Messi, ABD,and LeBron all in one weekend,  getting lost in Elden Ring (yes, the video game), or riding my bike or doing anything that keeps the adrenaline flowing.
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
          
        </motion.div>
      </div>
    </section>
  );
};

export default About;
