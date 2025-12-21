import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const Contact = () => {
    return (
        <section className="section" id="contact" style={{ textAlign: 'center' }}>
            <div className="container flex flex-col items-center justify-center h-full">
                <p className="subtitle">Ready to create something?</p>

                <a href="mailto:aryanshukla1155@gmail.com" className="contact-link">
                    Let's work together
                    <ArrowUpRight size={48} style={{ display: 'inline', marginLeft: '1rem', verticalAlign: 'middle' }} />
                </a>

                <div className="flex gap-8 mt-12 text-gray-400">
                    <a href="mailto:aryanshukla1155@gmail.com" className="hover:text-white transition-colors">aryanshukla1155@gmail.com</a>
                    <a href="#" className="hover:text-white transition-colors">+91 70659 06482</a>
                </div>

                <div className="flex gap-8 mt-8">
                    <a href="#" className="btn">LinkedIn</a>
                    <a href="#" className="btn">GitHub</a>
                    <a href="#" className="btn">Twitter</a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
