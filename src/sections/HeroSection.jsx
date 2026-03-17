import React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import char1 from '../assets/character1.png';
import { FaHeartbeat, FaFire, FaClock, FaRunning } from 'react-icons/fa';





const HeroSection = () => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const rotateX = useTransform(y, [-100, 100], [10, -10]);
    const rotateY = useTransform(x, [-100, 100], [-10, 10]);

    function handleMouseMove(e) {
        const rect = e.currentTarget.getBoundingClientRect();
        x.set(e.clientX - rect.left - rect.width / 2);
        y.set(e.clientY - rect.top - rect.height / 2);
    }
    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center pt-20 sm:pt-24 overflow-hidden bg-light-bg dark:bg-dark-bg transition-colors duration-300"
        >
            {/* Background Effects */}


            <div className="max-w-7xl pt-10 mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

                    {/* Left Side - Content */}
                    <div className="order-2 lg:order-1 space-y-6 sm:space-y-8 text-center lg:text-left">
                        {/* Badge */}
                        <div className="inline-block mb-4">
                            <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold border border-primary/30">
                                ⚡ EXPRESS FITNESS
                            </span>
                        </div>

                        {/* Headline */}
                        <motion.div
                            onMouseMove={handleMouseMove}
                            style={{ perspective: 1000 }}
                            className="inline-block"
                        >
                            <motion.h1
                                style={{ rotateX, rotateY }}
                                initial={{ opacity: 0, filter: "blur(20px)", y: 80 }}
                                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                                transition={{ duration: 1.2, ease: "easeOut" }}
                                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight text-light-text dark:text-white"
                            >
                                {/* Mask Reveal Effect */}
                                <span className="block overflow-hidden">
                                    <motion.span
                                        initial={{ y: "100%" }}
                                        animate={{ y: "0%" }}
                                        transition={{ duration: 0.8 }}
                                        className="inline-block"
                                    >
                                        Build Your
                                    </motion.span>
                                </span>

                                {/* Animated Gradient + Glow */}
                                <span className="block overflow-hidden mt-2">
                                    <motion.span
                                        initial={{ y: "100%" }}
                                        animate={{ y: "0%" }}
                                        transition={{ delay: 0.3, duration: 0.8 }}
                                        className="inline-block text-transparent bg-clip-text bg-[length:200%_auto] animate-gradient bg-gradient-to-r from-primary via-yellow-400 to-primary"
                                    >
                                        Ultimate Physique
                                    </motion.span>
                                </span>

                                {/* Glow Pulse Layer */}
                                <motion.span
                                    className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-primary via-yellow-400 to-primary blur-xl opacity-40"
                                    animate={{
                                        opacity: [0.2, 0.6, 0.2],
                                        scale: [1, 1.05, 1],
                                    }}
                                    transition={{
                                        duration: 2.5,
                                        repeat: Infinity,
                                    }}
                                >
                                    Ultimate Physique
                                </motion.span>
                            </motion.h1>
                        </motion.div>

                        {/* Description */}
                        <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                            <span className="text-primary font-semibold">Train with experts,</span>{" "}
                            push your limits, and transform your lifestyle at ActivePlus Fitness.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center lg:justify-start pt-2 sm:pt-4">
                            <a
                                href="#contact"
                                className="px-8 sm:px-10 py-4 sm:py-5 bg-primary text-white font-bold text-base sm:text-lg rounded-xl shadow-2xl shadow-primary/30 hover:bg-yellow-500 transition-colors duration-300"
                            >
                                Join Now
                            </a>

                            <a
                                href="#services"
                                className="px-8 sm:px-10 py-4 sm:py-5 bg-transparent border-2 border-primary text-primary dark:text-white font-bold text-base sm:text-lg rounded-xl hover:bg-primary/10 transition-all duration-300"
                            >
                                Get Started
                            </a>
                        </div>

                        {/* Stats Section */}
                        <div className="flex flex-wrap justify-center lg:justify-start gap-8 sm:gap-12 pt-5 sm:pt-10">
                            {[
                                { value: "5000+", label: "Active Members", icon: "👥" },
                                { value: "50+", label: "Expert Trainers", icon: "💪" },
                                { value: "15+", label: "Years Experience", icon: "⭐" }
                            ].map((stat, index) => (
                                <div key={index} className="text-center">
                                    <span className="text-2xl sm:text-3xl mb-1 block">{stat.icon}</span>
                                    <div className="text-2xl sm:text-3xl font-black text-primary">{stat.value}</div>
                                    <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side - Static Character */}
                    <div className="order-1 lg:order-2 relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] w-full flex items-center justify-center mb-8 lg:mb-0">

                        {/* Static Background Ring */}
                        <div className="absolute inset-0 m-auto w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] lg:w-[450px] lg:h-[450px] rounded-full border border-primary/20 dark:border-primary/10" />

                        <div className="absolute inset-0 m-auto w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px] rounded-full border-2 border-primary/40 dark:border-primary/30 shadow-[0_0_40px_rgba(213,163,16,0.3)]" />

                        {/* Static Character Image */}
                        <div className="absolute inset-0 flex items-center justify-center z-10">
                            <img
                                src={char1}
                                alt="Fitness Character"
                                className="max-h-[250px] sm:max-h-[350px] md:max-h-[450px] lg:max-h-[550px] w-auto object-contain filter drop-shadow-2xl"
                            />
                        </div>

                        {/* Floating Cards */}
                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-4 -right-4 sm:-top-8 sm:-right-8 bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20 shadow-xl z-20 flex items-center gap-3"
                        >
                            <div className="w-10 h-10 bg-red-500/20 text-red-500 rounded-lg flex items-center justify-center">
                                <FaHeartbeat size={20} />
                            </div>
                            <div className="text-left">
                                <div className="text-xs text-gray-400 font-medium">BPM</div>
                                <div className="text-lg font-bold text-white leading-tight">142</div>
                            </div>
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, 20, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                            className="absolute bottom-10 -left-6 sm:bottom-20 sm:-left-12 bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20 shadow-xl z-20 flex items-center gap-3"
                        >
                            <div className="w-10 h-10 bg-orange-500/20 text-orange-500 rounded-lg flex items-center justify-center">
                                <FaFire size={20} />
                            </div>
                            <div className="text-left">
                                <div className="text-xs text-gray-400 font-medium">Calories</div>
                                <div className="text-lg font-bold text-white leading-tight">850 kcal</div>
                            </div>
                        </motion.div>

                        <motion.div
                            animate={{ x: [0, 15, 0] }}
                            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute top-1/2 -right-10 sm:-right-16 bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20 shadow-xl z-20 flex items-center gap-3 lg:flex hidden"
                        >
                            <div className="w-10 h-10 bg-blue-500/20 text-blue-500 rounded-lg flex items-center justify-center">
                                <FaClock size={20} />
                            </div>
                            <div className="text-left">
                                <div className="text-xs text-gray-400 font-medium">Time</div>
                                <div className="text-lg font-bold text-white leading-tight">45:12</div>
                            </div>
                        </motion.div>

                        <motion.div
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute bottom-0 right-0 sm:bottom-4 sm:-right-4 bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20 shadow-xl z-20 flex items-center gap-3"
                        >
                            <div className="w-10 h-10 bg-primary/20 text-primary rounded-lg flex items-center justify-center">
                                <FaRunning size={20} />
                            </div>
                            <div className="text-left">
                                <div className="text-xs text-gray-400 font-medium">Steps</div>
                                <div className="text-lg font-bold text-white leading-tight">12,400</div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;