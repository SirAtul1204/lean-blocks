# Lean Blocks

A modern, customizable React component library built with Tailwind CSS.

## Storybook

https://lean-blocks.atul.website/

## Installation

Install the package and its peer dependencies:

```sh
pnpm add @siratul1204/lean-blocks
# or
npm install @siratul1204/lean-blocks
# or
yarn add @siratul1204/lean-blocks
```

### Peer Dependencies

This library requires the following peer dependencies in your project:

- `react` ^19.1.0
- `react-dom` ^19.1.0
- `tailwindcss` ^4.1.7

## Setup

Add the following in your global/main CSS file -

```css
@import url("https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap");

@import "tailwindcss";

@import "<path_to_node_modules>/node_modules/@siratul1204/lean-blocks/dist/theme.css";

@source "<path_to_node_modules>/node_modules/@siratul1204/lean-blocks";
```

_Replace `<path_to_node_modules>` with relative path to node_modules_

## Dark Mode

This library supports dark mode using the `.dark` class.  
To toggle dark mode, add or remove the `dark` class on your `<html>` or `<body>` element.

```js
document.documentElement.classList.add("dark"); // Enable dark mode
document.documentElement.classList.remove("dark"); // Disable dark mode
```

## License

MIT
