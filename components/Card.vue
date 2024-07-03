<script setup>
defineProps({
  recipe: Object,
});
</script>
<template>
  <NuxtLink href="/modal">
    <div mainwrapper>
      <div image class="h-80 overflow-hidden"><img class="w-full h-full object-cover rounded-md" :src="recipe.image_link" alt="Shoes" /></div>
      <div text class="mt-4 mb-4">
        <p class="text-xs text-gray-500 mb-2">{{ recipe.time }} MIN | {{ recipe.macros.kcal }} KCAL</p>
        <p class="text-lg font-medium mb-2">{{ recipe.name }}</p>
        <p class="text-sm w-[95%] text-gray-700">{{ recipe.description_short }}</p>
      </div>
    </div>
  </NuxtLink>
</template>
