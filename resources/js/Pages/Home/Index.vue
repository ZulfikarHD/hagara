<script setup lang="ts">
import { Head } from '@inertiajs/vue3';
import HeroSection from './Partials/HeroSection.vue';
import TrustIndicator from './Partials/TrustIndicator.vue';
import PartnerSection from './Partials/PartnerSection.vue';
import ServiceSection from './Partials/ServiceSection.vue';
import ProjectSection from './Partials/ProjectSection.vue';
import TestimonialsSection from './Partials/TestimonialsSection.vue';
import CallToActionSection from './Partials/CallToActionSection.vue';
// import FloatingWhatsapp from '@/Components/FloatingWhatsapp.vue';
import AppLayout from '@/Layouts/AppLayout.vue';

</script>

<template>
    <AppLayout>
        <Head>
          <title>PT. Construction Company - Building Better Future</title>
          <meta name="description" content="Leading construction and material supplier company with 25+ years of experience delivering innovative and sustainable solutions for your projects." />
        </Head>

        <main class="bg-gray-50">
          <!-- Hero Section -->
          <HeroSection />

          <!-- Trust Indicator Section -->
          <TrustIndicator />

          <!-- Partner Section -->
          <PartnerSection />

          <!-- Our Services Section -->
          <ServiceSection />

          <!-- Our Projects Section -->
          <ProjectSection />

          <!-- Testimonials Section -->
          <TestimonialsSection />

          <!-- Quick Contact Section -->
          <CallToActionSection />

          <!-- Floating Whatsapp Button -->
          <!-- <FloatingWhatsapp /> -->
        </main>
    </AppLayout>
</template>

<style scoped>
/* Smooth scroll behavior */
html {
  scroll-behavior: smooth;
}

/* Section transitions */
section {
  @apply transition-opacity duration-700;
}

/* Improve performance with hardware acceleration */
main {
  will-change: transform;
  transform: translateZ(0);
}
</style>
