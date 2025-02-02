<script setup lang="ts">
import Button from "~/pages/button.vue";
</script>

<template>
  <NuxtLayout>
    <section>
      <div class="flex gap-2 items-center">
        <Button size="icon" color="black" variant="soft">
          <Icon name="ph:arrow-left-bold" size="18" />
        </Button>
        <h1 class="text-3xl">Alert</h1>
      </div>
    </section>
  </NuxtLayout>
</template>
