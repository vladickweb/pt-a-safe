import type { StorybookConfig } from "@storybook/experimental-nextjs-vite";
import { mergeConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindPostcss from "@tailwindcss/postcss";
import autoprefixer from "autoprefixer";

const config: StorybookConfig = {
  stories: ["../src/components/ui/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/experimental-addon-test",
    "@storybook/addon-themes",
  ],
  framework: {
    name: "@storybook/experimental-nextjs-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  staticDirs: ["../public"],
  viteFinal: async (viteConfig) => {
    return mergeConfig(viteConfig, {
      plugins: [tsconfigPaths()],
      css: {
        postcss: {
          plugins: [tailwindPostcss(), autoprefixer()],
        },
      },
    });
  },
};

export default config;
