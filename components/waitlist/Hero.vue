<template>
  <div>
    <h1 class="text-4xl font-medium mb-6 leading-[2.7rem]">We'll Solve Your 'What Should I Cook?' Dilemma for Good!</h1>
    <p class="mb-6">We understand you're busy. That's why we're curating a vast database of recipes you can make in under 20 minutes.</p>
    <div class="flex gap-4 mb-10 items-center">
      <NuxtLink href="/waitlist/join">
        <div class="bg-black text-white centered p-4 px-8">
          <p class="whitespace-nowrap">Join the waitlist</p>
        </div>
      </NuxtLink>
      <p class="">And get 10 quick recipes instantly!</p>
    </div>
  </div>
  <div image class="w-full h-60"><img class="image-placeholder" src="" alt="" /></div>
</template>

<script setup>
const showPopup = ref(false);
</script>
