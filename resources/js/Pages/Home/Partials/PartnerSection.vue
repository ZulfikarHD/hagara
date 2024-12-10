<script setup lang="ts">
import { onMounted, ref } from 'vue';

const isVisible = ref({
  header: false,
  partners: false,
  trust: false
});

onMounted(() => {
  const observers = {
    header: new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          isVisible.value.header = true;
        }
      });
    }, { threshold: 0.1 }),

    partners: new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          isVisible.value.partners = true;
        }
      });
    }, { threshold: 0.1 }),

    trust: new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          isVisible.value.trust = true;
        }
      });
    }, { threshold: 0.1 })
  };

  // Observe elements
  const header = document.querySelector('.section-header');
  const partners = document.querySelector('.partner-grid');
  const trust = document.querySelector('.trust-message');

  if (header) observers.header.observe(header);
  if (partners) observers.partners.observe(partners);
  if (trust) observers.trust.observe(trust);
});
</script>

<template>
  <section class="partner-section bg-white py-16 lg:py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div
        class="section-header text-center"
        :class="{ 'animate__animated animate__fadeInDown': isVisible.header }"
      >
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
          Mitra Terpercaya Kami
        </h2>
        <p class="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
          Berkolaborasi dengan perusahaan terkemuka untuk memberikan layanan terbaik
        </p>
      </div>

      <!-- Partner Logos Grid -->
      <div class="partner-grid mt-16 grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
        <div
          v-for="i in 6"
          :key="i"
          class="partner-logo flex items-center justify-center"
          :class="[
            { 'animate__animated animate__zoomIn': isVisible.partners },
            `animate__delay-${i}s`
          ]"
        >
          <div class="group relative h-24 w-full rounded-lg bg-gray-50 p-4 shadow-md transition-all duration-500 hover:scale-110 hover:shadow-xl">
            <img
              :src="`/images/partner-${i}.png`"
              alt="Partner Logo"
              class="h-full w-full object-contain opacity-70 transition-opacity duration-500 group-hover:opacity-100"
            />
          </div>
        </div>
      </div>

      <!-- Trust Message -->
      <div
        class="trust-message mt-16 text-center"
        :class="{ 'animate__animated animate__fadeInUp': isVisible.trust }"
      >
        <p class="text-lg font-medium text-gray-600">
          Dipercaya oleh perusahaan terkemuka di Indonesia untuk proyek-proyek berskala besar
        </p>
        <a
          href="#contact"
          class="mt-6 inline-block transform rounded-lg bg-blue-900 px-8 py-3 text-lg font-semibold text-white transition-all duration-500 hover:-translate-y-1 hover:bg-blue-800 hover:shadow-lg"
        >
          Jadi Mitra Kami
        </a>
      </div>
    </div>
  </section>
</template>

<style>
@import 'animate.css';

/* Custom animation durations and delays */
.animate__animated {
  --animate-duration: 1s;
}

.animate__delay-1s { --animate-delay: 0.1s; }
.animate__delay-2s { --animate-delay: 0.2s; }
.animate__delay-3s { --animate-delay: 0.3s; }
.animate__delay-4s { --animate-delay: 0.4s; }
.animate__delay-5s { --animate-delay: 0.5s; }
.animate__delay-6s { --animate-delay: 0.6s; }

/* Partner logo hover animation */
.partner-logo img {
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

.partner-logo:hover img {
  transform: rotateY(180deg);
}
</style>
