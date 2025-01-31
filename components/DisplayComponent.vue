<script setup lang="ts">

  const displayCode = ref(false);

  const changeDisplay = () => {
    displayCode.value = !displayCode.value;
    console.log(displayCode.value);
  }

</script>

<template>
    <div @click="displayCode = false" v-if="displayCode" class="z-20 fixed inset-0 bg-black/5 backdrop-blur-sm flex items-center justify-center">
      <div @click.stop class="h-[80dvh] w-[80%] transform rounded-lg bg-gray-50 dark:bg-slate-900 border-gray-500 transition-all">
        <div>
        </div>
      </div>
    </div>
  <div class="border border-gray-500 flex flex-col group">
    <div class="h-12">
      <div class="hidden m-2 items-center justify-end gap-2 group-hover:flex">
        <Icon name="ph:code" class="size-6" @click="changeDisplay()" />
        <Icon name="ph:github-logo" class="size-6"/>
      </div>
    </div>
    <div class="flex-1 mb-12 mx-6">
      <slot/>
    </div>
  </div>
</template>

