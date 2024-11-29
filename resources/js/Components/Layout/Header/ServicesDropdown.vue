<script setup lang="ts">
import { ref } from 'vue';
import { Link } from '@inertiajs/vue3';
import { ChevronDown } from 'lucide-vue-next';

const isServicesOpen = ref(false);

const services = [
  { name: 'Konstruksi Residensial', href: '/services/residential' },
  { name: 'Konstruksi Komersial', href: '/services/commercial' },
  { name: 'Renovasi & Rekonstruksi', href: '/services/renovation' },
  { name: 'Manajemen Proyek', href: '/services/project-management' },
  { name: 'Penyediaan Material', href: '/services/material-supply' }
];
</script>

<template>
  <div class="relative">
    <button
      @click="isServicesOpen = !isServicesOpen"
      class="flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-700 transition hover:bg-blue-900 hover:text-white dark:text-gray-200 dark:hover:bg-blue-700"
    >
      Layanan
      <ChevronDown class="ml-1 h-4 w-4" />
    </button>

    <div
      v-show="isServicesOpen"
      class="absolute right-0 mt-2 w-48 rounded-md bg-white py-2 shadow-lg dark:bg-gray-800"
    >
      <Link
        v-for="service in services"
        :key="service.name"
        :href="service.href"
        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
      >
        {{ service.name }}
      </Link>
    </div>
  </div>
</template>
