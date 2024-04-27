<template>
  <section class="p-4 md:p-6 lg:p-8 bg-gray-50">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-[500px] md:max-w-[950px] lg:max-w-[1400px] gap-4 mx-auto"><card class="card-bordered" v-for="recipe in recipes" :recipe="recipe"></card></div>
  </section>
</template>

<script setup>
import recipes from '@/recipes';
</script>
