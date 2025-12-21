import React, { Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import BackgroundCanvas from './canvas/BackgroundCanvas';
import CursorGlow from './components/CursorGlow';

function App() {
  return (
    <>
      <CursorGlow />
      <Navbar />

      {/* 3D Background */}
      <Suspense fallback={null}>
        <BackgroundCanvas />
      </Suspense>

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <footer className="container" style={{ padding: '2rem 0', textAlign: 'center', color: '#666', fontSize: '0.8rem' }}>
        <p>© {new Date().getFullYear()} Aryan Kumar. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;
