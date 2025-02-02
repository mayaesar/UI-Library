<script setup lang="ts">
const myComponents = [
  { name: "Alert", link: "/alert" },
  { name: "Button", link: "/button" },
  { name: "Input", link: "/input" },
  { name: "Select", link: "/select" },
];
</script>

<template>
  <section class="grid grid-cols-4">
    <div v-for="(comp, index) in myComponents" :key="index">
      <a
        class="w-full flex flex-col items-center justify-center gap-2 py-4 px-6"
        :href="comp.link"
      >
        <div
          class="bg-gray-500 w-full aspect-video rounded-lg flex justify-center items-center"
        ></div>
        <p class="text-lg">{{ comp.name }}</p>
      </a>
    </div>
  </section>
</template>
