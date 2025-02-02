<script setup lang="ts">
import { tv } from "tailwind-variants";

const button = tv({
  base: "text-black dark:text-white rounded-full hover:opacity-70 drop-shadow flex items-center justify-center",
  variants: {
    color: {
      white: {
        solid:
          "bg-white dark:bg-black ring-gray-100 dark:ring-gray-950 hover:bg-gray-100 hover:dark:bg-gray-950 ",
        outline:
          "bg-transparent ring-2 ring-inset ring-gray-100 dark:ring-gray-950",
        ghost: "bg-transparent hover:bg-gray-200 hover:dark:bg-gray-800",
        soft: "bg-gray-200 dark:bg-gray-800 ring-2 ring-inset ring-gray-100 dark:ring-gray-950",
      },
      black: {
        solid:
          "bg-black dark:bg-white bg-gray-950 dark:rring-gray-100 hover:bg-gray-950 hover:dark:ring-gray-100 text-white dark:text-black ",
        outline:
          "bg-transparent ring-2 ring-inset ring-gray-950 dark:ring-gray-100",
        ghost:
          "bg-transparent hover:bg-gray-800 hover:dark:bg-gray-200 hover:text-white hover:dark:text-black",
        soft: "bg-gray-600 dark:bg-gray-400 ring-2 ring-inset ring-gray-950 dark:ring-gray-100 text-white dark:text-black",
      },
      blue: {
        solid: "bg-blue-500 ring-blue-500 hover:bg-blue-500",
        outline: "bg-transparent ring-2 ring-inset ring-blue-500",
        ghost: "bg-transparent hover:bg-blue-200 hover:dark:bg-blue-800",
        soft: "bg-blue-200 dark:bg-blue-800 ring-2 ring-inset ring-blue-500",
      },
      green: {
        solid: "bg-green-500 ring-green-500 hover:bg-green-500",
        outline: "bg-transparent ring-2 ring-inset ring-green-500",
        ghost: "bg-transparent hover:bg-green-200 hover:dark:bg-green-800",
        soft: "bg-green-200 dark:bg-green-800 ring-2 ring-inset ring-green-500",
      },
      yellow: {
        solid: "bg-yellow-500 ring-yellow-500 hover:bg-yellow-500",
        outline: "bg-transparent ring-2 ring-inset ring-yellow-500",
        ghost: "bg-transparent hover:bg-yellow-200 hover:dark:bg-yellow-800",
        soft: "bg-yellow-200 dark:bg-yellow-800 ring-2 ring-inset ring-yellow-500",
      },
      red: {
        solid: "bg-red-500 ring-red-500 hover:bg-red-500",
        outline: "bg-transparent ring-2 ring-inset ring-red-500",
        ghost: "bg-transparent hover:bg-red-200 hover:dark:bg-red-800",
        soft: "bg-red-200 dark:bg-red-800 ring-2 ring-inset ring-red-500",
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
      solid: "",
      outline: "",
      ghost: "",
      soft: "",
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
