<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import AppLayout from '@/Layouts/AppLayout.vue';
import { Building2, Truck, PaintBucket, Wrench, HardHat, Ruler, ChevronRight } from 'lucide-vue-next';
import { Link } from '@inertiajs/vue3';

const sectionRefs = ref<HTMLElement[]>([]);
const isLoading = ref(true);

// Kategori untuk filter
const categories = ref([
  { id: 'all', name: 'Semua' },
  { id: 'building', name: 'Bangunan' },
  { id: 'infrastructure', name: 'Infrastruktur' },
  { id: 'maintenance', name: 'Pemeliharaan' },
]);

const selectedCategory = ref('all');

const services = [
  {
    icon: Building2,
    title: 'Konstruksi Bangunan',
    description: 'Layanan konstruksi bangunan komersial dan residensial dengan standar kualitas tertinggi.',
    category: 'building',
    features: [
      'Gedung Perkantoran',
      'Pusat Perbelanjaan',
      'Apartemen & Kondotel',
      'Rumah Tinggal'
    ],
    priceRange: 'Mulai dari Rp 5M'
  },
  {
    icon: Truck,
    title: 'Infrastruktur',
    description: 'Pembangunan infrastruktur vital dengan teknologi modern dan tim ahli berpengalaman.',
    category: 'infrastructure',
    features: [
      'Jalan & Jembatan',
      'Bendungan',
      'Pelabuhan',
      'Bandara'
    ],
    priceRange: 'Mulai dari Rp 10M'
  },
  {
    icon: PaintBucket,
    title: 'Renovasi',
    description: 'Layanan renovasi profesional untuk memperbarui dan meningkatkan nilai properti Anda.',
    category: 'maintenance',
    features: [
      'Redesain Interior',
      'Perbaikan Struktur',
      'Pembaruan Fasilitas',
      'Peningkatan Efisiensi'
    ],
    priceRange: 'Mulai dari Rp 2M'
  },
  {
    icon: Wrench,
    title: 'Pemeliharaan',
    description: 'Program pemeliharaan berkala untuk memastikan properti Anda tetap prima.',
    category: 'maintenance',
    features: [
      'Inspeksi Rutin',
      'Perbaikan Preventif',
      'Pemeliharaan Sistem',
      'Pengelolaan Aset'
    ],
    priceRange: 'Mulai dari Rp 1M'
  },
  {
    icon: HardHat,
    title: 'Manajemen Proyek',
    description: 'Pengelolaan proyek konstruksi yang efisien dari perencanaan hingga serah terima.',
    category: 'building',
    features: [
      'Perencanaan Proyek',
      'Pengawasan Konstruksi',
      'Manajemen Sumber Daya',
      'Kontrol Kualitas'
    ],
    priceRange: 'Mulai dari Rp 10M'
  },
  {
    icon: Ruler,
    title: 'Desain & Perencanaan',
    description: 'Layanan desain dan perencanaan komprehensif untuk mewujudkan visi Anda.',
    category: 'building',
    features: [
      'Konsultasi Desain',
      'Perencanaan Arsitektur',
      'Analisis Kelayakan',
      'Estimasi Biaya'
    ],
    priceRange: 'Mulai dari Rp 2M'
  }
];

const filteredServices = computed(() => {
  if (selectedCategory.value === 'all') return services;
  return services.filter(service => service.category === selectedCategory.value);
});

const handleIntersection = (entries: IntersectionObserverEntry[]) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate__animated', 'animate__fadeInUp');
    }
  });
};

const navigateToService = (service: any) => {
  // Implementasi navigasi ke detail service
};

const addToRefs = (el: HTMLElement) => {
  if (el && !sectionRefs.value.includes(el)) {
    sectionRefs.value.push(el);
  }
};

onMounted(() => {
  const observer = new IntersectionObserver(handleIntersection, {
    threshold: 0.2,
    rootMargin: '50px'
  });

  sectionRefs.value.forEach(ref => {
    if (ref) observer.observe(ref);
  });

  // Simulate loading
  setTimeout(() => {
    isLoading.value = false;
  }, 800);
});
</script>

