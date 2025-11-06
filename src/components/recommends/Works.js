import React, { useRef, useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';
import styles from './Recommends.module.css';

// Import your images
import result1 from "../../images/מאי כחלון הרמת ריסים 1.png";
import result2 from "../../images/מאי כחלון הרמת ריסים 2.png";
import result3 from "../../images/מאי כחלון הרמת ריסים 3.png";
import result4 from "../../images/מאי כחלון הרמת ריסים 4.png";
import result5 from "../../images/מאי כחלון הרמת ריסים 5.png";
import result6 from "../../images/מאי כחלון הרמת ריסים 6.png";
import result7 from "../../images/מאי כחלון הרמת ריסים 7.png";
import result8 from "../../images/מאי כחלון הרמת ריסים 8.png";
import result9 from "../../images/מאי כחלון הרמת ריסים 9.png";
import result10 from "../../images/מאי כחלון הרמת ריסים 10.png";
import result11 from "../../images/מאי כחלון הרמת ריסים 11.png";
import result12 from "../../images/מאי כחלון הרמת ריסים 12.png";
import result13 from "../../images/מאי כחלון הרמת ריסים 13.png";
import result14 from "../../images/מאי כחלון הרמת ריסים 14.png";
import result15 from "../../images/מאי כחלון הרמת ריסים 15.png";
import result16 from "../../images/מאי כחלון הרמת ריסים 16.png";
import result17 from "../../images/מאי כחלון הרמת ריסים 17.png";

gsap.registerPlugin(ScrollTrigger);

const Works = () => {
  const images = [
    result1, result2, result3, result4, result5, result6,
    result7, result8, result9, result10, result11, result12, 
    result13, result14, result15, result16, result17
  ];

  const containerRef = useRef(null);
  const scrollTrackRef = useRef(null);
  const explainRef = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Mouse position tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothMouseX = useSpring(mouseX, { damping: 50, stiffness: 200 });
  const smoothMouseY = useSpring(mouseY, { damping: 50, stiffness: 200 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      mouseX.set((clientX / innerWidth - 0.5) * 2);
      mouseY.set((clientY / innerHeight - 0.5) * 2);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Animate explanation - REMOVED ScrollTrigger that was hiding it
    gsap.fromTo(explainRef.current, 
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 0.2
      }
    );

    // Horizontal scroll animation
    const section = containerRef.current;
    const scrollTrack = scrollTrackRef.current;

    if (section && scrollTrack) {
      const scrollWidth = scrollTrack.scrollWidth;
      const windowWidth = window.innerWidth;

      gsap.to(scrollTrack, {
        x: () => -(scrollWidth - windowWidth),
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'center center',
          end: () => `+=${scrollWidth * 1.5}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        }
      });
    }

    // Cleanup
    return () => {
      lenis.destroy();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className={styles.worksSection}>
      <motion.div
        ref={explainRef}
        className={styles.explain}
      >
        מאות נשים יצאו ממני עם ריסים מושלמות
      </motion.div>

      <div ref={containerRef} className={styles.container}>
        <div ref={scrollTrackRef} className={styles.scrollTrack}>
          {images.map((img, index) => (
            <ImageCard
              key={`image-${index}`}
              img={img}
              index={index}
              hoveredIndex={hoveredIndex}
              setHoveredIndex={setHoveredIndex}
              mouseX={smoothMouseX}
              mouseY={smoothMouseY}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const ImageCard = ({ img, index, hoveredIndex, setHoveredIndex, mouseX, mouseY }) => {
  const isHovered = hoveredIndex === index;
  const cardRef = useRef(null);

  const rotateX = useTransform(mouseY, [-1, 1], [5, -5]);
  const rotateY = useTransform(mouseX, [-1, 1], [-5, 5]);

  return (
    <motion.div
      ref={cardRef}
      className={styles.imageWrapper}
      onHoverStart={() => setHoveredIndex(index)}
      onHoverEnd={() => setHoveredIndex(null)}
      initial={{ opacity: 1, scale: 1 }}
      whileHover={{
        scale: 1.08,
        y: -10,
        zIndex: 100,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      style={{
        rotateX: isHovered ? rotateX : 0,
        rotateY: isHovered ? rotateY : 0,
        transformPerspective: 1000
      }}
    >
      <motion.img
        src={img}
        alt={`המלצה ${index + 1}`}
        className={styles.image}
        whileHover={{
          filter: 'brightness(1.15)',
          transition: { duration: 0.2 }
        }}
      />
      
      {isHovered && (
        <motion.div
          className={styles.shine}
          initial={{ x: '-100%' }}
          animate={{ x: '200%' }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        />
      )}

      <motion.div 
        className={styles.overlay}
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

export default Works;