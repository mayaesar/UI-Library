<script setup lang="ts">
const props = defineProps(["code"]);

const copied = ref(false);
const copyToClipboard = async () => {
  try {
    await navigator.clipboard.writeText(`${props.code}`);
    copied.value = true;
    setTimeout(() => (copied.value = false), 2000);
  } catch (err) {
    console.error("Failed to copy!", err);
  }
};
</script>

<template>
  <p class="text-xl">Code</p>
  <hr class="-mx-2 mt-2" />
  <div class="bg-gray-900 dark:bg-transparent text-white mt-6">
    <button class="float-end m-2" @click="copyToClipboard()">
      <Icon v-if="copied" name="ph:check" size="24" />
      <Icon v-else name="ph:clipboard-text" size="24" />
    </button>

    <div class="overflow-x-auto overflow-y-auto">
      <Shiki lang="js" :code="props.code" />
    </div>
  </div>
</template>
