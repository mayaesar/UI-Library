<script setup lang="ts">
import { tv } from "tailwind-variants";

const selectConfig = tv({
  base: "bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 relative block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0",
  variants: {
    color: {
      white: {
        outline: "focus:ring-gray-500 dark:focus:ring-gray-400",
        none: "",
      },
      black: {
        outline:
          "bg-transparent dark:bg-transparent focus:ring-gray-500 dark:focus:ring-gray-400",
        none: "bg-transparent dark:bg-transparent",
      },
      blue: {
        outline: "focus:ring-blue-500 dark:focus:ring-blue-400",
        none: "",
      },
      green: {
        outline: "focus:ring-green-500 dark:focus:ring-green-400",
        none: "",
      },
      yellow: {
        outline: "focus:ring-yellow-500 dark:focus:ring-yellow-400",
        none: "",
      },
      red: {
        outline: "focus:ring-red-500 dark:focus:ring-red-400",
        none: "",
      },
    },
    size: {
      xs: "text-xs py-1 px-2",
      sm: "text-sm py-2 px-3",
      md: "text-base py-3 px-4",
      lg: "text-lg py-3 px-4",
      xl: "text-xl py-3 px-4",
    },
    rounded: {
      none: "rounded-none",
      xs: "rounded-xs",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      xl: "rounded-xl",
      full: "rounded-full",
    },
    variant: {
      none: "ring-0 focus:ring-0",
      outline:
        "ring-gray-300 dark:ring-gray-700 ring-1 ring-inset focus:ring-2",
    },
  },
  defaultVariants: {
    color: "white",
    size: "md",
    variant: "outline",
    rounded: "md",
  },
});

type Props = {
  color?: keyof (typeof selectConfig.variants)["color"];
  size?: keyof (typeof selectConfig.variants)["size"];
  variant?: keyof (typeof selectConfig.variants)["variant"];
  rounded?: keyof (typeof selectConfig.variants)["rounded"];
  items: OptionItem[];
};

const {
  color = "white",
  size = "md",
  variant = "outline",
  rounded = "none",
  items = [
    {
      label: "Select an option",
      value: undefined,
      disabled: true,
    },
    {
      label: "Option 1",
      value: "option1",
    },
    {
      label: "Option 2",
      value: "option2",
    },
  ],
} = defineProps<Props>();

type OptionItem = {
  label: string;
  value?: string;
  disabled?: boolean;
};

const modelValue = defineModel<string>();

const classes = computed(() => {
  const classes = [
    selectConfig.base,
    selectConfig.variants.color[color][variant],
    selectConfig.variants.size[size],
    selectConfig.variants.variant[variant],
    selectConfig.variants.rounded[rounded],
  ];
  return classes.filter(Boolean);
});
</script>

<template>
  <div class="relative">
    <select v-model="modelValue" :class="cn(classes)">
      <option
        v-for="(item, index) in items"
        :key="index"
        :value="item.value"
        :disabled="item.disabled"
      >
        {{ item.label }}
      </option>
    </select>
    <Icon
      name="ph:caret-down"
      class="absolute top-1/2 -translate-y-1/2 right-1 mr-1 pointer-events-none"
    />
  </div>
</template>

<style scoped>
select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  margin-right: 12px;
}
</style>
