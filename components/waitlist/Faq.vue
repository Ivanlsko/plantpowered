<template>
  <div class="faq border-b-[1px] mb-4 last:mb-0 pb-4" @click="expanded = !expanded">
    <div question class="flex justify-between items-center">
      <h3 class="text-[20px]">System requirements</h3>
      <div class="w-2 h-2"><img class="image-placeholder" alt="" /></div>
    </div>
    <div answer v-if="expanded" class="mt-4">
      <p>Acme automates your subscription revenue and customer reporting. Just connect your data and Acme will calculate and visualize your most important metrics.</p>
    </div>
  </div>
</template>

<script setup>
const expanded = ref(false);
</script>
