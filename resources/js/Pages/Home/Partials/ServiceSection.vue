<script setup lang="ts">
import { onMounted, ref } from 'vue';

const isVisible = ref(false);
const cards = ref<HTMLElement[]>([]);

const observerCallback = (entries: IntersectionObserverEntry[]) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      if (entry.target.classList.contains('service-header')) {
        isVisible.value = true;
      } else {
        const card = entry.target as HTMLElement;
        const index = cards.value.indexOf(card);
        setTimeout(() => {
          card.classList.add('animate__animated', 'animate__fadeInUp');
        }, index * 150); // Stagger effect
      }
    }
  });
};

onMounted(() => {
  const observer = new IntersectionObserver(observerCallback, {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  });

  // Observe header
  const header = document.querySelector('.service-header');
  if (header) observer.observe(header);

  // Observe cards
  cards.value = Array.from(document.querySelectorAll('.service-card'));
  cards.value.forEach(card => observer.observe(card));
});
</script>

<template>
  <section class="service-section bg-gray-50 py-16 lg:py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div
        class="service-header text-center"
        :class="{ 'animate__animated animate__fadeInDown': isVisible }"
      >
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
          Layanan Kami
        </h2>
        <p class="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
          Solusi konstruksi dan material berkualitas tinggi untuk setiap kebutuhan proyek Anda
        </p>
      </div>

      <!-- Services Grid -->
      <div class="services-grid mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <!-- Construction Service -->
        <div class="service-card group rounded-xl bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-xl">
          <div class="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-900 text-white">
            <svg class="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
          <h3 class="text-xl font-bold text-gray-900">Jasa Konstruksi</h3>
          <p class="mt-4 text-gray-600">Layanan konstruksi profesional untuk bangunan komersial, industri, dan residensial dengan standar kualitas tertinggi.</p>
          <a href="#" class="mt-6 inline-block text-blue-900 hover:text-blue-700">Pelajari Lebih Lanjut →</a>
        </div>

        <!-- Material Supply -->
        <div class="service-card group rounded-xl bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-xl">
          <div class="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-orange-500 text-white">
            <svg class="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
          </div>
          <h3 class="text-xl font-bold text-gray-900">Supply Material</h3>
          <p class="mt-4 text-gray-600">Penyediaan material konstruksi berkualitas tinggi dengan harga kompetitif dan pengiriman tepat waktu.</p>
          <a href="#" class="mt-6 inline-block text-orange-500 hover:text-orange-400">Pelajari Lebih Lanjut →</a>
        </div>

        <!-- Project Management -->
        <div class="service-card group rounded-xl bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-xl">
          <div class="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-700 text-white">
            <svg class="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
            </svg>
          </div>
          <h3 class="text-xl font-bold text-gray-900">Manajemen Proyek</h3>
          <p class="mt-4 text-gray-600">Pengelolaan proyek konstruksi yang efisien dengan tim berpengalaman dan teknologi modern.</p>
          <a href="#" class="mt-6 inline-block text-gray-700 hover:text-gray-600">Pelajari Lebih Lanjut →</a>
        </div>

        <!-- Design & Planning -->
        <div class="service-card group rounded-xl bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-xl">
          <div class="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-yellow-500 text-white">
            <svg class="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
            </svg>
          </div>
          <h3 class="text-xl font-bold text-gray-900">Desain & Perencanaan</h3>
          <p class="mt-4 text-gray-600">Layanan desain dan perencanaan komprehensif untuk memastikan proyek Anda berjalan sesuai visi.</p>
          <a href="#" class="mt-6 inline-block text-yellow-500 hover:text-yellow-400">Pelajari Lebih Lanjut →</a>
        </div>

        <!-- Renovation -->
        <div class="service-card group rounded-xl bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-xl">
          <div class="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-900 text-white">
            <svg class="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z" />
            </svg>
          </div>
          <h3 class="text-xl font-bold text-gray-900">Renovasi</h3>
          <p class="mt-4 text-gray-600">Layanan renovasi profesional untuk memperbarui dan meningkatkan nilai properti Anda.</p>
          <a href="#" class="mt-6 inline-block text-blue-900 hover:text-blue-700">Pelajari Lebih Lanjut →</a>
        </div>

        <!-- Consultation -->
        <div class="service-card group rounded-xl bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-xl">
          <div class="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-orange-500 text-white">
            <svg class="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
          </div>
          <h3 class="text-xl font-bold text-gray-900">Konsultasi</h3>
          <p class="mt-4 text-gray-600">Konsultasi ahli untuk membantu Anda merencanakan dan mengoptimalkan proyek konstruksi.</p>
          <a href="#" class="mt-6 inline-block text-orange-500 hover:text-orange-400">Pelajari Lebih Lanjut →</a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@import 'animate.css';

.service-card {
  opacity: 0;
}

.animate__animated {
  opacity: 1;
}

.animate__fadeInUp {
  --animate-duration: 800ms;
}

.animate__fadeInDown {
  --animate-duration: 1000ms;
}

.service-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.service-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
}

.service-card a {
  transition: color 0.3s ease;
}
</style>
