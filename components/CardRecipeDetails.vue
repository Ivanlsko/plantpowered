<script setup lang="ts">
defineProps({
  difficulty: String,
  time: String,
  price: String,
});

const convertMinutesToHours = (minutes: string) => {
  const minutesToNumber = Number(minutes);
  const hours = Math.floor(minutesToNumber / 60);
  const remainingMinutes = minutesToNumber % 60;
  return `${hours}:${remainingMinutes} h`;
};
</script>
<template>
  <div bottom-labels class="flex justify-between w-2/5">
    <div class="flex gap-2 items-center justify-center">
      <Icon name="solar:chef-hat-linear" color="black" />
      <p>{{ difficulty }}</p>
    </div>
    <div class="flex gap-2 items-center justify-center">
      <Icon name="solar:clock-circle-outline" color="black" />
      <p v-if="time !== undefined">{{ convertMinutesToHours(time) }}</p>
    </div>
    <!--     <div class="flex gap-2 items-center justify-center">
      <Icon name="solar:wallet-money-outline" color="black" />
      <p>{{ price }} €</p>
    </div> -->
  </div>
</template>
