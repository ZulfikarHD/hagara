<script setup lang="ts">
import { onMounted } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  // Animate section title
  gsap.from('.section-title', {
    scrollTrigger: {
      trigger: '.testimonials-section',
      start: 'top center+=100',
      toggleActions: 'play none none reverse'
    },
    y: 50,
    opacity: 0,
    duration: 1,
    ease: 'power4.out'
  });

  // Animate testimonial cards with stagger
  gsap.from('.testimonial-card', {
    scrollTrigger: {
      trigger: '.testimonials-grid',
      start: 'top center+=100',
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
  <section class="testimonials-section bg-gray-50 py-16 sm:py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="section-title mx-auto max-w-3xl text-center">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Apa Kata Klien Kami
        </h2>
        <p class="mt-4 text-lg text-gray-600">
          Kepuasan klien adalah prioritas utama kami. Lihat apa yang mereka katakan tentang layanan kami.
        </p>
      </div>

      <!-- Testimonials Grid -->
      <div class="testimonials-grid mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <!-- Testimonial 1 -->
        <div class="testimonial-card group rounded-xl bg-white p-6 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-xl">
          <div class="flex items-center gap-4">
            <img
              src="/images/testimonial-1.jpg"
              alt="Client Photo"
              class="h-16 w-16 rounded-full object-cover"
            />
            <div>
              <h3 class="font-semibold text-gray-900">Budi Santoso</h3>
              <p class="text-sm text-gray-600">PT Maju Bersama</p>
            </div>
          </div>
          <p class="mt-4 text-gray-600">
            "Kualitas pekerjaan yang luar biasa dan tepat waktu. Tim mereka sangat profesional dan komunikatif selama proses pembangunan."
          </p>
          <div class="mt-4 flex text-orange-500">
            <svg v-for="i in 5" :key="i" class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
        </div>

        <!-- Testimonial 2 -->
        <div class="testimonial-card group rounded-xl bg-white p-6 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-xl">
          <div class="flex items-center gap-4">
            <img
              src="/images/testimonial-2.jpg"
              alt="Client Photo"
              class="h-16 w-16 rounded-full object-cover"
            />
            <div>
              <h3 class="font-semibold text-gray-900">Siti Rahayu</h3>
              <p class="text-sm text-gray-600">Developer Properti</p>
            </div>
          </div>
          <p class="mt-4 text-gray-600">
            "Pelayanan yang sangat memuaskan. Material berkualitas tinggi dan harga yang kompetitif. Sangat direkomendasikan!"
          </p>
          <div class="mt-4 flex text-orange-500">
            <svg v-for="i in 5" :key="i" class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
        </div>

        <!-- Testimonial 3 -->
        <div class="testimonial-card group rounded-xl bg-white p-6 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-xl">
          <div class="flex items-center gap-4">
            <img
              src="/images/testimonial-3.jpg"
              alt="Client Photo"
              class="h-16 w-16 rounded-full object-cover"
            />
            <div>
              <h3 class="font-semibold text-gray-900">Ahmad Hidayat</h3>
              <p class="text-sm text-gray-600">Kontraktor</p>
            </div>
          </div>
          <p class="mt-4 text-gray-600">
            "Sudah 5 tahun bekerja sama dan selalu puas dengan layanan mereka. Tim yang responsif dan solusi yang inovatif."
          </p>
          <div class="mt-4 flex text-orange-500">
            <svg v-for="i in 5" :key="i" class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
        </div>
      </div>

      <!-- Trust Badge -->
      <div class="mt-16 text-center">
        <div class="inline-flex items-center rounded-full bg-blue-50 px-6 py-2">
          <svg class="h-5 w-5 text-blue-900" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
          </svg>
          <span class="ml-2 text-sm font-medium text-blue-900">4.9/5 Rating Kepuasan Klien</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.testimonial-card {
  transition: all 0.3s ease;
}
</style>
