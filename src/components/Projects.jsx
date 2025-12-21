import React, { useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';

const TiltCard = ({ children, className }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
    const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

    function onMouseMove({ currentTarget, clientX, clientY }) {
        const { left, top, width, height } = currentTarget.getBoundingClientRect();
        x.set(clientX - left - width / 2);
        y.set(clientY - top - height / 2);
    }

    const rotateX = useMotionTemplate`${mouseY}deg`;
    const rotateY = useMotionTemplate`${mouseX}deg`;

    return (
        <motion.div
            className={className}
            onMouseMove={onMouseMove}
            onMouseLeave={() => {
                x.set(0);
                y.set(0);
            }}
            style={{
                transformStyle: "preserve-3d",
                transform: useMotionTemplate`perspective(1000px) rotateX(${rotateX}) rotateY(${rotateY})`
            }}
        >
            {children}
        </motion.div>
    );
};

const Projects = () => {
    const projects = [
        {
            title: "Real-time Chat App",
            desc: "WebSockets powered chat application with instant messaging and user presence.",
            tags: ["Node.js", "Socket.io", "React"],
            link: "#",
            github: "#"
        },
        {
            title: "Admin Dashboard",
            desc: "Comprehensive analytics dashboard with data visualization and dark mode.",
            tags: ["React", "Recharts", "MUI"],
            link: "#",
            github: "#"
        },
        {
            title: "3D Room Designer",
            desc: "Interactive interior design tool using Three.js for placing furniture in 3D.",
            tags: ["Three.js", "R3F", "WebGL"],
            link: "#",
            github: "#"
        },
        {
            title: "Crux Wellness Tracker",
            desc: "Mental wellness tracking platform for university students with risk analysis.",
            tags: ["Full Stack", "MongoDB", "Charts"],
            link: "#",
            github: "#"
        }
    ];

    return (
        <section className="section" id="projects">
            <div className="container">
                <h2 className="title-large" style={{ fontSize: '3rem', marginBottom: '4rem' }}>Selected Work</h2>

                <div className="grid grid-cols-2 gap-8" style={{ gap: '2rem' }}>
                    {projects.map((project, i) => (
                        <div key={i} className="project-wrapper">
                            {/* 
                 Note: We are not using the TiltCard heavily here to avoid bugs with layout flow,
                 but normally you'd wrap content. For now let's stick to CSS hover effects for stability 
                 unless user specifically asks for tilt physics. 
                 
                 Let's add a simple Hover Scale animation instead with Framer Motion.
               */}
                            <motion.div
                                className="project-card"
                                whileHover={{ y: -10, transition: { duration: 0.2 } }}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <div className="flex justify-between items-center mb-4">
                                    <h3 className="project-title">{project.title}</h3>
                                    <div className="flex gap-2 text-gray-400">
                                        <a href={project.github} className="hover:text-white"><Github size={18} /></a>
                                        <a href={project.link} className="hover:text-white"><ExternalLink size={18} /></a>
                                    </div>
                                </div>
                                <p className="project-desc">{project.desc}</p>
                                <div className="tech-tags">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="tech-tag">{tag}</span>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
