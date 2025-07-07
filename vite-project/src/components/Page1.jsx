import React, { useRef } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import Portfolio from './Portfolio';
import Skill from './Skill';
import Certification from './Certification';
import Navbar from './Navbar';
import Secnav from './Secnav';
import '../firstpage.css';
import Connect from './Connect';

const Page1 = () => {
  const parallaxRef = useRef();

  const scrollTo = (offset) => {
    parallaxRef.current.scrollTo(offset);
  };

  return (
    <div className='App'>
      <div className='fixed-navbar'>
        <Navbar />
        <Secnav onNavigate={scrollTo} /> {/* Pass scrollTo to Secnav */}
      </div>

      <div className="parallax-wrapper" id='hero'>
        <Parallax ref={parallaxRef} pages={5.6} className='animation'>
          <section id="hero">
            <div className='animation_layer parallax' id='star'></div>
          </section>

          <ParallaxLayer offset={0} speed={0}>
            <div className='name-overlay'>
              <h1 className='name-main'>Karan</h1>
              <h1 className='name-main'>Jadhav</h1>
              <h2 className='name-sub'>Full Stack Developer</h2>
            </div>
          </ParallaxLayer>

          <ParallaxLayer offset={0} speed={0.35}>
            <div className='animation_layer parallax' id='moon'></div>
          </ParallaxLayer>

          <ParallaxLayer offset={0} speed={0.3}>
            <div className='animation_layer parallax' id='mount1'></div>
          </ParallaxLayer>

          <ParallaxLayer offset={0} speed={0.35}>
            <div className='animation_layer parallax' id='mount2'></div>
          </ParallaxLayer>

          <ParallaxLayer offset={0} speed={0.35}>
            <div className='animation_layer parallax' id='pahad'></div>
          </ParallaxLayer>

          <ParallaxLayer offset={0} speed={0.25}>
            <div className='animation_layer parallax' id='astro'></div>
          </ParallaxLayer>

          <ParallaxLayer offset={0} speed={0.4}>
            <div className='animation_layer parallax' id='treegroup'></div>
          </ParallaxLayer>

          <ParallaxLayer offset={0} speed={0.35}>
            <div className='animation_layer parallax' id='manonmountain'></div>
          </ParallaxLayer>

          {/* Portfolio */}
          <ParallaxLayer offset={1.3} speed={0.3}>
            <section id="portfolio">
              <div className='portfolio-wrapper'>
                <Portfolio />
              </div>
            </section>
          </ParallaxLayer>

          {/* Certifications */}
          <ParallaxLayer offset={2.5} speed={0.3}>
            <section id="certifications">
              <div className='portfolio-wrapper'>
                <Certification />
              </div>
            </section>
          </ParallaxLayer>

          {/* Skills */}
          <ParallaxLayer offset={4} speed={0.3}>
            <section id="skills">
              <div className='portfolio-wrapper'>
                <Skill />
              </div>
            </section>
          </ParallaxLayer>
           <ParallaxLayer offset={5} speed={0.3}>
              <div className='portfolio-wrapper'>
                <Connect />
              </div>
          </ParallaxLayer>
        </Parallax>
      </div>
    </div>
  );
};

export default Page1;
