<script setup>
defineProps({
  recipe: Object,
});

function round(macronutrient) {
  return macronutrient && Number(macronutrient) && Math.round(Number(macronutrient));
}
</script>
<template>
  <a :href="recipe.recipe_link" target="_blank">
    <div class="w-full card card-compact bg-base-100 p-2 text-primary-content">
      <figure class="rounded-lg">
        <div class="h-96 min-w-full flex items-center justify-center"><img :src="recipe.image_link" alt="Shoes" class="rounded-md" /></div>
      </figure>
      <div class="card-body rounded-lg my-2">
        <labels :recipe="recipe"></labels>
        <h2 class="card-title">{{ recipe.name }}</h2>
        <card-recipe-details :difficulty="recipe.difficulty" :time="Number(recipe.time)" :price="9.99"></card-recipe-details>
        <p class="text-gray-500">{{ recipe.description_short }}</p>
      </div>
      <!--     <div id="recipe-macros" class="flex gap-2">
      <div class="flex justify-around rounded-lg bg-neutral text-neutral-content text-sm w-3/4 p-1 py-2 items-center">
        <p>{{ round(recipe.macros?.proteins) }}g proteins</p>
        <p>{{ round(recipe.macros?.carbs) }}g carbs</p>
        <p>{{ round(recipe.macros?.fats) }}g fats</p>
      </div>

      <div class="flex justify-around rounded-lg bg-neutral text-neutral-content text-sm w-1/4 py-2 items-center">
        <p>{{ round(recipe.macros?.kcal) }} kcal</p>
      </div>
    </div> -->
    </div>
  </a>
</template>
