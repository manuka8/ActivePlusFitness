import React from 'react';
import { motion } from 'framer-motion';
import { FaDumbbell, FaHeartbeat, FaUserFriends, FaTrophy, FaArrowRight } from 'react-icons/fa';
import teamImg from '../assets/team.png';

const features = [
  {
    icon: <FaUserFriends size={32} />,
    title: "Professional Trainers",
    description: "Our certified coaches will guide you through personalized workouts to help you achieve your goals safely and effectively.",
    color: "from-blue-500 to-cyan-400"
  },
  {
    icon: <FaDumbbell size={32} />,
    title: "Modern Equipment",
    description: "Train with the latest, state-of-the-art fitness machines and free weights in a spacious, clean environment.",
    color: "from-primary to-yellow-500"
  },
  {
    icon: <FaHeartbeat size={32} />,
    title: "Personalized Plans",
    description: "Get customized nutrition and training programs tailored specifically to your body type and fitness objectives.",
    color: "from-red-500 to-pink-500"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  }
};

const AboutSection = () => {
  return (
    <section id="about" className="relative py-24 bg-white dark:bg-dark-card transition-colors duration-500 overflow-hidden">
      
      {/* Background Animated Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden opacity-30">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-primary blur-[120px] rounded-full"
        />
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [0, -90, 0],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-[10%] -right-[10%] w-[50%] h-[50%] bg-primary blur-[150px] rounded-full"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h4 className="text-primary font-bold tracking-[0.2em] uppercase text-sm mb-4">Our Legacy</h4>
              <h2 className="text-4xl md:text-5xl font-black text-light-text dark:text-white tracking-tighter leading-tight">
                We are more than a gym. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-600">We are a community.</span>
              </h2>
            </motion.div>
          </div>
          <div className="lg:max-w-sm">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed"
            >
              ActivePlus Fitness was built on the foundation of grit, passion, and the relentless pursuit of excellence. Join the tribe of world-changers.
            </motion.p>
          </div>
        </div>

        {/* Features Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="relative bg-gray-50/50 dark:bg-slate-800/50 backdrop-blur-sm p-10 rounded-3xl border border-gray-100 dark:border-slate-700/50 overflow-hidden group shadow-sm hover:shadow-2xl transition-all duration-500"
            >
              {/* Card Background Glow on Hover */}
              <div className={`absolute -right-20 -top-20 w-40 h-40 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-20 blur-[50px] transition-opacity duration-500`} />
              
              <div className={`w-20 h-20 bg-gradient-to-br ${feature.color} text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-primary/20 rotate-3 group-hover:rotate-0 transition-transform duration-500`}>
                {feature.icon}
              </div>
              
              <h3 className="text-2xl font-black text-light-text dark:text-white mb-4 group-hover:text-primary transition-colors duration-300">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8 flex-grow">
                {feature.description}
              </p>

              <div className="flex items-center text-primary font-bold text-sm tracking-wider uppercase group-cursor-pointer">
                <span>Learn More</span>
                <FaArrowRight className="ml-2 transform group-hover:translate-x-2 transition-transform duration-300" />
              </div>

              {/* Decorative Number */}
              <span className="absolute -bottom-10 -right-5 text-8xl font-black text-primary/5 dark:text-white/5 select-none transition-all duration-700 group-hover:-translate-y-5">
                0{index + 1}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Live Achievement Bar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative group p-10 rounded-[40px] overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10 shadow-2xl shadow-primary/40"
        >
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <img 
              src={teamImg} 
              alt="Our Team" 
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110" 
            />
            <div className="absolute inset-0 bg-primary/75 mix-blend-multiply transition-colors duration-500 group-hover:bg-primary/70" />
          </div>

          <div className="flex items-center gap-6 relative z-10">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center flex-shrink-0">
               <FaTrophy size={30} className="text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-black leading-tight text-white">Elite Fitness Excellence</h3>
              <p className="text-white/80 font-medium tracking-wide">Rated #1 Transformation Gym in New York City</p>
            </div>
          </div>
          
          <div className="flex items-center gap-10 relative z-10 text-white">
             <div className="text-center">
                <div className="text-4xl font-black italic tabular-nums leading-none">98%</div>
                <div className="text-[10px] font-bold uppercase tracking-[0.2em] mt-2 opacity-70">Success Rate</div>
             </div>
             <div className="h-10 w-[1px] bg-white/20 hidden sm:block" />
             <div className="text-center">
                <a 
                  href="#contact" 
                  className="px-8 py-4 bg-white text-primary font-black rounded-full hover:bg-gray-100 transition-all hover:scale-105 shadow-xl block"
                >
                  Join the Tribe
                </a>
             </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutSection;
