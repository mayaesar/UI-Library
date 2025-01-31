<script setup lang="ts">

</script>

<template>
  <div class="border border-gray-500 flex flex-col group ">
    <div class="h-12">
      <div class="hidden m-2 items-center justify-end gap-2 group-hover:flex">
        <Icon name="ph:code" class="size-6"/>
        <Icon name="ph:github-logo" class="size-6"/>
      </div>
    </div>
    <div class="flex-1 mb-12 mx-6">
      <slot/>
    </div>
  </div>
</template>

