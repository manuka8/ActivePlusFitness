import React, { useEffect } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import char1 from '../assets/character1.png';
import { FaHeartbeat, FaFire, FaClock, FaRunning, FaDumbbell } from 'react-icons/fa';

const Counter = ({ from, to, suffix }) => {
    const count = useMotionValue(from);
    const rounded = useTransform(count, (latest) => Math.round(latest));

    useEffect(() => {
        const controls = animate(count, to, { duration: 2, ease: "easeOut" });
        return controls.stop;
    }, [count, to]);

    return (
        <span className="inline-flex items-center">
            <motion.span>{rounded}</motion.span>{suffix}
        </span>
    );
};

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
            className="relative h-screen flex items-center justify-center pt-16 sm:pt-20 overflow-hidden bg-light-bg dark:bg-dark-bg transition-colors duration-300"
        >
            {/* Background Effects */}


            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">

                    {/* Left Side - Content */}
                    <div className="order-2 lg:order-1 space-y-3 sm:space-y-6 text-center lg:text-left">
                        {/* Badge */}
                        <div className="inline-block mb-2">
                            <span className="px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-semibold border border-primary/30">
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
                                className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.1] tracking-tight text-light-text dark:text-white"
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
                                <span className="block overflow-hidden mt-1 sm:mt-2">
                                    <motion.span
                                        initial={{ y: "100%" }}
                                        animate={{ y: "0%" }}
                                        transition={{ delay: 0.3, duration: 0.8 }}
                                        className="inline-block text-transparent bg-clip-text bg-[length:200%_auto] animate-gradient bg-gradient-to-r from-primary via-yellow-400 to-primary pb-2"
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
                        <p className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                            <span className="text-primary font-semibold">Train with experts,</span>{" "}
                            push your limits, and transform your lifestyle at ActivePlus Fitness.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start pt-2" style={{ marginBottom: "0px" }}>
                            <a
                                href="#contact"
                                className="px-6 sm:px-8 py-3 sm:py-4 bg-primary text-white font-bold text-sm sm:text-base rounded-xl shadow-2xl shadow-primary/30 hover:bg-yellow-500 transition-colors duration-300"
                            >
                                Join Now
                            </a>

                            <a
                                href="#services"
                                className="px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-primary text-primary dark:text-white font-bold text-sm sm:text-base rounded-xl hover:bg-primary/10 transition-all duration-300"
                            >
                                Get Started
                            </a>
                        </div>

                        {/* Stats Section */}
                        <div className="flex flex-wrap justify-center lg:justify-start gap-6 sm:gap-10 pt-4 sm:pt-6">
                            {[
                                { value: 5000, suffix: "+", label: "Active Members", icon: "👥" },
                                { value: 50, suffix: "+", label: "Expert Trainers", icon: "💪" },
                                { value: 15, suffix: "+", label: "Years Experience", icon: "⭐" }
                            ].map((stat, index) => (
                                <div key={index} className="text-center">
                                    <span className="text-xl sm:text-2xl mb-1 block">{stat.icon}</span>
                                    <div className="text-2xl sm:text-3xl font-black text-primary">
                                        <Counter from={0} to={stat.value} suffix={stat.suffix} />
                                    </div>
                                    <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side - Static Character */}
                    <div className="order-1 lg:order-2 relative h-[250px] sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[550px] w-full flex items-center justify-center mb-6 lg:mb-0">

                        {/* Static Background Ring */}
                        <div className="absolute inset-0 m-auto w-[180px] h-[180px] sm:w-[250px] sm:h-[250px] md:w-[320px] md:h-[320px] lg:w-[380px] lg:h-[380px] xl:w-[450px] xl:h-[450px] rounded-full border border-primary/20 dark:border-primary/10" />

                        <div className="absolute inset-0 m-auto w-[220px] h-[220px] sm:w-[300px] sm:h-[300px] md:w-[380px] md:h-[380px] lg:w-[440px] lg:h-[440px] xl:w-[500px] xl:h-[500px] rounded-full border-2 border-primary/40 dark:border-primary/30 shadow-[0_0_40px_rgba(213,163,16,0.3)]" />

                        {/* Static Character Image */}
                        <div className="absolute inset-0 flex items-center justify-center z-10">
                            <img
                                src={char1}
                                alt="Fitness Character"
                                className="max-h-[220px] sm:max-h-[300px] md:max-h-[380px] lg:max-h-[440px] xl:max-h-[550px] w-auto object-contain filter drop-shadow-2xl"
                            />
                        </div>

                        {/* Floating Cards */}
                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 lg:-top-8 lg:-right-8 bg-white/10 backdrop-blur-md p-2.5 sm:p-4 rounded-xl sm:rounded-2xl border border-white/20 shadow-xl z-20 flex items-center gap-2 sm:gap-3"
                        >
                            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-red-500/20 text-red-500 rounded-lg flex items-center justify-center">
                                <FaHeartbeat className="text-sm sm:text-xl" />
                            </div>
                            <div className="text-left">
                                <div className="text-[10px] sm:text-xs text-gray-400 font-medium">BPM</div>
                                <div className="text-sm sm:text-lg font-bold text-gray-500 dark:text-white leading-tight">142</div>
                            </div>
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, 20, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                            className="absolute bottom-4 -left-2 sm:bottom-10 sm:-left-6 lg:bottom-20 lg:-left-12 bg-white/10 backdrop-blur-md p-2.5 sm:p-4 rounded-xl sm:rounded-2xl border border-white/20 shadow-xl z-20 flex items-center gap-2 sm:gap-3"
                        >
                            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-orange-500/20 text-orange-500 rounded-lg flex items-center justify-center">
                                <FaFire className="text-sm sm:text-xl" />
                            </div>
                            <div className="text-left">
                                <div className="text-[10px] sm:text-xs text-gray-400 font-medium">Calories</div>
                                <div className="text-sm sm:text-lg font-bold text-gray-500 dark:text-white leading-tight">850 kcal</div>
                            </div>
                        </motion.div>

                        <motion.div
                            animate={{ x: [0, 15, 0] }}
                            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute top-1/2 -right-8 sm:-right-12 bg-white/10 backdrop-blur-md p-2.5 sm:p-4 rounded-xl sm:rounded-2xl border border-white/20 shadow-xl z-20 flex items-center gap-2 sm:gap-3 lg:flex hidden"
                        >
                            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-500/20 text-blue-500 rounded-lg flex items-center justify-center">
                                <FaClock className="text-sm sm:text-xl" />
                            </div>
                            <div className="text-left">
                                <div className="text-[10px] sm:text-xs text-gray-400 font-medium">Time</div>
                                <div className="text-sm sm:text-lg font-bold text-gray-500 dark:text-white leading-tight">45:12</div>
                            </div>
                        </motion.div>

                        <motion.div
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute bottom-0 right-0 sm:bottom-0 sm:-right-0 lg:bottom-4 lg:-right-4 bg-white/10 backdrop-blur-md p-2.5 sm:p-4 rounded-xl sm:rounded-2xl border border-white/20 shadow-xl z-20 flex items-center gap-2 sm:gap-3"
                        >
                            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary/20 text-primary rounded-lg flex items-center justify-center">
                                <FaRunning className="text-sm sm:text-xl" />
                            </div>
                            <div className="text-left">
                                <div className="text-[10px] sm:text-xs text-gray-400 font-medium">Steps</div>
                                <div className="text-sm sm:text-lg font-bold text-gray-500 dark:text-white leading-tight">12,400</div>
                            </div>
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, -20, 0]}}
                            transition={{ duration: 4, repeat: Infinity }}
                            whileHover={{ scale: 1.08 }}
                            className="absolute top-4 left-2 sm:top-10 sm:left-5 bg-white/10 backdrop-blur-md p-2.5 sm:p-4 rounded-xl sm:rounded-2xl border border-white/20 shadow-xl flex items-center gap-2 sm:gap-3"
                        >
                            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-500/20 text-green-500 rounded-lg flex items-center justify-center">
                                <FaDumbbell className="text-sm sm:text-xl" />
                            </div>
                            <div>
                                <div className="text-[10px] sm:text-xs text-gray-400">Strength</div>
                                <div className="text-sm sm:text-lg font-bold text-gray-500 dark:text-white">Upper Body</div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;