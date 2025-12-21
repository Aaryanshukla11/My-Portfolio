import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
    return (
        <section className="section" id="home" style={{ display: 'flex', alignItems: 'center', height: '100vh' }}>
            <div className="container">
                <div className="hero-content">

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="badge">Portfolio Demo</span>
                    </motion.div>

                    <motion.h1
                        className="title-large"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Aryan <br />
                        <motion.span
                            style={{ color: '#3B82F6', display: 'inline-block' }}
                            animate={{ filter: ['hue-rotate(0deg)', 'hue-rotate(90deg)', 'hue-rotate(0deg)'] }}
                            transition={{ duration: 5, repeat: Infinity }}
                        >
                            Kumar
                        </motion.span>
                    </motion.h1>

                    <motion.p
                        className="subtitle"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        Full-Stack Developer & AI Engineer. <br />
                        Crafting immersive digital experiences.
                    </motion.p>

                    <motion.div
                        className="btn-group"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <a href="#projects" className="btn btn-primary">
                            View Projects
                            <ArrowRight size={16} />
                        </a>
                        <a href="/resume.pdf" className="btn">
                            Resume
                            <Download size={16} />
                        </a>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
