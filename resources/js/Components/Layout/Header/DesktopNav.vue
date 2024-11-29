<script setup lang="ts">
import { Link } from '@inertiajs/vue3';
import ServicesDropdown from './ServicesDropdown.vue';

defineProps<{
  quickLinks: Array<{ name: string; href: string }>;
}>();
</script>

<template>
  <div class="hidden md:block">
    <div class="ml-10 flex items-center space-x-4">
      <Link
        v-for="link in quickLinks"
        :key="link.name"
        :href="link.href"
        class="rounded-md px-3 py-2 text-sm font-medium text-gray-700 transition hover:bg-blue-900 hover:text-white dark:text-gray-200 dark:hover:bg-blue-700"
      >
        {{ link.name }}
      </Link>

      <ServicesDropdown />

      <Link
        href="/quote"
        class="rounded-md bg-orange-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-orange-700"
      >
        Minta Penawaran
      </Link>
    </div>
  </div>
</template>
