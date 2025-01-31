<script setup lang="ts">
const prefersDarkMode = ref(false);

onMounted(() => {
  prefersDarkMode.value = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (prefersDarkMode.value) {
    document.documentElement.classList.add("dark");
  }
})

const handleThemeChange = () => {
  prefersDarkMode.value = !prefersDarkMode.value;
  if (prefersDarkMode.value) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}
const buttonDisplay = computed(() => {
  return prefersDarkMode.value ? "ph:sun" : "ph:moon";
});
</script>

<template>
  <header class="max-w-screen-lg mx-auto px-3">
    <div class="w-full flex items-center justify-between py-6">
      <p class="text-xl">UI Library</p>
      <button @click="handleThemeChange"><Icon :name="buttonDisplay" size="32"/></button>
    </div>

  </header>
</template>

