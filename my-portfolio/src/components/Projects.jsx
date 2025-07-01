import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode } from 'react-icons/fa';

const projectsData = [
  {
    id: 1,
    title: 'jitNutrition',
    description: 'Nutrition tracking app for JIIT students. Integrated Nutritionix API, Gemini API for fallback, Pincone vector search, @xenova/transformers for food mapping, OCR for meal data, deployed via Vercel and Railway, MongoDB Atlas for scalable storage.',
    image: '/assets/jitnutrition.jpg',
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB Atlas', 'Pinecone', '@xenova/transformers', 'Gemini API', 'Vercel', 'Railway'],
    liveUrl: 'https://yourfitnesspal.vercel.app',
    githubUrl: 'https://github.com/GOKU1301/yourfitnesspal',
    features: [
      'Accurate food nutrient data using Nutritionix API with Gemini API fallback',
      'Vector search for 50+ local food names',
      'OCR to extract meal data from 90+ JIIT mess timetables',
      'Real-time storage and analytics using MongoDB Atlas and Railway'
    ]
  },
  {
    id: 2,
    title: 'jiitSimplified',
    description: 'Full-stack portal using Next.js, TypeScript, AWS S3, OAuth 2.0. REST APIs with Express.js, MySQL (Sequelize), AWS S3/Multer for uploads, Passport.js for sessions. Managed 500+ PYQs, 100+ PDF/Doc files, 30+ sessions.',
    image: '/assets/jiitsimplified.jpg',
    tags: ['Next.js', 'Node.js', 'Express.js', 'MySQL', 'TypeScript', 'AWS S3', 'OAuth 2.0'],
    liveUrl: 'https://jiitsimplified.web.app',
    githubUrl: 'https://github.com/GOKU1301/jiitSimplified',
    features: [
      'Upload and retrieve JIIT PYQs using Next.js and TypeScript',
      'REST APIs with Express.js and MySQL (Sequelize) for 500+ PYQs',
      'AWS S3 and Multer for upload/access of 100+ PDF/Doc files',
      'OAuth 2.0 with Passport.js, 30+ sessions'
    ]
  },
  {
    id: 3,
    title: 'EduChat',
    description: 'Real-time chat app using Express.js, Socket.IO, Firebase (Firestore & Auth), Render. Supported 10+ active chat rooms, 1,000+ messages, deployed on Render.',
    image: '/assets/educhat.jpg',
    tags: ['Node.js', 'Express.js', 'Socket.IO', 'Firebase', 'Render'],
    liveUrl: 'https://v0-dp-ortal.vercel.app',
    githubUrl: 'https://github.com/GOKU1301/dportal',
    features: [
      'Implemented real-time chat using Express.js and Socket.IO',
      'Supported 10+ active chat rooms and 1,000+ messages',
      'Used Firebase Firestore & Auth for user access and storage',
      'Deployed on Render for seamless cross-user communication'
    ]
  }
];

const ProjectCard = ({ project }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div 
      className="bg-white dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden h-full flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden">
        <motion.img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-56 object-cover"
          animate={{ scale: isHovered ? 1.05 : 1 }}
          transition={{ duration: 0.3 }}
        />
        <motion.div 
          className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex space-x-3">
            <motion.a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaExternalLinkAlt />
            </motion.a>
            <motion.a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 bg-gray-800 text-white rounded-full hover:bg-gray-900"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub />
            </motion.a>
          </div>
        </motion.div>
      </div>
      
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 flex-1">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, index) => (
            <span 
              key={index} 
              className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <motion.button 
          onClick={() => setShowDetails(!showDetails)}
          className="flex items-center justify-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          <FaCode />
          {showDetails ? 'Hide Details' : 'View Features'}
        </motion.button>
        
        {showDetails && (
          <motion.div 
            className="mt-4 bg-gray-50 dark:bg-gray-800 p-4 rounded-lg"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <h4 className="font-semibold mb-2 text-gray-700 dark:text-gray-300">Key Features:</h4>
            <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400">
              {project.features.map((feature, index) => (
                <li key={index} className="mb-1">{feature}</li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-100 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-800 dark:text-white">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">My Projects</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore my recent work and personal projects that showcase my skills and passion for development.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.a 
            href={`https://github.com/GOKU1301`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-900 text-white rounded-lg font-medium transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaGithub className="text-xl" />
            View More on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
