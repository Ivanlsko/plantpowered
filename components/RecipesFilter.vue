<script setup>
defineProps({
  recipe: Object,
});

const filters = ['Meal Category', 'Cooking Time', 'Allergy Information', 'Dietary Preference'];
</script>
<template>
  <div class="flex justify-between mb-8">
    <div class="flex gap-2">
      <recipe-filter v-for="filter in filters" :filter="filter"></recipe-filter>
    </div>
    <div class="flex gap-6">
      <recipe-count></recipe-count>
      <div divider class="w-[1px] my-1 bg-slate-200"></div>
      <recipe-sort></recipe-sort>
    </div>
  </div>
</template>
