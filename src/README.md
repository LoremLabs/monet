## Structure

- **`./components/*`**: Final components, that have all props exposed (including `isMonetized`). Meant for use as base for distributed custom elements, or under other layers.
  - **`./{Component}/{Component}.svelte`**: index file for component.
  - **`./{Component}/*/*`**: helper components (molecules).
- **`./elements/*.js`**: Final distributed custom elements, with a attribute-prop mapping to final components (`./*.svelte` files). Each file results in a single dependency-free JS file.
- **`./elements/*.svelte`**: Base for `*.js` files above. The `isMonetized` prop is not exported, but calculated.
- **`./utils/*`**: Common utilities.
- **`./atoms/*`**: Reusable components along with their storybook.
- **`./assets/*`**: Styles, images, and sub-atomic components.
