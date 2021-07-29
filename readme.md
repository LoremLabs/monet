This project makes use of Yarn workspaces, so `yarn` (v1) is required in your system path.

## Getting started

After cloning the repo, run `yarn install`.

To start developing components and website together, run `yarn start` and open `http://localhost:3000` in your browser.

### Developing components

```bash
yarn workspace @loremlabs/monet run storybook

# or
cd monet
yarn storybook
```

### Developing the website

```bash
cd website
yarn dev
```

## Production Build

```bash
yarn build

# or, build components separately
yarn build-monet #  built monet are in ./monet/dist
yarn build-website # built website is in ./website/build
yarn build-storybooks # built storybooks are in ./monet/dist/storybook and ./website/build/storybook respetively
```

### Releasing

Only `@loremlabs/monet` is meant be publishing to npm.

1. Bump package version for `@loremlabs/monet` and use same in the dependent `@loremlabs/website`.
1. Create a release commit (say, with message `x.y.z`) and `git push`.
1. Create a new release at https://github.com/LoremLabs/monet/releases/new and publish it. Also add a changelog/release summary (you can edit the it later).
1. A GitHub Action will then **automatically** run `scripts/release.sh` to publish the package to npm with correct directories and file names (don't simply run `npm publish` locally! Run `./scripts/release.sh` if you wish to publish from your computer).
