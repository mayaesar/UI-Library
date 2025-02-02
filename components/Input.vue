<script setup lang="ts">
import { tv } from "tailwind-variants";

const input = tv({
  base: "bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 relative block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0",
  variants: {
    color: {
      white: {
        outline: "focus:ring-gray-500 dark:focus:ring-gray-400",
        none: "",
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
    size: "sm",
    variant: "outline",
    rounded: "md",
  },
});

const leadingIconConfig = tv({
  base: "absolute top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500 pointer-events-none",
  variants: {
    size: {
      xs: "text-xs left-2",
      sm: "text-sm left-2.5",
      md: "text-base left-3",
      lg: "text-lg left-4",
      xl: "text-xl left-5",
    },
    padding: {
      xs: "pl-6",
      sm: "pl-8",
      md: "pl-9",
      lg: "pl-10",
      xl: "pl-12",
    },
  },
  defaultVariants: {
    size: "sm",
  },
});

type Props = {
  color?: keyof (typeof input.variants)["color"];
  size?: keyof (typeof input.variants)["size"];
  variant?: keyof (typeof input.variants)["variant"];
  rounded?: keyof (typeof input.variants)["rounded"];
  placeholder?: string;
  type?: string;
  leadingIcon?: string;
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
  <div class="relative">
    <input
      :class="
        cn(classes, leadingIcon ? leadingIconConfig.variants.padding[size] : '')
      "
      :placeholder="placeholder"
      :type="type"
    />
    <Icon
      v-if="leadingIcon"
      :name="leadingIcon"
      :class="cn(leadingIconConfig.base, leadingIconConfig.variants.size[size])"
    />
  </div>
</template>
