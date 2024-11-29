<script setup lang="ts">
import { Link } from '@inertiajs/vue3';

defineProps<{
  title: string;
  links: Array<{ name: string; href: string }>;
}>();
</script>

<template>
  <div>
    <h3 class="text-lg font-semibold">{{ title }}</h3>
    <ul class="mt-4 space-y-2">
      <li v-for="link in links" :key="link.name">
        <Link :href="link.href" class="text-gray-300 hover:text-white">
          {{ link.name }}
        </Link>
      </li>
    </ul>
  </div>
</template>
