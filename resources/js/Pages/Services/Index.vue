<script setup lang="ts">
import { ref, onMounted } from 'vue';
import AppLayout from '@/Layouts/AppLayout.vue';
import { Building2, Truck, PaintBucket, Wrench, HardHat, Ruler } from 'lucide-vue-next';

const sectionRefs = ref<HTMLElement[]>([]);

const services = [
  {
    icon: Building2,
    title: 'Konstruksi Bangunan',
    description: 'Layanan konstruksi bangunan komersial dan residensial dengan standar kualitas tertinggi.',
    features: [
      'Gedung Perkantoran',
      'Pusat Perbelanjaan',
      'Apartemen & Kondotel',
      'Rumah Tinggal'
    ]
  },
  {
    icon: Truck,
    title: 'Infrastruktur',
    description: 'Pembangunan infrastruktur vital dengan teknologi modern dan tim ahli berpengalaman.',
    features: [
      'Jalan & Jembatan',
      'Bendungan',
      'Pelabuhan',
      'Bandara'
    ]
  },
  {
    icon: PaintBucket,
    title: 'Renovasi',
    description: 'Layanan renovasi profesional untuk memperbarui dan meningkatkan nilai properti Anda.',
    features: [
      'Redesain Interior',
      'Perbaikan Struktur',
      'Pembaruan Fasilitas',
      'Peningkatan Efisiensi'
    ]
  },
  {
    icon: Wrench,
    title: 'Pemeliharaan',
    description: 'Program pemeliharaan berkala untuk memastikan properti Anda tetap prima.',
    features: [
      'Inspeksi Rutin',
      'Perbaikan Preventif',
      'Pemeliharaan Sistem',
      'Pengelolaan Aset'
    ]
  },
  {
    icon: HardHat,
    title: 'Manajemen Proyek',
    description: 'Pengelolaan proyek konstruksi yang efisien dari perencanaan hingga serah terima.',
    features: [
      'Perencanaan Proyek',
      'Pengawasan Konstruksi',
      'Manajemen Sumber Daya',
      'Kontrol Kualitas'
    ]
  },
  {
    icon: Ruler,
    title: 'Desain & Perencanaan',
    description: 'Layanan desain dan perencanaan komprehensif untuk mewujudkan visi Anda.',
    features: [
      'Konsultasi Desain',
      'Perencanaan Arsitektur',
      'Analisis Kelayakan',
      'Estimasi Biaya'
    ]
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
          src="/images/services-bg.jpg"
          alt="Services Background"
          class="h-full w-full object-cover"
        />
      </div>
      <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div ref="sectionRefs" class="text-center">
          <h1 class="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Layanan Konstruksi Profesional
          </h1>
          <p class="mx-auto mt-6 max-w-2xl text-lg text-blue-100">
            Solusi konstruksi lengkap dengan standar kualitas tertinggi untuk setiap kebutuhan proyek Anda.
          </p>
        </div>
      </div>
    </section>

    <!-- Services Grid -->
    <section class="py-16 sm:py-24">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div
            v-for="(service, index) in services"
            :key="index"
            ref="sectionRefs"
            class="group rounded-xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <component
              :is="service.icon"
              class="h-12 w-12 text-orange-500 transition-transform duration-300 group-hover:scale-110"
            />
            <h3 class="mt-6 text-xl font-semibold text-blue-900">{{ service.title }}</h3>
            <p class="mt-4 text-gray-600">{{ service.description }}</p>
            <ul class="mt-6 space-y-3">
              <li
                v-for="(feature, featureIndex) in service.features"
                :key="featureIndex"
                class="flex items-center text-gray-600"
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

    <!-- CTA Section -->
    <section class="bg-blue-900 py-16">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div ref="sectionRefs" class="text-center">
          <h2 class="text-3xl font-bold text-white sm:text-4xl">
            Siap Memulai Proyek Anda?
          </h2>
          <p class="mx-auto mt-4 max-w-2xl text-lg text-blue-100">
            Hubungi kami untuk konsultasi gratis dan penawaran yang sesuai dengan kebutuhan Anda.
          </p>
          <div class="mt-8">
            <a
              href="/quote"
              class="inline-block rounded-lg bg-orange-600 px-8 py-3 text-lg font-semibold text-white transition-colors hover:bg-orange-700"
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
</style>
