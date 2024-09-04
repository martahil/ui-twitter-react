# Twitter UI
## React + TypeScript + Vite

![Screenshot](./src/assets/screenshot-home.png)

## About

This project is a clone of the Twitter user interface (UI) using React, focusing on covering the fundamentals of this technology, such as componentization, props, state, forms, etc.
It was developed after participating in a Masterclass on building the Twitter interface using React, hosted by Rocketseat. 
For more information, visit [Rocketseat Masterclass - React](https://quiz.rocketseat.com.br/masterclass/react).

Key Topics Explored in this React Application:
- Fundamentals of React (covering backend, frontend & full-stack approaches)
- Usage of Node.js
- Application built with React, covering Compilers & Bundlers
- Concepts related to Components, covering Props and Children
- Use of TypeScript and CSS, understanding how to integrate them within React
- Strategic understanding of when to split components and when to keep logic within the same component
- Iterations and loops in React (differences between map and forEach)
- The key prop and performance considerations when iterating in React
- Routing
- Creating reusable layouts
- Handling form data and user input
- State management and immutability concepts
- The render lifecycle: when components render and how the reconciliation algorithm work
- Handling user events
- Application responsiveness

## Project Preview
You can check out the project in action here:
[martahil.github.io/ui-twitter-react](https://martahil.github.io/ui-twitter-react/)

## Setting Up React with Vite and Fast Refresh

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

### Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
