# Monet

Monet is a monetization pattern library with example web components.

Monetization patterns can be explored via Storybook. These patterns are then built into the `monet` library.

## Library Usage

```
<!-- in head -->
<script src="https://monet-elements.vercel.app/elements/monet-riser.js" defer></script>

<!-- then somewhere in body -->
<monet-riser></monet-riser>
```

## Storybook

```bash
# Storybook
npm start
```

# Developing Components

## Install

```bash
npm ci
```

## Dev

```bash
# Dev Builds (watch mode)
# run following to two separate terminals:
nodemon -w src npm run build:elements-base
npm run build:elements -- -w
```

# Production build

```bash
npm run build
```
