<script setup lang="ts">
import { tv } from "tailwind-variants";

const input = tv({
  base: "bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 relative block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0",
  variants: {
    color: {
      white: {
        outline:
          "ring-gray-300 dark:ring-gray-700 focus:ring-gray-500 dark:focus:ring-gray-400",
        none: "",
      },
      blue: {
        outline:
          "ring-blue-300 dark:ring-blue-700 focus:ring-blue-500 dark:focus:ring-blue-400",
        none: "",
      },
      green: {
        outline:
          "ring-green-300 dark:ring-green-700 focus:ring-green-500 dark:focus:ring-green-400",
        none: "",
      },
      yellow: {
        outline:
          "ring-yellow-300 dark:ring-yellow-700 focus:ring-yellow-500 dark:focus:ring-yellow-400",
        none: "",
      },
      red: {
        outline:
          "ring-red-300 dark:ring-red-700 focus:ring-red-500 dark:focus:ring-red-400",
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
      outline: "ring-1 ring-inset focus:ring-2",
    },
  },
  defaultVariants: {
    color: "white",
    size: "sm",
    variant: "outline",
    rounded: "md",
  },
});

type Props = {
  color?: keyof (typeof input.variants)["color"];
  size?: keyof (typeof input.variants)["size"];
  variant?: keyof (typeof input.variants)["variant"];
  rounded?: keyof (typeof input.variants)["rounded"];
  placeholder?: string;
  type?: string;
};

const {
  color = "white",
  size = "sm",
  variant = "outline",
  rounded = "md",
  placeholder = "This is a placeholder",
  type = "text",
} = defineProps<Props>();

const classes = computed(() => {
  const classes = [
    input.base,
    input.variants.color[color][variant],
    input.variants.size[size],
    input.variants.variant[variant],
    input.variants.rounded[rounded],
  ];
  return classes.filter(Boolean);
});
</script>

<template>
  <input :class="cn(classes)" :placeholder="placeholder" :type="type" />
</template>
