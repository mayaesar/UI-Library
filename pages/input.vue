<script setup lang="ts">
const variants = reactive({
  color: undefined,
  variant: undefined,
  size: undefined,
  rounded: undefined,
});
const other = reactive({
  type: undefined,
});

const { color, size, rounded, variant } = toRefs(variants);

const { type } = toRefs(other);

const code = computed(() => {
  const attributes = Object.entries(variants)
    .map(([key, value]) => {
      return value ? `${key}="${value}"` : undefined;
    })
    .filter(Boolean);
  const oAttributes = Object.entries(other)
    .map(([key, value]) => {
      return value ? `${key}="${value}"` : undefined;
    })
    .filter(Boolean);

  const str = attributes.join(" ");

  const oStr = oAttributes.join(" ");

  return `
    <Input${str ? " " + str : ""}${oStr ? " " + oStr : ""}/>
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
      <div class="flex gap-2 items-center">
        <a href="/">
          <Button size="icon" color="black" variant="soft">
            <Icon name="ph:arrow-left-bold" size="18" />
          </Button>
        </a>
        <h1 class="text-3xl">Input</h1>
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
                      value: undefined,
                    },
                    {
                      label: 'blue',
                      value: 'blue',
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
                  id="type"
                  v-model="type"
                  color="black"
                  variant="none"
                  :items="[
                    {
                      label: 'Select a type',
                      value: undefined,
                      disabled: true,
                    },
                    {
                      label: 'text',
                      value: undefined,
                    },
                    {
                      label: 'date',
                      value: 'date',
                    },
                    {
                      label: 'email',
                      value: 'email',
                    },
                    {
                      label: 'file',
                      value: 'file',
                    },
                    {
                      label: 'number',
                      value: 'number',
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
                      label: 'outline',
                      value: undefined,
                    },
                    {
                      label: 'none',
                      value: 'none',
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
                      value: undefined,
                    },
                    {
                      label: 'md',
                      value: 'md',
                    },
                    {
                      label: 'lg',
                      value: 'lg',
                    },
                    {
                      label: 'xl',
                      value: 'xl',
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
          <div class="flex justify-center py-8 px-8">
            <Input
              :color="color"
              :variant="variant"
              :size="size"
              :rounded="rounded"
              :type="type"
              leading-icon="ph:magnifying-glass"
            />
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
