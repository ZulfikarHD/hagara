<script setup lang="ts">
import { onMounted, ref, nextTick } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const sectionRef = ref<HTMLElement | null>(null);

onMounted(() => {
  if (!sectionRef.value) return;

  nextTick(() => {
    try {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.value,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
          markers: false,
          scrub: 0.5
        }
      });

      // Smoother title animation with longer duration
      tl.from('.section-title', {
        y: 80,
        opacity: 0,
        duration: 1.8,
        ease: "power2.out",
        clearProps: "all"
      })

      // Smoother card animations with better stagger and longer duration
      .from('.project-card', {
        y: 100,
        opacity: 0,
        scale: 0.95,
        duration: 1.8,
        stagger: {
          amount: 1.2,
          ease: "power2.inOut"
        },
        ease: "power2.out",
        clearProps: "all"
      }, "-=1.2");

      // Smoother hover animations
      gsap.utils.toArray('.project-card').forEach((card: any) => {
        card.addEventListener('mouseenter', () => {
          gsap.to(card, {
            y: -15,
            scale: 1.03,
            duration: 0.8,
            ease: "power2.out"
          });
        });

        card.addEventListener('mouseleave', () => {
          gsap.to(card, {
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "power2.inOut"
          });
        });
      });

      return () => {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      };
    } catch (error) {
      console.error('Animation setup failed:', error);
    }
  });
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
  will-change: transform, opacity;
  backface-visibility: hidden;
  transform: translateZ(0);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.project-card img {
  transition: transform 1.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.project-card:hover img {
  transform: scale(1.08);
}

.project-card .gradient-overlay {
  transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

@media (prefers-reduced-motion: reduce) {
  .project-card {
    transition: none;
  }

  .project-card img {
    transition: none;
  }
}
</style>
