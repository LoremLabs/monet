## Structure

- **`./components/*.svelte`**: Final components, that have all props exposed (including `isMonetized`). Meant for use as base for distributed custom elements, or under other layers.
- **`./elements/*.js`**: Final distributed custom elements, with a attribute-prop mapping to final components (`./*.svelte` files). Each file results in a single dependency-free JS file.
- **`./elements/*.svelte`**: Base for `*.js` files above. The `isMonetized` prop is not exported, but calculated.
- **`./utils/*`**: Common utilities.
- **`./molecules/*`**, **`./atoms/*`**: Reusable components along with their storybook. Atoms combine to form molecules, and molecules combine to form larger molecules.
- **`./assets/*`**: Styles, images, and sub-atomic components.
