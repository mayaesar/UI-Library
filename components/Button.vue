<script setup lang="ts">
import { tv } from "tailwind-variants";

const button = tv({
  base: "text-black dark:text-white rounded-full hover:opacity-80 drop-shadow",
  variants: {
    color: {
      blue: "bg-blue-500 ring-blue-500",
      green: "bg-green-500 ring-green-500",
      yellow: "bg-yellow-500 ring-yellow-500",
      red: "bg-red-500 ring-red-500",
      teal: "bg-teal-500 ring-teal-500",
      pink: "bg-pink-500 ring-pink-500",
      purple: "bg-purple-500 ring-purple-500",
      orange: "bg-orange-500 ring-orange-500",
      fuchsia: "bg-fuchsia-500 ring-fuchsia-500",
    },
    size: {
      sm: "text-sm py-2 px-3",
      md: "text-base py-3 px-4",
      lg: "text-lg py-4 px-5",
    },
    variant: {
      filled: "",
      outlined: "bg-transparent ring-2 ring-inset ring-{color}-500",
    },
    rounded: {
      none: "rounded-none",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      full: "rounded-full",
    },
  },
  defaultVariants: {
    color: "blue",
    size: "md",
    variant: "filled",
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
  variant = "filled",
  rounded = "md",
} = defineProps<Props>();

const classes = computed(() => {
  const classes = [
    button.base,
    button.variants.color[color],
    button.variants.size[size],
    variant ? button.variants.variant[variant].replace(/{color}/g, color) : "",
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
