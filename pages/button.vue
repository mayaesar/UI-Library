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
</script>

<template>
  <NuxtLayout>
    <section>
      <div class="flex gap-2 items-center">
        <a href="/">
          <Button size="icon" color="black" variant="soft">
            <Icon name="ph:arrow-left-bold" size="18" />
          </Button>
        </a>
        <h1 class="text-3xl">Button</h1>
      </div>

      <div class="pt-6 justify-center items-center">
        <div class="h-44 border border-gray-500 flex flex-col">
          <div class="h-12">
            <div class="m-2 items-center justify-end gap-2 flex">
              <div class="flex-1 flex gap-2">
                <Select
                  id="color"
                  v-model="color"
                  color="black"
                  variant="none"
                  :items="[
                    {
                      label: 'Select a color',
                      value: undefined,
                      disabled: true,
                    },
                    {
                      label: 'white',
                      value: 'white',
                    },
                    {
                      label: 'black',
                      value: 'black',
                    },
                    {
                      label: 'blue',
                      value: undefined,
                    },
                    {
                      label: 'green',
                      value: 'green',
                    },
                    {
                      label: 'yellow',
                      value: 'yellow',
                    },
                    {
                      label: 'red',
                      value: 'red',
                    },
                  ]"
                />

                <Select
                  id="variant"
                  v-model="variant"
                  color="black"
                  variant="none"
                  :items="[
                    {
                      label: 'Select a style',
                      value: undefined,
                      disabled: true,
                    },
                    {
                      label: 'solid',
                      value: undefined,
                    },
                    {
                      label: 'outline',
                      value: 'outline',
                    },
                    {
                      label: 'ghost',
                      value: 'ghost',
                    },
                    {
                      label: 'soft',
                      value: 'soft',
                    },
                  ]"
                />
                <Select
                  id="size"
                  v-model="size"
                  color="black"
                  variant="none"
                  :items="[
                    {
                      label: 'Select a size',
                      value: undefined,
                      disabled: true,
                    },
                    {
                      label: 'xs',
                      value: 'xs',
                    },
                    {
                      label: 'sm',
                      value: 'sm',
                    },
                    {
                      label: 'md',
                      value: undefined,
                    },
                    {
                      label: 'lg',
                      value: 'lg',
                    },
                    {
                      label: 'xl',
                      value: 'xl',
                    },
                    {
                      label: 'icon',
                      value: 'icon',
                    },
                  ]"
                />

                <Select
                  id="rounded"
                  v-model="rounded"
                  color="black"
                  variant="none"
                  :items="[
                    {
                      label: 'Select a radius',
                      value: undefined,
                      disabled: true,
                    },
                    {
                      label: 'none',
                      value: 'none',
                    },
                    {
                      label: 'xs',
                      value: 'xs',
                    },
                    {
                      label: 'sm',
                      value: 'sm',
                    },
                    {
                      label: 'md',
                      value: undefined,
                    },
                    {
                      label: 'lg',
                      value: 'lg',
                    },
                    {
                      label: 'xl',
                      value: 'xl',
                    },
                    {
                      label: 'full',
                      value: 'full',
                    },
                  ]"
                />
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
          <CodeDisplay :code="code" />
        </div>
      </div>
    </section>
  </NuxtLayout>
</template>
