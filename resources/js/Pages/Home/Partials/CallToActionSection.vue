<script setup lang="ts">
import { onMounted, ref } from 'vue';

const isVisible = ref(false);

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        isVisible.value = true;
      }
    });
  }, { threshold: 0.1 });

  const section = document.querySelector('.cta-section');
  if (section) observer.observe(section);
});
</script>

<template>
  <section
    class="cta-section relative overflow-hidden bg-blue-900 py-16 sm:py-24"
    :class="{ 'animate__animated animate__fadeIn': isVisible }"
  >
    <!-- Background Pattern -->
    <div class="absolute inset-0 opacity-10">
      <div class="h-full w-full" style="background-image: url('/images/pattern.svg');"></div>
    </div>

    <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div
        class="cta-content mx-auto max-w-3xl text-center"
        :class="{ 'animate__animated animate__fadeInUp animate__delay-1s': isVisible }"
      >
        <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
          Siap Memulai Proyek Anda?
        </h2>

        <p class="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-blue-100">
          Hubungi kami sekarang untuk konsultasi gratis dan penawaran khusus untuk proyek konstruksi atau kebutuhan material Anda.
        </p>

        <div
          class="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          :class="{ 'animate__animated animate__fadeInUp animate__delay-2s': isVisible }"
        >
          <a
            href="#contact"
            class="transform rounded-lg bg-orange-500 px-8 py-3 text-lg font-semibold text-white transition duration-500 ease-in-out hover:-translate-y-1 hover:bg-orange-400 hover:shadow-lg"
          >
            Hubungi Kami
          </a>

          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            class="flex items-center gap-2 rounded-lg border-2 border-white px-8 py-3 text-lg font-semibold text-white transition duration-500 hover:bg-white hover:text-blue-900"
          >
            <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
            </svg>
            WhatsApp
          </a>
        </div>

        <p
          class="mt-8 text-sm text-blue-200"
          :class="{ 'animate__animated animate__fadeIn animate__delay-3s': isVisible }"
        >
          Jam Operasional: Senin - Jumat (08.00 - 17.00 WIB)
        </p>
      </div>
    </div>
  </section>
</template>

<style>
@import 'animate.css';

.animate__animated {
  --animate-duration: 1.2s;
  --animate-delay: 0.5s;
}

.cta-section {
  background-image: linear-gradient(to bottom right, rgba(30, 58, 138, 0.95), rgba(30, 58, 138, 0.98));
}
</style>
