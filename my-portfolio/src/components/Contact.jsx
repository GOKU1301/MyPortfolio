import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [emailStatus, setEmailStatus] = useState(null); // 'success', 'error', or null
  
  useEffect(() => {
    // Initialize EmailJS with your user ID
    emailjs.init("q5Z9gPD6kKsTVd895");
  }, []);
  
  const validateForm = () => {
    const newErrors = {};
    
    if (!formState.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formState.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formState.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formState.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [id]: value
    }));
    
    // Clear error when user starts typing
    if (errors[id]) {
      setErrors(prev => ({
        ...prev,
        [id]: ''
      }));
    }
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Prepare template parameters
      const templateParams = {
        from_name: formState.name,
        from_email: formState.email,
        message: formState.message,
        to_name: 'Devansh Sharma', // Your name
        reply_to: formState.email
      };
      
      // Send the email using EmailJS
      emailjs.send(
        'service_ief7rrb',
        'template_xvy8ygd',
        templateParams
      )
      .then((response) => {
        console.log('Email sent successfully:', response);
        setIsSubmitting(false);
        setIsSubmitted(true);
        setEmailStatus('success');
        setFormState({ name: '', email: '', message: '' });
        
        // Reset submission status after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
          setEmailStatus(null);
        }, 5000);
      })
      .catch((error) => {
        console.error('Email sending failed:', error);
        setIsSubmitting(false);
        setEmailStatus('error');
      });
    }
  };
  
  const contactInfo = [
    { 
      icon: <FaEnvelope />, 
      label: 'Email', 
      value: 'debu1301@gmail.com', 
      link: 'mailto:debu1301@gmail.com' 
    },
    { 
      icon: <FaLinkedin />, 
      label: 'LinkedIn', 
      value: 'linkedin.com/in/sharmadevansh1301', 
      link: 'https://www.linkedin.com/in/sharmadevansh1301/' 
    },
    { 
      icon: <FaGithub />, 
      label: 'GitHub', 
      value: 'github.com/GOKU1301', 
      link: 'https://github.com/GOKU1301' 
    },
    { 
      icon: <FaMapMarkerAlt />, 
      label: 'Location', 
      value: 'Noida, India', 
      link: null 
    }
  ];
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-100 to-white dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-white">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">Get In Touch</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div 
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 h-fit"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h3 
              className="text-2xl font-bold mb-6 text-gray-800 dark:text-white"
              variants={itemVariants}
            >
              Contact Information
            </motion.h3>
            
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-start"
                  variants={itemVariants}
                >
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full text-blue-600 dark:text-blue-400 mr-4">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700 dark:text-gray-300">{item.label}</h4>
                    {item.link ? (
                      <a 
                        href={item.link} 
                        target={item.link.startsWith('mailto') ? '_self' : '_blank'} 
                        rel="noopener noreferrer"
                        className="text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-gray-600 dark:text-gray-400">{item.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              className="mt-8 bg-gradient-to-r from-blue-600 to-blue-400 p-6 rounded-xl text-white"
              variants={itemVariants}
            >
              <h4 className="font-semibold text-xl mb-2">Let's work together!</h4>
              <p>I'm currently available for freelance work and full-time positions.</p>
            </motion.div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div 
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Send Me a Message</h3>
            
            {isSubmitted ? (
              <motion.div 
                className="bg-green-100 dark:bg-green-900/30 p-6 rounded-xl text-green-700 dark:text-green-300 flex items-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: 'spring', stiffness: 100 }}
              >
                <div className="bg-green-200 dark:bg-green-800 p-3 rounded-full mr-4">
                  <FaPaperPlane className="text-green-600 dark:text-green-300" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Message Sent!</h4>
                  <p>Thank you for reaching out. I'll get back to you soon.</p>
                </div>
              </motion.div>
            ) : emailStatus === 'error' ? (
              <motion.div 
                className="bg-red-100 dark:bg-red-900/30 p-6 rounded-xl text-red-700 dark:text-red-300 flex items-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: 'spring', stiffness: 100 }}
              >
                <div className="bg-red-200 dark:bg-red-800 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600 dark:text-red-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Message Failed to Send</h4>
                  <p>There was an error sending your message. Please try again or contact me directly at debu1301@gmail.com</p>
                </div>
              </motion.div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block mb-2 font-medium text-gray-700 dark:text-gray-300">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    value={formState.name}
                    onChange={handleChange}
                    className={`w-full p-3 rounded-lg bg-gray-50 dark:bg-gray-700 border ${errors.name ? 'border-red-500 dark:border-red-500' : 'border-gray-300 dark:border-gray-600'} focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition`} 
                  />
                  {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                </div>
                
                <div>
                  <label htmlFor="email" className="block mb-2 font-medium text-gray-700 dark:text-gray-300">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    value={formState.email}
                    onChange={handleChange}
                    className={`w-full p-3 rounded-lg bg-gray-50 dark:bg-gray-700 border ${errors.email ? 'border-red-500 dark:border-red-500' : 'border-gray-300 dark:border-gray-600'} focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition`} 
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                </div>
                
                <div>
                  <label htmlFor="message" className="block mb-2 font-medium text-gray-700 dark:text-gray-300">Message</label>
                  <textarea 
                    id="message" 
                    rows="5" 
                    value={formState.message}
                    onChange={handleChange}
                    className={`w-full p-3 rounded-lg bg-gray-50 dark:bg-gray-700 border ${errors.message ? 'border-red-500 dark:border-red-500' : 'border-gray-300 dark:border-gray-600'} focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition`}
                  ></textarea>
                  {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
                </div>
                
                <motion.button 
                  type="submit" 
                  className="px-8 py-3 bg-blue-600 rounded-lg text-white font-semibold hover:bg-blue-700 transition flex items-center justify-center gap-2 w-full md:w-auto"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
