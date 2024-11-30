<script setup lang="ts">
import { onMounted } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  // Animate section header
  gsap.from('.section-header', {
    scrollTrigger: {
      trigger: '.partner-section',
      start: 'top center+=100',
      toggleActions: 'play none none reverse'
    },
    y: 50,
    opacity: 0,
    duration: 1.2,
    ease: 'power4.out'
  });

  // Animate partner logos with scale and rotation
  gsap.from('.partner-logo', {
    scrollTrigger: {
      trigger: '.partner-grid',
      start: 'top center+=100',
      toggleActions: 'play none none reverse'
    },
    scale: 0.5,
    rotation: 15,
    opacity: 0,
    duration: 1.2,
    stagger: {
      amount: 1,
      grid: [2, 3],
      from: "center"
    },
    ease: 'power4.out'
  });

  // Animate trust message
  gsap.from('.trust-message', {
    scrollTrigger: {
      trigger: '.trust-message',
      start: 'top center+=100',
      toggleActions: 'play none none reverse'
    },
    y: 30,
    opacity: 0,
    duration: 1.2,
    ease: 'power4.out'
  });
});
</script>

<template>
  <section class="partner-section bg-white py-16 lg:py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="section-header text-center">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
          Mitra Terpercaya Kami
        </h2>
        <p class="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
          Berkolaborasi dengan perusahaan terkemuka untuk memberikan layanan terbaik
        </p>
      </div>

      <!-- Partner Logos Grid -->
      <div class="partner-grid mt-16 grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
        <!-- Partner 1 -->
        <div class="partner-logo flex items-center justify-center">
          <div class="group relative h-24 w-full rounded-lg bg-gray-50 p-4 shadow-md transition duration-500 hover:scale-110 hover:shadow-xl">
            <img
              src="/images/partner-1.png"
              alt="Partner Logo"
              class="h-full w-full object-contain opacity-70 transition-opacity duration-500 group-hover:opacity-100"
            />
          </div>
        </div>

        <!-- Partner 2 -->
        <div class="partner-logo flex items-center justify-center">
          <div class="group relative h-24 w-full rounded-lg bg-gray-50 p-4 shadow-md transition duration-500 hover:scale-110 hover:shadow-xl">
            <img
              src="/images/partner-2.png"
              alt="Partner Logo"
              class="h-full w-full object-contain opacity-70 transition-opacity duration-500 group-hover:opacity-100"
            />
          </div>
        </div>

        <!-- Partner 3 -->
        <div class="partner-logo flex items-center justify-center">
          <div class="group relative h-24 w-full rounded-lg bg-gray-50 p-4 shadow-md transition duration-500 hover:scale-110 hover:shadow-xl">
            <img
              src="/images/partner-3.png"
              alt="Partner Logo"
              class="h-full w-full object-contain opacity-70 transition-opacity duration-500 group-hover:opacity-100"
            />
          </div>
        </div>

        <!-- Partner 4 -->
        <div class="partner-logo flex items-center justify-center">
          <div class="group relative h-24 w-full rounded-lg bg-gray-50 p-4 shadow-md transition duration-500 hover:scale-110 hover:shadow-xl">
            <img
              src="/images/partner-4.png"
              alt="Partner Logo"
              class="h-full w-full object-contain opacity-70 transition-opacity duration-500 group-hover:opacity-100"
            />
          </div>
        </div>

        <!-- Partner 5 -->
        <div class="partner-logo flex items-center justify-center">
          <div class="group relative h-24 w-full rounded-lg bg-gray-50 p-4 shadow-md transition duration-500 hover:scale-110 hover:shadow-xl">
            <img
              src="/images/partner-5.png"
              alt="Partner Logo"
              class="h-full w-full object-contain opacity-70 transition-opacity duration-500 group-hover:opacity-100"
            />
          </div>
        </div>

        <!-- Partner 6 -->
        <div class="partner-logo flex items-center justify-center">
          <div class="group relative h-24 w-full rounded-lg bg-gray-50 p-4 shadow-md transition duration-500 hover:scale-110 hover:shadow-xl">
            <img
              src="/images/partner-6.png"
              alt="Partner Logo"
              class="h-full w-full object-contain opacity-70 transition-opacity duration-500 group-hover:opacity-100"
            />
          </div>
        </div>
      </div>

      <!-- Trust Message -->
      <div class="trust-message mt-16 text-center">
        <p class="text-lg font-medium text-gray-600">
          Dipercaya oleh perusahaan terkemuka di Indonesia untuk proyek-proyek berskala besar
        </p>
        <a
          href="#contact"
          class="mt-6 inline-block transform rounded-lg bg-blue-900 px-8 py-3 text-lg font-semibold text-white transition duration-500 ease-in-out hover:-translate-y-1 hover:bg-blue-800 hover:shadow-lg"
        >
          Jadi Mitra Kami
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.partner-logo {
  perspective: 1000px;
}

.partner-logo:hover img {
  transform: rotateY(360deg);
  transition: transform 1s ease-in-out;
}
</style>
