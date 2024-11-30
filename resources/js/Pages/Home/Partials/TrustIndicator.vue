<script setup lang="ts">
import { onMounted } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  // Split text animation for header
  const header = document.querySelector('.split-header');
  if (header) {
    const text = header.textContent || '';
    header.innerHTML = text.split('').map(char =>
      `<span class="inline-block">${char === ' ' ? '&nbsp;' : char}</span>`
    ).join('');

    gsap.from('.split-header span', {
      scrollTrigger: {
        trigger: '.trust-section',
        start: 'top center+=100',
      },
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.03,
      ease: 'power4.out'
    });
  }

  // Split text animation for subheader
  const subheader = document.querySelector('.split-subheader');
  if (subheader) {
    const text = subheader.textContent || '';
    subheader.innerHTML = text.split(' ').map(word =>
      `<span class="inline-block">${word}&nbsp;</span>`
    ).join('');

    gsap.from('.split-subheader span', {
      scrollTrigger: {
        trigger: '.trust-section',
        start: 'top center+=100',
      },
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.05,
      ease: 'power4.out',
      delay: 0.5
    });
  }

  // Animate trust indicators on scroll
  gsap.from('.trust-item', {
    scrollTrigger: {
      trigger: '.trust-section',
      start: 'top center+=100',
      toggleActions: 'play none none reverse'
    },
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: 'power4.out'
  });
});
</script>

<template>
  <section class="trust-section bg-white py-16 lg:py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center">
        <h2 class="split-header overflow-hidden text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
          Mengapa Memilih Kami?
        </h2>
        <p class="split-subheader mx-auto mt-4 max-w-2xl overflow-hidden text-lg text-gray-600">
          25 tahun pengalaman dalam memberikan layanan konstruksi berkualitas tinggi dan material konstruksi terpercaya
        </p>
      </div>

      <!-- Trust Indicators Grid -->
      <div class="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <!-- Quality -->
        <div class="trust-item rounded-xl bg-blue-50 p-6 text-center shadow-lg transition duration-300 hover:shadow-xl">
          <div class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-900 text-white">
            <svg class="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 class="text-xl font-bold text-gray-900">Kualitas Terjamin</h3>
          <p class="mt-2 text-gray-600">Standar kualitas tertinggi dalam setiap proyek dan material yang kami sediakan</p>
        </div>

        <!-- Experience -->
        <div class="trust-item rounded-xl bg-orange-50 p-6 text-center shadow-lg transition duration-300 hover:shadow-xl">
          <div class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-orange-500 text-white">
            <svg class="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 class="text-xl font-bold text-gray-900">Berpengalaman</h3>
          <p class="mt-2 text-gray-600">25 tahun pengalaman dalam industri konstruksi dan supply material</p>
        </div>

        <!-- Professional Team -->
        <div class="trust-item rounded-xl bg-gray-100 p-6 text-center shadow-lg transition duration-300 hover:shadow-xl">
          <div class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-700 text-white">
            <svg class="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <h3 class="text-xl font-bold text-gray-900">Tim Profesional</h3>
          <p class="mt-2 text-gray-600">Tim ahli bersertifikasi dengan dedikasi tinggi</p>
        </div>

        <!-- Customer Service -->
        <div class="trust-item rounded-xl bg-yellow-50 p-6 text-center shadow-lg transition duration-300 hover:shadow-xl">
          <div class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-yellow-500 text-white">
            <svg class="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
          </div>
          <h3 class="text-xl font-bold text-gray-900">Layanan Prima</h3>
          <p class="mt-2 text-gray-600">Kepuasan pelanggan adalah prioritas utama kami</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.trust-item {
  transition: transform 0.3s ease;
}

.trust-item:hover {
  transform: translateY(-5px);
}

.split-header span,
.split-subheader span {
  display: inline-block;
  white-space: pre;
}
</style>
