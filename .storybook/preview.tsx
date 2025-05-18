import type { Preview } from "@storybook/react";
import "../src/App.css";

export const globalTypes = {
  theme: {
    name: "Theme",
    description: "Global theme for components",
    defaultValue: "light",
    toolbar: {
      icon: "circlehollow",
      items: [
        { value: "light", title: "Light" },
        { value: "dark", title: "Dark" },
      ],
    },
  },
};

export const decorators = [
  (Story, context) => {
    // Add or remove the .dark class on the html element
    if (typeof document !== "undefined") {
      document.documentElement.classList.toggle(
        "dark",
        context.globals.theme === "dark"
      );
    }
    // Set canvas background color
    const sbCanvas = document.querySelector(".sb-show-main") as HTMLBodyElement;
    if (sbCanvas) {
      sbCanvas.style.background = "var(--color-background)";
    }
    return <Story />;
  },
];

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
