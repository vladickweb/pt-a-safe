import * as React from "react";
import type { Preview, Decorator } from "@storybook/react";
import { ThemeProvider } from "../src/contexts/ThemeContext";
import "../src/app/globals.css";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    themes: {
      default: "Light",
      disable: false,
      toolbar: true,
      list: [
        { name: "Light", class: "light", color: "#f5f5f5", default: true },
        { name: "Dark", class: "dark", color: "#1e1e1e" },
      ],
    },
  },
  decorators: [
    ((Story: React.ComponentType) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    )) as Decorator,
  ],
};

export default preview;