<template>
  <AppLayout>
    <!-- Breadcrumb -->
    <nav class="bg-gray-50 py-3" aria-label="Breadcrumb">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="flex items-center space-x-2 text-sm text-gray-600">
          <Link href="/" class="hover:text-blue-900">Beranda</Link>
          <ChevronRight class="h-4 w-4" />
          <span class="font-medium text-gray-900">Layanan</span>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section class="relative overflow-hidden bg-blue-900 py-32" aria-label="Layanan Utama">
      <div class="absolute inset-0 opacity-20">
        <img
          src="/images/services-bg.jpg"
          alt="Services Background"
          class="h-full w-full object-cover"
          loading="lazy"
        />
      </div>
      <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div :ref="(el) => addToRefs(el as HTMLElement)" class="text-center">
          <h1 class="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Layanan Konstruksi Profesional
          </h1>
          <p class="mx-auto mt-6 max-w-2xl text-lg text-blue-100">
            Solusi konstruksi lengkap dengan standar kualitas tertinggi untuk setiap kebutuhan proyek Anda.
          </p>
        </div>
      </div>
    </section>

    <!-- Filter Categories -->
    <div class="bg-white py-4 sticky top-0 z-10 shadow-sm">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="flex space-x-2 overflow-x-auto pb-2 scrollbar-hide">
          <button
            v-for="category in categories"
            :key="category.id"
            @click="selectedCategory = category.id"
            :class="[
              'px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all',
              selectedCategory === category.id
                ? 'bg-blue-900 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            ]"
          >
            {{ category.name }}
          </button>
        </div>
      </div>
    </div>

    <!-- Services Grid -->
    <section class="py-16 sm:py-24">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <!-- Skeleton Loading -->
        <div v-if="isLoading" class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div v-for="i in 6" :key="i" class="animate-pulse rounded-xl bg-gray-100 p-8">
            <div class="h-12 w-12 rounded-full bg-gray-200"></div>
            <div class="mt-6 h-6 w-2/3 rounded bg-gray-200"></div>
            <div class="mt-4 h-20 rounded bg-gray-200"></div>
          </div>
        </div>

        <!-- Services Cards -->
        <div v-else class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div
            v-for="(service, index) in filteredServices"
            :key="index"
            :ref="(el) => addToRefs(el as HTMLElement)"
            role="article"
            :aria-label="service.title"
            class="group rounded-xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer"
            @click="navigateToService(service)"
          >
            <component
              :is="service.icon"
              class="h-12 w-12 text-orange-500 transition-transform duration-300 group-hover:scale-110"
            />
            <h3 class="mt-6 text-xl font-semibold text-blue-900">{{ service.title }}</h3>
            <p class="mt-4 text-gray-600">{{ service.description }}</p>

            <!-- Harga -->
            <div class="mt-4 text-sm text-gray-500">
              <span class="font-medium">{{ service.priceRange }}</span>
            </div>

            <ul class="mt-6 space-y-3">
              <li
                v-for="(feature, featureIndex) in service.features"
                :key="featureIndex"
                class="flex items-center text-gray-600 group-hover:text-blue-900 transition-colors duration-200"
              >
                <svg class="mr-2 h-5 w-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                {{ feature }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Mobile Sticky CTA -->
    <div class="fixed bottom-0 left-0 right-0 bg-white p-4 shadow-lg md:hidden">
      <a
        href="/quote"
        class="block w-full rounded-lg bg-orange-600 px-8 py-3 text-center text-lg font-semibold text-white
        transition-all duration-300 hover:bg-orange-700 active:scale-95
        focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
      >
        Minta Penawaran
      </a>
    </div>

    <!-- CTA Section (hidden on mobile due to sticky CTA) -->
    <section class="bg-blue-900 py-16 hidden md:block">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div :ref="(el) => addToRefs(el as HTMLElement)" class="text-center">
          <h2 class="text-3xl font-bold text-white sm:text-4xl">
            Siap Memulai Proyek Anda?
          </h2>
          <p class="mx-auto mt-4 max-w-2xl text-lg text-blue-100">
            Hubungi kami untuk konsultasi gratis dan penawaran yang sesuai dengan kebutuhan Anda.
          </p>
          <div class="mt-8">
            <a
              href="/quote"
              class="inline-block rounded-lg bg-orange-600 px-8 py-3 text-lg font-semibold text-white
              transition-all duration-300 hover:bg-orange-700 hover:scale-105
              focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
            >
              Minta Penawaran
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

/* Hide scrollbar but keep functionality */
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
</style>
