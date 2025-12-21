import React, { useRef, useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';

const Skills = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(containerRef.current.querySelectorAll('.skill-pill'),
            { opacity: 0, scale: 0.9 },
            {
                opacity: 1,
                scale: 1,
                stagger: 0.05,
                duration: 0.5,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 80%',
                }
            }
        );
    }, []);

    const skills = {
        "Frontend": ["React", "Three.js", "GSAP", "JavaScript (ES6+)", "HTML5/CSS3", "TailwindCSS"],
        "Backend": ["Node.js", "Express", "Python", "MongoDB", "REST APIs", "GraphQL"],
        "AI & ML": ["TensorFlow", "PyTorch", "Scikit-learn", "OpenCV", "NLP", "Pandas"],
        "Tools": ["Git", "GitHub", "Docker", "AWS", "Vercel", "Netlify"]
    };

    return (
        <section className="section" id="skills">
            <div className="container" ref={containerRef}>
                <h2 className="title-large" style={{ fontSize: '3rem', marginBottom: '4rem' }}>Skills</h2>

                {Object.entries(skills).map(([category, items]) => (
                    <div key={category} className="skill-category">
                        <h3 className="skill-category-title">{category}</h3>
                        <div className="skill-list">
                            {items.map((skill) => (
                                <span key={skill} className="skill-pill">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
