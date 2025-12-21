import React, { useRef, useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const el = sectionRef.current;

        gsap.fromTo(el.querySelectorAll('.timeline-item'),
            { opacity: 0, x: -20 },
            {
                opacity: 1,
                x: 0,
                stagger: 0.2,
                duration: 1,
                scrollTrigger: {
                    trigger: el,
                    start: 'top 70%',
                }
            }
        );
    }, []);

    const milestones = [
        {
            year: '2025',
            title: 'Machine Learning Engineer',
            desc: 'Developing advanced AI models at CyberDyne Systems.',
        },
        {
            year: '2024',
            title: 'AI Project Lead',
            desc: 'Led a team of 5 to build a predictive analytics platform during internship.',
        },
        {
            year: '2023',
            title: 'Python Developer Intern',
            desc: 'Optimized backend algorithms and data processing pipelines at AIThinkers.',
        },
        {
            year: '2022',
            title: 'BTech CSE (AI & ML)',
            desc: 'Started my journey into Computer Science and Artificial Intelligence.',
        },
    ];

    return (
        <section className="section" id="about" ref={sectionRef}>
            <div className="container">
                <div className="grid grid-cols-2 gap-8" style={{ alignItems: 'start' }}>
                    <div>
                        <h2 className="title-large" style={{ fontSize: '3rem' }}>About Me</h2>
                        <p className="subtitle">
                            Passionate about bridging the gap between complex AI systems and intuitive user interfaces.
                        </p>
                    </div>

                    <div className="timeline">
                        {milestones.map((item, i) => (
                            <div key={i} className="timeline-item">
                                <div className="timeline-date">{item.year}</div>
                                <h3 className="timeline-title">{item.title}</h3>
                                <p className="timeline-desc">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
