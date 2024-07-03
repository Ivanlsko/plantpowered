<template>
  <div class="flex justify-between px-12 py-8">
    <MainFilter v-for="mainFilter in mainFilters" :mainFilter="mainFilter"></MainFilter>
  </div>
</template>

<script setup lang="ts">
const mainFilters = ['time', 'difficulty', 'protein', 'kcal'];
</script>
