<script setup lang="ts">
import { onMounted, ref } from 'vue';

const sectionRef = ref<HTMLElement | null>(null);
const isVisible = ref(false);

// Dummy data for testimonials
const testimonials = [
  {
    id: 1,
    name: 'Budi Santoso',
    company: 'PT Maju Bersama',
    image: '/images/testimonial-1.jpg',
    text: 'Kualitas pekerjaan yang luar biasa dan tepat waktu. Tim mereka sangat profesional dan komunikatif selama proses pembangunan.'
  },
  {
    id: 2,
    name: 'Siti Rahayu',
    company: 'Developer Properti',
    image: '/images/testimonial-2.jpg',
    text: 'Pelayanan yang sangat memuaskan. Material berkualitas tinggi dan harga yang kompetitif. Sangat direkomendasikan!'
  },
  {
    id: 3,
    name: 'Ahmad Hidayat',
    company: 'Kontraktor',
    image: '/images/testimonial-3.jpg',
    text: 'Sudah 5 tahun bekerja sama dan selalu puas dengan layanan mereka. Tim yang responsif dan solusi yang inovatif.'
  }
];

const handleIntersection = (entries: IntersectionObserverEntry[]) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      isVisible.value = true;
      // Trigger animations when section becomes visible
      const title = document.querySelector('.section-title');
      const cards = document.querySelectorAll('.testimonial-card');
      const badge = document.querySelector('.trust-badge');

      title?.classList.add('animate__animated', 'animate__fadeInUp');

      cards.forEach((card, index) => {
        setTimeout(() => {
          card.classList.add('animate__animated', 'animate__fadeInUp');
        }, index * 200); // Stagger effect
      });

      setTimeout(() => {
        badge?.classList.add('animate__animated', 'animate__fadeInUp');
      }, cards.length * 200);
    }
  });
};

onMounted(() => {
  const observer = new IntersectionObserver(handleIntersection, {
    threshold: 0.2,
    rootMargin: '50px'
  });

  if (sectionRef.value) {
    observer.observe(sectionRef.value);
  }

  // Cleanup
  return () => observer.disconnect();
});
</script>

<template>
  <section
    ref="sectionRef"
    class="testimonials-section relative bg-gray-50 py-16 sm:py-24"
    :class="{ 'opacity-0': !isVisible }"
  >
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="section-title mx-auto max-w-3xl text-center">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Apa Kata Klien Kami
        </h2>
        <p class="mt-4 text-lg leading-relaxed text-gray-600">
          Kepuasan klien adalah prioritas utama kami. Lihat apa yang mereka katakan tentang layanan kami.
        </p>
      </div>

      <!-- Testimonials Grid -->
      <div class="testimonials-grid mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="testimonial in testimonials"
          :key="testimonial.id"
          class="testimonial-card transform rounded-xl bg-white p-6 shadow-lg transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-xl"
        >
          <div class="flex items-center gap-4">
            <div class="h-16 w-16 overflow-hidden rounded-full bg-gray-200">
              <img
                :src="testimonial.image"
                :alt="`Foto ${testimonial.name}`"
                class="h-full w-full object-cover"
                loading="lazy"
                @error="(e: Event) => {
                  const target = e.target as HTMLImageElement;
                  if (target) target.src = '/images/default-avatar.jpg';
                }"
              />
            </div>
            <div>
              <h3 class="font-semibold text-gray-900">{{ testimonial.name }}</h3>
              <p class="text-sm text-gray-600">{{ testimonial.company }}</p>
            </div>
          </div>
          <p class="mt-4 text-gray-600">{{ testimonial.text }}</p>
          <div class="mt-4 flex text-orange-500">
            <svg v-for="i in 5" :key="i" class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
        </div>
      </div>

      <!-- Trust Badge -->
      <div class="trust-badge mt-16 text-center">
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
@import 'animate.css';

.testimonials-section {
  opacity: 1;
  transition: opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.testimonial-card {
  opacity: 0;
}

.animate__animated {
  --animate-duration: 1.2s;
  --animate-delay: 0s;
}

@media (prefers-reduced-motion: reduce) {
  .animate__animated {
    animation: none !important;
    opacity: 1 !important;
  }
}
</style>
