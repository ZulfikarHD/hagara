<script setup lang="ts">
import { onMounted } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  // Animate section title
  gsap.from('.section-title', {
    scrollTrigger: {
      trigger: '.project-section',
      start: 'top center+=100',
    },
    y: 50,
    opacity: 0,
    duration: 1,
    ease: 'power4.out'
  });

  // Animate project cards
  gsap.from('.project-card', {
    scrollTrigger: {
      trigger: '.project-grid',
      start: 'top center+=100',
    },
    y: 100,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: 'power4.out'
  });
});
</script>

<template>
  <section class="project-section bg-gray-50 py-16 lg:py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="section-title text-center">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
          Proyek Unggulan Kami
        </h2>
        <p class="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
          Portofolio proyek-proyek berkualitas yang telah kami selesaikan dengan standar tertinggi
        </p>
      </div>

      <!-- Projects Grid -->
      <div class="project-grid mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <!-- Project 1 -->
        <div class="project-card group overflow-hidden rounded-xl bg-white shadow-lg transition duration-300 hover:shadow-xl">
          <div class="relative h-64 overflow-hidden">
            <img
              src="/images/project-1.jpg"
              alt="Gedung Perkantoran Modern"
              class="h-full w-full object-cover transition duration-700 group-hover:scale-110"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition duration-300 group-hover:opacity-100"></div>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold text-gray-900">Gedung Perkantoran Modern</h3>
            <p class="mt-2 text-gray-600">Jakarta, Indonesia</p>
            <div class="mt-4 flex flex-wrap gap-2">
              <span class="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800">Konstruksi</span>
              <span class="rounded-full bg-orange-100 px-3 py-1 text-sm text-orange-800">Desain</span>
            </div>
          </div>
        </div>

        <!-- Project 2 -->
        <div class="project-card group overflow-hidden rounded-xl bg-white shadow-lg transition duration-300 hover:shadow-xl">
          <div class="relative h-64 overflow-hidden">
            <img
              src="/images/project-2.jpg"
              alt="Perumahan Elite"
              class="h-full w-full object-cover transition duration-700 group-hover:scale-110"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition duration-300 group-hover:opacity-100"></div>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold text-gray-900">Perumahan Elite</h3>
            <p class="mt-2 text-gray-600">Bandung, Indonesia</p>
            <div class="mt-4 flex flex-wrap gap-2">
              <span class="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800">Residensial</span>
              <span class="rounded-full bg-green-100 px-3 py-1 text-sm text-green-800">Berkelanjutan</span>
            </div>
          </div>
        </div>

        <!-- Project 3 -->
        <div class="project-card group overflow-hidden rounded-xl bg-white shadow-lg transition duration-300 hover:shadow-xl">
          <div class="relative h-64 overflow-hidden">
            <img
              src="/images/project-3.jpg"
              alt="Pusat Perbelanjaan"
              class="h-full w-full object-cover transition duration-700 group-hover:scale-110"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition duration-300 group-hover:opacity-100"></div>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold text-gray-900">Pusat Perbelanjaan</h3>
            <p class="mt-2 text-gray-600">Surabaya, Indonesia</p>
            <div class="mt-4 flex flex-wrap gap-2">
              <span class="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800">Komersial</span>
              <span class="rounded-full bg-yellow-100 px-3 py-1 text-sm text-yellow-800">Inovatif</span>
            </div>
          </div>
        </div>
      </div>

      <!-- View All Projects Button -->
      <div class="mt-12 text-center">
        <a
          href="/projects"
          class="inline-block transform rounded-lg bg-blue-900 px-8 py-3 text-lg font-semibold text-white transition duration-500 ease-in-out hover:-translate-y-1 hover:bg-blue-800 hover:shadow-lg"
        >
          Lihat Semua Proyek
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.project-card {
  transition: all 0.3s ease;
}

.project-card:hover {
  transform: translateY(-5px);
}

.project-card img {
  transition: transform 0.7s ease;
}
</style>
