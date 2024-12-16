<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import AppLayout from '@/Layouts/AppLayout.vue';
import { Building2, Users, Truck, Factory } from 'lucide-vue-next';

const sectionRefs = ref<HTMLElement[]>([]);

const portfolioItems = [
  {
    title: 'Gedung Perkantoran Modern',
    category: 'Bangunan Komersial',
    location: 'Jakarta Selatan',
    year: '2023',
    description: 'Pembangunan gedung perkantoran 20 lantai dengan konsep modern dan ramah lingkungan.',
    image: '/images/portfolio-1.jpg',
    icon: Building2
  },
  {
    title: 'Perumahan Elite "Green Valley"',
    category: 'Residensial',
    location: 'Bandung',
    year: '2022',
    description: 'Pengembangan kompleks perumahan mewah dengan 150 unit rumah dan fasilitas lengkap.',
    image: '/images/portfolio-2.jpg',
    icon: Users
  },
  {
    title: 'Jembatan Penghubung Antar-Pulau',
    category: 'Infrastruktur',
    location: 'Kepulauan Riau',
    year: '2023',
    description: 'Konstruksi jembatan sepanjang 1.5 km yang menghubungkan dua pulau utama.',
    image: '/images/portfolio-3.jpg',
    icon: Truck
  },
  {
    title: 'Pabrik Manufaktur Otomotif',
    category: 'Industrial',
    location: 'Karawang',
    year: '2022',
    description: 'Pembangunan fasilitas manufaktur modern dengan luas 50.000 m².',
    image: '/images/portfolio-4.jpg',
    icon: Factory
  }
];

const categories = ['Semua', 'Bangunan Komersial', 'Residensial', 'Infrastruktur', 'Industrial'];
const activeCategory = ref('Semua');

const filteredPortfolio = computed(() => {
  if (activeCategory.value === 'Semua') {
    return portfolioItems;
  }
  return portfolioItems.filter(item => item.category === activeCategory.value);
});

const handleIntersection = (entries: IntersectionObserverEntry[]) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate__animated', 'animate__fadeInUp');
    }
  });
};

onMounted(() => {
  const observer = new IntersectionObserver(handleIntersection, {
    threshold: 0.2,
    rootMargin: '50px'
  });

  sectionRefs.value.forEach(ref => {
    if (ref) observer.observe(ref);
  });
});
</script>

<template>
  <AppLayout>
    <!-- Hero Section -->
    <section class="relative overflow-hidden bg-blue-900 py-32">
      <div class="absolute inset-0 opacity-20">
        <img
          src="/images/portfolio-bg.jpg"
          alt="Portfolio Background"
          class="h-full w-full object-cover"
        />
      </div>
      <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div ref="sectionRefs" class="text-center">
          <h1 class="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Portofolio Proyek Kami
          </h1>
          <p class="mx-auto mt-6 max-w-2xl text-lg text-blue-100">
            Berbagai proyek unggulan yang telah kami selesaikan dengan standar kualitas tertinggi.
          </p>
        </div>
      </div>
    </section>

    <!-- Category Filter -->
    <section class="bg-gray-50 py-8">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="flex flex-wrap justify-center gap-4">
          <button
            v-for="category in categories"
            :key="category"
            @click="activeCategory = category"
            :class="[
              'rounded-full px-6 py-2 text-sm font-medium transition-all duration-300',
              activeCategory === category
                ? 'bg-blue-900 text-white'
                : 'bg-white text-gray-600 hover:bg-orange-500 hover:text-white'
            ]"
          >
            {{ category }}
          </button>
        </div>
      </div>
    </section>

    <!-- Portfolio Grid -->
    <section class="py-16 sm:py-24">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
          <div
            v-for="(item, index) in filteredPortfolio"
            :key="index"
            ref="sectionRefs"
            class="group overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div class="relative h-64 overflow-hidden">
              <img
                :src="item.image"
                :alt="item.title"
                class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
            <div class="p-6">
              <div class="flex items-center gap-4">
                <component
                  :is="item.icon"
                  class="h-8 w-8 text-orange-500"
                />
                <div>
                  <h3 class="text-xl font-semibold text-blue-900">{{ item.title }}</h3>
                  <p class="text-gray-600">{{ item.category }}</p>
                </div>
              </div>
              <div class="mt-4 flex gap-4 text-sm text-gray-600">
                <span>{{ item.location }}</span>
                <span>•</span>
                <span>{{ item.year }}</span>
              </div>
              <p class="mt-4 text-gray-600">{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="bg-blue-900 py-16">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div ref="sectionRefs" class="text-center">
          <h2 class="text-3xl font-bold text-white sm:text-4xl">
            Siap Memulai Proyek Anda?
          </h2>
          <p class="mx-auto mt-4 max-w-2xl text-lg text-blue-100">
            Mari diskusikan ide proyek Anda dengan tim ahli kami.
          </p>
          <div class="mt-8">
            <a
              href="/quote"
              class="inline-block rounded-lg bg-orange-600 px-8 py-3 text-lg font-semibold text-white transition-colors hover:bg-orange-700"
            >
              Konsultasi Gratis
            </a>
          </div>
        </div>
      </div>
    </section>
  </AppLayout>
</template>

<style>
@import 'animate.css';

.animate__animated {
  --animate-duration: 1.2s;
  --animate-delay: 0.2s;
}
</style>
