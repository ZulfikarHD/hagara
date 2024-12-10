<script setup lang="ts">
import { onMounted, ref } from 'vue';
import 'animate.css';

const sectionRef = ref<HTMLElement | null>(null);
const isVisible = ref(false);

const observeElements = () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate__animated');

        if (entry.target.classList.contains('section-title')) {
          entry.target.classList.add('animate__fadeInUp');
        }

        if (entry.target.classList.contains('project-card')) {
          entry.target.classList.add('animate__fadeInUp');
          // Menambahkan delay untuk efek stagger
          const index = Array.from(document.querySelectorAll('.project-card')).indexOf(entry.target);
          (entry.target as HTMLElement).style.animationDelay = `${index * 0.2}s`;
        }
      }
    });
  }, {
    threshold: 0.2,
    rootMargin: '50px'
  });

  // Observe title
  const title = document.querySelector('.section-title');
  if (title) observer.observe(title);

  // Observe cards
  document.querySelectorAll('.project-card').forEach(card => {
    observer.observe(card);
  });

  return observer;
};

onMounted(() => {
  const observer = observeElements();

  return () => observer.disconnect();
});
</script>

<template>
  <section
    ref="sectionRef"
    class="project-section bg-gray-50 py-16 lg:py-24"
  >
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
  will-change: transform;
  backface-visibility: hidden;
  transform: translateZ(0);
}

.project-card:hover {
  transform: translateY(-15px);
}

.project-card img {
  transition: transform 1.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.project-card:hover img {
  transform: scale(1.08);
}

/* Mengatur durasi animasi sesuai dengan style guide */
.animate__animated {
  animation-duration: 1.2s !important;
}

/* Menambahkan smooth easing */
.animate__fadeInUp {
  animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1) !important;
}

@media (prefers-reduced-motion: reduce) {
  .animate__animated {
    animation: none !important;
  }

  .project-card {
    transition: none;
  }

  .project-card img {
    transition: none;
  }
}
</style>
