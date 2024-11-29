<script setup lang="ts">
import { ref } from 'vue';
import { Link } from '@inertiajs/vue3';
import { Menu, X } from 'lucide-vue-next';
import DesktopNav from '@/Components/Layout/Header/DesktopNav.vue';
import FooterLinks from '@/Components/Layout/Footer/FooterLinks.vue';
import SocialLinks from '@/Components/Common/SocialLinks.vue';

const isOpen = ref(false);

const quickLinks = [
  { name: 'Beranda', href: '/' },
  { name: 'Tentang Kami', href: '/about' },
  { name: 'Layanan', href: '/services' },
  { name: 'Portofolio', href: '/portfolio' },
  { name: 'Blog', href: '/blog' }
];

const additionalLinks = [
  { name: 'Karir', href: '/careers' },
  { name: 'Testimoni', href: '/testimonials' },
  { name: 'Keberlanjutan', href: '/sustainability' },
  { name: 'FAQ', href: '/faq' }
];

const supportLinks = [
  { name: 'Hubungi Kami', href: '/contact' },
  { name: 'Minta Penawaran', href: '/quote' },
  { name: 'Syarat & Ketentuan', href: '/terms' },
  { name: 'Kebijakan Privasi', href: '/privacy' }
];
</script>

<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <!-- Header -->
    <header class="fixed top-0 z-50 w-full bg-white/80 backdrop-blur-md dark:bg-gray-800/80">
      <nav class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="flex h-16 items-center justify-between">
          <div class="flex-shrink-0">
            <Link href="/" class="text-2xl font-bold text-blue-900 dark:text-white">
              BuildCo
            </Link>
          </div>

          <DesktopNav :quick-links="quickLinks" />

          <!-- Mobile menu button -->
          <div class="flex md:hidden">
            <button
              @click="isOpen = !isOpen"
              class="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-200 dark:hover:bg-gray-700"
            >
              <Menu v-if="!isOpen" class="h-6 w-6" />
              <X v-else class="h-6 w-6" />
            </button>
          </div>
        </div>

        <!-- Mobile Navigation -->
        <div v-show="isOpen" class="md:hidden">
          <div class="space-y-1 px-2 pb-3 pt-2">
            <Link
              v-for="link in quickLinks"
              :key="link.name"
              :href="link.href"
              class="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-blue-900 hover:text-white dark:text-gray-200 dark:hover:bg-blue-700"
            >
              {{ link.name }}
            </Link>

            <Link
              href="/quote"
              class="mt-4 block rounded-md bg-orange-600 px-4 py-2 text-base font-medium text-white hover:bg-orange-700"
            >
              Minta Penawaran
            </Link>
          </div>
        </div>
      </nav>
    </header>

    <!-- Main Content -->
    <main class="pt-16">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="bg-blue-900 text-white dark:bg-gray-800">
      <div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <FooterLinks title="Tautan Cepat" :links="quickLinks" />
          <FooterLinks title="Informasi Tambahan" :links="additionalLinks" />
          <FooterLinks title="Dukungan" :links="supportLinks" />

          <!-- Contact & Social -->
          <div>
            <h3 class="text-lg font-semibold">Hubungi Kami</h3>
            <div class="mt-4 space-y-4">
              <p class="text-gray-300">
                Jl. Contoh No. 123<br />
                Jakarta, Indonesia<br />
                Phone: (021) 123-4567<br />
                Email: info@buildco.com
              </p>
              <SocialLinks />
            </div>
          </div>
        </div>

        <div class="mt-8 border-t border-gray-700 pt-8 text-center">
          <p class="text-sm text-gray-300">
            © {{ new Date().getFullYear() }} BuildCo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>
