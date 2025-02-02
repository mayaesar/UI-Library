<script setup lang="ts">
const variants = reactive({
  color: undefined,
  variant: undefined,
  size: undefined,
  rounded: undefined,
});

const { color, size, rounded, variant } = toRefs(variants);

const isIcon = computed(() => size.value === "icon");

const code = computed(() => {
  const attributes = Object.entries(variants)
    .map(([key, value]) => {
      return value ? `${key}="${value}"` : undefined;
    })
    .filter(Boolean);

  const str = attributes.join(" ");
  if (isIcon.value) {
    return `
    <Button${str ? " " + str : ""}><Icon name="ph:lego-smiley" /></Button>
  `;
  }
  return `
    <Button${str ? " " + str : ""}>Select your style</Button>
  `;
});
const copied = ref(false);
const copyToClipboard = async () => {
  try {
    await navigator.clipboard.writeText(`${code.value}`);
    copied.value = true;
    setTimeout(() => (copied.value = false), 2000);
  } catch (err) {
    console.error("Failed to copy!", err);
  }
};
</script>

<template>
  <NuxtLayout>
    <section>
      <h1 class="text-2xl">Button</h1>
      <div class="pt-6 justify-center items-center">
        <div class="h-44 border border-gray-500 flex flex-col">
          <div class="h-12">
            <div class="m-2 items-center justify-end gap-2 flex">
              <div class="flex-1 flex gap-2">
                <select
                  id="colors"
                  v-model="color"
                  name="colors"
                  class="bg-transparent"
                >
                  <option :value="undefined" disabled selected>Color</option>
                  <option value="white">white</option>
                  <option value="black">black</option>
                  <option value="blue">blue</option>
                  <option value="green">green</option>
                  <option value="yellow">yellow</option>
                  <option value="red">red</option>
                </select>

                <select
                  id="variants"
                  v-model="variant"
                  name="variants"
                  class="bg-transparent"
                >
                  <option :value="undefined" disabled selected>Style</option>
                  <option value="solid">filled</option>
                  <option value="outline">outlined</option>
                  <option value="ghost">ghost</option>
                  <option value="soft">soft</option>
                </select>
                <select
                  id="sizes"
                  v-model="size"
                  name="sizes"
                  class="bg-transparent"
                >
                  <option :value="undefined" disabled selected>Size</option>
                  <option value="xs">xs</option>
                  <option value="sm">sm</option>
                  <option value="md">md</option>
                  <option value="lg">lg</option>
                  <option value="xl">xl</option>
                  <option value="icon">icon</option>
                </select>
                <select
                  id="rounded"
                  v-model="rounded"
                  name="rounded"
                  class="bg-transparent"
                >
                  <option :value="undefined" disabled selected>Rounded</option>
                  <option value="none">none</option>
                  <option value="xs">xs</option>
                  <option value="sm">sm</option>
                  <option value="md">md</option>
                  <option value="lg">lg</option>
                  <option value="xl">xl</option>
                  <option value="full">full</option>
                </select>
              </div>
              <Icon name="ph:github-logo" class="size-6" />
            </div>
          </div>
          <div class="flex justify-center py-8">
            <Button
              v-if="isIcon"
              :color="color"
              :variant="variant"
              :size="size"
              :rounded="rounded"
            >
              <Icon name="ph:lego-smiley-bold" size="18" />
            </Button>
            <Button
              v-else
              :color="color"
              :variant="variant"
              :size="size"
              :rounded="rounded"
            >
              Select your style
            </Button>
          </div>
        </div>
        <div class="py-6 px-2 border border-t-transparent border-gray-500">
          <p class="text-xl">Code</p>
          <hr class="-mx-2 mt-2" />
          <button class="float-end m-2" @click="copyToClipboard()">
            <Icon v-if="copied" name="ph:check" size="24" />
            <Icon v-else name="ph:clipboard-text" size="24" />
          </button>

          <div class="overflow-x-auto overflow-y-auto">
            <Shiki lang="js" :code="code" />
          </div>
        </div>
      </div>
    </section>
  </NuxtLayout>
</template>
