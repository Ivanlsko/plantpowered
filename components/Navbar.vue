<template>
  <div class="bg-primary rounded-t-2xl flex items-center w-full justify-between">
    <div>
      <div logo class="py-1 px-3 rounded-md bg-black text-white">
        <a class="text-md flex items-center gap-1 font-medium"><p>fastnhealthy</p></a>
      </div>
    </div>
    <div v-if="!isWaitlist">
      <ul class="flex gap-6">
        <NuxtLink href="/" class="text-gray-400" :class="{'font-bold': isActive}">All recipes</NuxtLink>
        <NuxtLink href="/about" class="text-gray-400"">About</NuxtLink>
      </ul>
    </div>
  </div>
</template>


<script setup>
const route = useRoute()
const isWaitlist = route.fullPath.includes("/waitlist")
</script>