<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { Award, Clock, ThumbsUp, Users } from 'lucide-vue-next';

interface TrustItem {
  icon: any;
  title: string;
  description: string;
}

const trustItems = ref<TrustItem[]>([
  {
    icon: Award,
    title: 'Kualitas Terjamin',
    description: 'Standar kualitas tertinggi dalam setiap proyek konstruksi'
  },
  {
    icon: Clock,
    title: 'Tepat Waktu',
    description: 'Komitmen penyelesaian proyek sesuai jadwal yang disepakati'
  },
  {
    icon: ThumbsUp,
    title: 'Berpengalaman',
    description: '25 tahun pengalaman dalam industri konstruksi'
  },
  {
    icon: Users,
    title: 'Tim Profesional',
    description: 'Didukung oleh tim ahli yang berpengalaman dan tersertifikasi'
  }
]);

const isVisible = ref(false);

onMounted(() => {
  // Observer untuk scroll animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        isVisible.value = true;
      }
    });
  }, {
    threshold: 0.1
  });

  // Observe trust section
  const trustSection = document.querySelector('.trust-section');
  if (trustSection) {
    observer.observe(trustSection);
  }
});
</script>

<template>
  <section class="trust-section bg-white py-16 lg:py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center">
        <h2
          :class="[
            'text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl',
            { 'animate__animated animate__fadeInDown': isVisible }
          ]"
        >
          Mengapa Memilih Kami?
        </h2>
        <p
          :class="[
            'mx-auto mt-4 max-w-2xl text-lg text-gray-600',
            { 'animate__animated animate__fadeIn animate__delay-1s': isVisible }
          ]"
        >
          25 tahun pengalaman dalam memberikan layanan konstruksi berkualitas tinggi dan material konstruksi terpercaya
        </p>
      </div>

      <!-- Trust Indicators Grid -->
      <div class="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div
          v-for="(item, index) in trustItems"
          :key="index"
          :class="[
            'trust-item rounded-xl p-6 text-center shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl',
            { 'animate__animated animate__fadeInUp': isVisible },
            `animate__delay-${index + 1}s`,
            index === 0 ? 'bg-blue-50' :
            index === 1 ? 'bg-orange-50' :
            index === 2 ? 'bg-gray-100' :
            'bg-yellow-50'
          ]"
        >
          <div class="flex flex-col items-center space-y-4">
            <component
              :is="item.icon"
              class="h-12 w-12"
              :class="[
                index === 0 ? 'text-blue-600' :
                index === 1 ? 'text-orange-600' :
                index === 2 ? 'text-gray-600' :
                'text-yellow-600'
              ]"
            />
            <h3 class="text-xl font-semibold text-gray-900">{{ item.title }}</h3>
            <p class="text-gray-600">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
/* Import animate.css */
@import 'animate.css';

/* Custom animation durations */
.animate__animated {
  --animate-duration: 1s;
}

.animate__delay-1s { --animate-delay: 0.2s; }
.animate__delay-2s { --animate-delay: 0.4s; }
.animate__delay-3s { --animate-delay: 0.6s; }
.animate__delay-4s { --animate-delay: 0.8s; }
</style>
