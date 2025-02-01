import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

export default <Partial<Config>>{
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: colors.green,
      },
    },
  },
};
