<script setup lang="ts">
const myComponents = [
  { name: "Alert", link: "/alert" },
  { name: "Toggle", link: "/" },
];
</script>

<template>
  <section class="grid grid-cols-4">
    <div v-for="(comp, index) in myComponents" :key="index">
      <a
        class="w-full flex flex-col items-center justify-center gap-2 py-4 px-6"
        :href="comp.link"
      >
        <div class="bg-gray-500 w-full aspect-video rounded-lg"></div>
        <p class="text-lg">{{ comp.name }}</p>
      </a>
    </div>
  </section>
</template>
