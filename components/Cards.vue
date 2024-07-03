<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-[500px] md:max-w-[950px] lg:max-w-[1400px] gap-4 mx-auto"><card class="card-bordered rounded-2xl" v-for="recipe in recipes" :recipe="recipe.attributes"></card></div>
</template>

<script setup>
//import recipes from '@/recipes';
/* import uploadRecipes from '~/uploadRecipes';
uploadRecipes(recipes); */

const { data: recipes } = await useFetch('http://localhost:1337/api/recipes?populate=*', {
  transform: (_recipes) => _recipes.data,
});
console.log(recipes);
</script>
