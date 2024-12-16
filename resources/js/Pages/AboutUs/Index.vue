<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { Building2, Users, Target, Award } from 'lucide-vue-next';
import AppLayout from '@/Layouts/AppLayout.vue';

const isVisible = ref(false);
const sectionRefs = ref<(HTMLElement | null)[]>([]);

// Dummy data
const stats = [
  {
    icon: Building2,
    value: '150+',
    label: 'Proyek Selesai'
  },
  {
    icon: Users,
    value: '50+',
    label: 'Tim Ahli'
  },
  {
    icon: Target,
    value: '15+',
    label: 'Tahun Pengalaman'
  },
  {
    icon: Award,
    value: '20+',
    label: 'Penghargaan'
  }
];

const values = [
  {
    title: 'Kualitas',
    description: 'Kami berkomitmen untuk memberikan hasil konstruksi berkualitas tinggi dengan standar keamanan terbaik.'
  },
  {
    title: 'Integritas',
    description: 'Kejujuran dan transparansi adalah fondasi dari setiap proyek yang kami kerjakan.'
  },
  {
    title: 'Inovasi',
    description: 'Kami terus mengadopsi teknologi dan metode terbaru untuk memberikan solusi konstruksi terbaik.'
  }
];

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
          src="/images/construction-bg.jpg"
          alt="Construction Background"
          class="h-full w-full object-cover"
        />
      </div>
      <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div ref="sectionRefs" class="text-center">
          <h1 class="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Membangun Masa Depan Yang Lebih Baik
          </h1>
          <p class="mx-auto mt-6 max-w-2xl text-lg text-blue-100">
            Dengan pengalaman lebih dari 15 tahun, kami telah membangun reputasi sebagai mitra konstruksi yang terpercaya dan profesional.
          </p>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="relative -mt-16">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 gap-6 rounded-xl bg-white p-8 shadow-xl sm:grid-cols-2 lg:grid-cols-4">
          <div
            v-for="(stat, index) in stats"
            :key="index"
            ref="sectionRefs"
            class="flex flex-col items-center p-6 text-center"
          >
            <component
              :is="stat.icon"
              class="h-12 w-12 text-orange-500"
            />
            <span class="mt-4 text-3xl font-bold text-blue-900">{{ stat.value }}</span>
            <span class="mt-2 text-gray-600">{{ stat.label }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- About Content -->
    <section class="py-16 sm:py-24">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="grid gap-12 lg:grid-cols-2">
          <div ref="sectionRefs" class="space-y-6">
            <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Pengalaman dan Keahlian Yang Terpercaya
            </h2>
            <p class="text-lg text-gray-600">
              Sebagai perusahaan konstruksi terkemuka, kami memiliki dedikasi untuk memberikan layanan konstruksi berkualitas tinggi dengan fokus pada kebutuhan klien. Tim ahli kami siap memberikan solusi inovatif untuk setiap tantangan konstruksi.
            </p>
            <p class="text-lg text-gray-600">
              Kami mengutamakan keselamatan, kualitas, dan ketepatan waktu dalam setiap proyek. Dengan pengalaman yang luas di berbagai sektor konstruksi, kami siap menjadi mitra terpercaya dalam mewujudkan visi Anda.
            </p>
          </div>
          <div ref="sectionRefs" class="relative">
            <img
              src="/images/about-image.jpg"
              alt="Tim Konstruksi"
              class="rounded-xl shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Values Section -->
    <section class="bg-gray-50 py-16 sm:py-24">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div ref="sectionRefs" class="text-center">
          <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Nilai-Nilai Kami
          </h2>
          <p class="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Prinsip-prinsip yang memandu setiap langkah kami dalam memberikan layanan terbaik.
          </p>
        </div>

        <div class="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div
            v-for="(value, index) in values"
            :key="index"
            ref="sectionRefs"
            class="rounded-xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <h3 class="text-xl font-semibold text-blue-900">{{ value.title }}</h3>
            <p class="mt-4 text-gray-600">{{ value.description }}</p>
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

