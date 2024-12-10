<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';

const parallaxBg = ref<HTMLElement | null>(null);

// Parallax scroll handler dengan TypeScript yang lebih baik
const handleScroll = (): void => {
  if (!parallaxBg.value) return;
  const scrolled = window.pageYOffset;
  parallaxBg.value.style.transform = `translateY(${scrolled * 0.5}px)`;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <section class="relative min-h-screen overflow-hidden bg-gray-900">
    <!-- Parallax Background -->
    <div
      ref="parallaxBg"
      class="parallax-bg absolute inset-0 opacity-20"
    >
      <img
        src="/images/hero-bg.jpg"
        alt="Lokasi Konstruksi"
        class="h-full w-full object-cover"
      />
    </div>

    <!-- Overlay Gradient -->
    <div class="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-gray-900/90"></div>

    <!-- Hero Content -->
    <div class="hero-content relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-4 sm:px-6 lg:px-8">
      <!-- Main Heading -->
      <h1 class="animate__animated animate__fadeInDown animate__delay-1s text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
        <span class="block">Membangun Keunggulan,</span>
        <span class="block text-orange-500">Menghadirkan Kepercayaan</span>
      </h1>

      <!-- Subheading -->
      <p class="animate__animated animate__fadeIn animate__delay-2s mt-6 max-w-2xl text-xl text-gray-300">
        Lebih dari 25 tahun pengalaman dalam konstruksi dan penyediaan material. Kami mengubah visi menjadi kenyataan dengan solusi inovatif dan kualitas tanpa kompromi.
      </p>

      <!-- CTA Buttons -->
      <div class="animate__animated animate__fadeInUp animate__delay-3s mt-10 flex flex-wrap gap-4">
        <a
          href="#services"
          class="transform rounded-lg bg-orange-500 px-8 py-4 text-lg font-semibold text-white transition duration-500 ease-in-out hover:bg-orange-600 hover:shadow-lg"
        >
          Layanan Kami
        </a>
        <a
          href="#contact"
          class="transform rounded-lg border-2 border-white bg-transparent px-8 py-4 text-lg font-semibold text-white transition duration-500 ease-in-out hover:bg-white hover:text-gray-900"
        >
          Hubungi Kami
        </a>
      </div>

      <!-- Key Stats -->
      <div class="animate__animated animate__fadeIn animate__delay-4s mt-16 grid grid-cols-2 gap-8 text-center sm:grid-cols-4">
        <div class="transform transition duration-500 ease-in-out hover:scale-105">
          <div class="text-3xl font-bold text-orange-500">25+</div>
          <div class="mt-2 text-sm text-gray-300">Tahun Pengalaman</div>
        </div>
        <div class="transform transition duration-500 ease-in-out hover:scale-105">
          <div class="text-3xl font-bold text-orange-500">500+</div>
          <div class="mt-2 text-sm text-gray-300">Proyek Selesai</div>
        </div>
        <div class="transform transition duration-500 ease-in-out hover:scale-105">
          <div class="text-3xl font-bold text-orange-500">100+</div>
          <div class="mt-2 text-sm text-gray-300">Tim Ahli</div>
        </div>
        <div class="transform transition duration-500 ease-in-out hover:scale-105">
          <div class="text-3xl font-bold text-orange-500">98%</div>
          <div class="mt-2 text-sm text-gray-300">Kepuasan Klien</div>
        </div>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="animate__animated animate__bounce animate__infinite absolute bottom-8 left-1/2 -translate-x-1/2">
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

/* Pastikan untuk mengimpor Animate.css di file app.css atau layout utama */
@import 'animate.css';
</style>
