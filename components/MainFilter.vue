<template>
  <div class="flex text-gray-300 items-center [&:not(:last-child)]:border-r-[1px] border-gray-300 w-full h-12 justify-between [&:not(:first-child)]:pl-12 pr-12">
    <div class="flex gap-5 items-center">
      <div id="filter-icon" class="rounded-full border-[1px] border-gray-400 w-8 h-8 flex items-center justify-center"><Icon name="solar:chef-hat-linear" color="lightgray" /></div>
      <p id="filter-key">{{ mainFilter }}</p>
    </div>
    <div id="dropdown-btn"><Icon name="solar:alt-arrow-down-bold" color="lightgray" /></div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  mainFilter: String,
});
</script>
