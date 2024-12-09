import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Global GSAP configuration
gsap.config({
  autoSleep: 60,
  force3D: true,
  nullTargetWarn: false,
  autoKillThreshold: 1
});

// Default animation settings
export const defaultAnimationSettings = {
  duration: 1.2,
  ease: "power3.out",
  opacity: 0,
  y: 30,
  stagger: {
    amount: 0.4,
    ease: "power2.out"
  }
};

// ScrollTrigger default settings
export const defaultScrollTriggerSettings = {
  start: "top 80%",
  end: "bottom 20%",
  toggleActions: "play none none reverse",
  markers: false,
  scrub: false,
  anticipatePin: 1
};

export { gsap, ScrollTrigger };
