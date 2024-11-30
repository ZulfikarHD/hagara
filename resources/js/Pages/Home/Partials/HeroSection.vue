<script setup lang="ts">
import { onMounted } from 'vue';
import { gsap } from 'gsap';

onMounted(() => {
  // Staggered animation for hero content
  gsap.from('.hero-content > *', {
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: 'power4.out'
  });

  // Subtle parallax effect on scroll
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxBg = document.querySelector('.parallax-bg');
    if (parallaxBg) {
      (parallaxBg as HTMLElement).style.transform = `translateY(${scrolled * 0.5}px)`;
    }
  });
});
</script>

<template>
  <section class="relative min-h-screen overflow-hidden bg-gray-900">
    <!-- Parallax Background -->
    <div class="parallax-bg absolute inset-0 opacity-20">
      <img
        src="/images/hero-bg.jpg"
        alt="Construction Site"
        class="h-full w-full object-cover"
      />
    </div>

    <!-- Overlay Gradient -->
    <div class="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-gray-900/90"></div>

    <!-- Hero Content -->
    <div class="hero-content relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-4 sm:px-6 lg:px-8">
      <!-- Main Heading -->
      <h1 class="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
        <span class="block">Building Excellence,</span>
        <span class="block text-orange-500">Delivering Trust</span>
      </h1>

      <!-- Subheading -->
      <p class="mt-6 max-w-2xl text-xl text-gray-300">
        25+ years of experience in construction and material supply. We transform visions into reality with innovative solutions and uncompromising quality.
      </p>

      <!-- CTA Buttons -->
      <div class="mt-10 flex flex-wrap gap-4">
        <a
          href="#services"
          class="transform rounded-lg bg-orange-500 px-8 py-4 text-lg font-semibold text-white transition duration-500 ease-in-out hover:bg-orange-600 hover:shadow-lg"
        >
          Our Services
        </a>
        <a
          href="#contact"
          class="transform rounded-lg border-2 border-white bg-transparent px-8 py-4 text-lg font-semibold text-white transition duration-500 ease-in-out hover:bg-white hover:text-gray-900"
        >
          Contact Us
        </a>
      </div>

      <!-- Key Stats -->
      <div class="mt-16 grid grid-cols-2 gap-8 text-center sm:grid-cols-4">
        <div class="transform transition duration-500 ease-in-out hover:scale-105">
          <div class="text-3xl font-bold text-orange-500">25+</div>
          <div class="mt-2 text-sm text-gray-300">Years Experience</div>
        </div>
        <div class="transform transition duration-500 ease-in-out hover:scale-105">
          <div class="text-3xl font-bold text-orange-500">500+</div>
          <div class="mt-2 text-sm text-gray-300">Projects Completed</div>
        </div>
        <div class="transform transition duration-500 ease-in-out hover:scale-105">
          <div class="text-3xl font-bold text-orange-500">100+</div>
          <div class="mt-2 text-sm text-gray-300">Expert Team</div>
        </div>
        <div class="transform transition duration-500 ease-in-out hover:scale-105">
          <div class="text-3xl font-bold text-orange-500">98%</div>
          <div class="mt-2 text-sm text-gray-300">Client Satisfaction</div>
        </div>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
      <svg
        class="h-6 w-6 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M19 14l-7 7m0 0l-7-7m7 7V3"
        />
      </svg>
    </div>
  </section>
</template>

<style scoped>
.parallax-bg {
  will-change: transform;
}
</style>
