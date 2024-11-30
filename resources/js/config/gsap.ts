import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Global GSAP configuration
gsap.config({
  autoSleep: 60,
  force3D: true,
  nullTargetWarn: false,
});

// Default animation settings
export const defaultAnimationSettings = {
  duration: 1,
  ease: 'power4.out',
  opacity: 0,
  y: 30,
};

// ScrollTrigger default settings
export const defaultScrollTriggerSettings = {
  start: 'top center+=100',
  toggleActions: 'play none none reverse',
  markers: process.env.NODE_ENV === 'development', // Only show markers in development
  once: false,
  invalidateOnRefresh: true,
};

export { gsap, ScrollTrigger };
