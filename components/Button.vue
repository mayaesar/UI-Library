<script setup lang="ts">
import { tv } from "tailwind-variants";

const button = tv({
  base: "text-black dark:text-white rounded-full shadow flex items-center justify-center",
  variants: {
    color: {
      white: {
        solid:
          "bg-white dark:bg-black bg-gray-100 dark:ring-gray-950 hover:bg-gray-100 hover:dark:ring-gray-950 text-black dark:text-white ",
        outline: "ring-gray-100 dark:ring-gray-950",
        ghost:
          "hover:bg-gray-600 hover:dark:bg-gray-400 hover:text-white hover:dark:text-black",
        soft: "bg-gray-600 dark:bg-gray-400 dark:text-gray-900 text-white",
      },
      black: {
        solid:
          "bg-black dark:bg-white bg-gray-950 dark:ring-gray-100 hover:bg-gray-950 hover:dark:ring-gray-100 text-white dark:text-black ",
        outline: "ring-gray-950 dark:ring-gray-100",
        ghost:
          "hover:bg-gray-200 hover:dark:bg-gray-800 hover:text-black hover:dark:text-white",
        soft: "bg-gray-400 dark:bg-gray-600",
      },
      blue: {
        solid: "bg-blue-500 ring-blue-500 hover:bg-blue-500",
        outline: "ring-blue-500 hover:bg-blue-100 hover:dark:bg-blue-950",
        ghost:
          "text-blue-500 dark:text-blue-400 hover:bg-blue-100 hover:dark:bg-blue-950",
        soft: "text-blue-500 dark:text-blue-400 bg-blue-100 dark:bg-blue-950 hover:bg-blue-200 hover:dark:bg-blue-800",
      },
      green: {
        solid: "bg-green-500 ring-green-500 hover:bg-green-500",
        outline: "ring-green-500 hover:bg-green-100 hover:dark:bg-green-950",
        ghost:
          "text-green-500 dark:text-green-400 hover:bg-green-100 hover:dark:bg-green-950",
        soft: "text-green-500 dark:text-green-400 bg-green-100 dark:bg-green-950 hover:bg-green-200 hover:dark:bg-green-800",
      },
      yellow: {
        solid: "bg-yellow-500 ring-yellow-500 hover:bg-yellow-500",
        outline: "ring-yellow-500 hover:bg-yellow-100 hover:dark:bg-yellow-950",
        ghost:
          "text-yellow-500 dark:text-yellow-400 hover:bg-yellow-100 hover:dark:bg-yellow-950",
        soft: "text-yellow-500 dark:text-yellow-400 bg-yellow-100 dark:bg-yellow-950 hover:bg-yellow-200 hover:dark:bg-yellow-800",
      },
      red: {
        solid: "bg-red-500 ring-red-500 hover:bg-red-500",
        outline: "ring-red-500 hover:bg-red-100 hover:dark:bg-red-950",
        ghost:
          "text-red-500 dark:text-red-400 hover:bg-red-100 hover:dark:bg-red-950",
        soft: "text-red-500 dark:text-red-400 bg-red-100 dark:bg-red-950 hover:bg-red-200 hover:dark:bg-red-800",
      },
    },
    size: {
      xs: "text-xs py-1 px-2",
      sm: "text-sm py-2 px-3",
      md: "text-base py-3 px-4",
      lg: "text-lg py-4 px-5",
      xl: "text-xl py-5 px-6",
      icon: "h-9 w-9",
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
      solid: "ring-1 ring-inset",
      outline: "bg-transparent ring-1 ring-inset",
      ghost: "shadow-none bg-transparent",
      soft: "shadow-none",
    },
  },
  defaultVariants: {
    color: "blue",
    size: "md",
    variant: "solid",
    rounded: "md",
  },
});

type Props = {
  color?: keyof (typeof button.variants)["color"];
  size?: keyof (typeof button.variants)["size"];
  variant?: keyof (typeof button.variants)["variant"];
  rounded?: keyof (typeof button.variants)["rounded"];
};

const {
  color = "blue",
  size = "md",
  variant = "solid",
  rounded = "md",
} = defineProps<Props>();

const classes = computed(() => {
  const classes = [
    button.base,
    button.variants.color[color][variant],
    button.variants.size[size],
    button.variants.variant[variant],
    button.variants.rounded[rounded],
  ];
  return classes.filter(Boolean);
});
</script>

<template>
  <button :class="cn(classes)">
    <slot />
  </button>
</template>
