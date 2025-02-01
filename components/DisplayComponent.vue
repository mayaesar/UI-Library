<script setup lang="ts">
type Props = {
  code: string;
};

const { code } = defineProps<Props>();
const displayCode = ref(false);

const changeDisplay = () => {
  displayCode.value = !displayCode.value;
  console.log(displayCode.value);
};
</script>

<template>
  <div
    v-if="displayCode"
    class="z-20 fixed inset-0 bg-black/5 backdrop-blur-sm flex items-center justify-center"
    @click="displayCode = false"
  >
    <div
      class="h-[80dvh] w-[80%] transform rounded-lg bg-gray-50 dark:bg-slate-900 border-gray-500 transition-all"
      @click.stop
    >
      <div
        class="border border-gray-500 rounded-lg m-auto mt-12 max-w-[80%] h-96 p-2 overflow-x-auto overflow-y-auto"
      >
        <p>Code</p>
        <hr class="border-gray-500 mb-6" />
        <Shiki lang="js" :code="code" />
      </div>
    </div>
  </div>
  <div class="border border-gray-500 flex flex-col group">
    <div class="h-12">
      <div class="hidden m-2 items-center justify-end gap-2 group-hover:flex">
        <Icon name="ph:code" class="size-6" @click="changeDisplay()" />
        <Icon name="ph:github-logo" class="size-6" />
      </div>
    </div>
    <div class="flex-1 mb-12 mx-6">
      <slot />
    </div>
  </div>
</template>

<style>
code.shiki {
  background: transparent !important;
}
</style>
