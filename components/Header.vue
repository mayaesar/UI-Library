<script setup lang="ts">
const prefersDarkMode = ref(true);
const theme = useCookie<"light" | "dark">("theme");

useHead({
  htmlAttrs: {
    class: theme.value === "dark" ? "dark" : undefined,
  },
});

onMounted(() => {
  prefersDarkMode.value = window.matchMedia(
    "(prefers-color-scheme: dark)",
  ).matches;

  if (!theme.value) {
    theme.value = prefersDarkMode.value ? "dark" : "light";
  }

  document.documentElement.classList.toggle("dark", theme.value === "dark");
});

const handleThemeChange = () => {
  theme.value = theme.value === "light" ? "dark" : "light";
  document.documentElement.classList.toggle("dark", theme.value === "dark");
};

const buttonDisplay = computed(() => {
  return theme.value ? "ph:sun" : "ph:moon";
});
</script>

<template>
  <header class="max-w-screen-lg mx-auto px-3">
    <div class="w-full flex items-center justify-between py-6">
      <p class="text-xl">UI Library</p>
      <button @click="handleThemeChange">
        <Icon :name="buttonDisplay" size="32" />
      </button>
    </div>
  </header>
</template>
