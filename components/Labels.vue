<script setup lang="ts">
const props = defineProps({
  recipe: Object,
});

const isQuick = () => {
  const time = Number(props.recipe.time);
  return time < 20;
};

const isBasicIngredients = () => {
  return props.recipe.basicIngredients;
};

const isBudgetFriendly = () => {
  return props.recipe.basicIngredients;
};
</script>

<template>
  <div labels class="flex gap-2">
    <div v-if="isQuick()" class="rounded-sm text-sm bg-base-200 text-base-content">
      <p class="px-2">< 20 minutes</p>
    </div>
    <div v-if="isBasicIngredients()" class="rounded-sm text-sm bg-base-200 text-base-content">
      <p class="px-2">basic ingredients</p>
    </div>
    <div v-if="isBudgetFriendly()" class="rounded-sm text-sm bg-base-200 text-base-content">
      <p class="px-2">budget friendly</p>
    </div>
    <div>
      <p></p>
    </div>
  </div>
</template>
