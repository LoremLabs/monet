## Development

### Install

```bash
npm ci
```

### Storybook

```bash
# Storybook
npm start
```

### Dev

```bash
# Dev Builds (watch mode)
# run following to two separate terminals:
nodemon -w src --exec npm run build:elements-base
npm run build:elements -- -w

# Then view them in action (another terminal):
npm run serve
```

### Production build

```bash
npm run build
```

## Releasing

1. Bump package version and create a release commit + git tag by running:
   ```bash
   npm version [major | minor | patch]
   # Example: If current package version is 1.0.5, running `npm version minor` will:
   #  - set the package version to 1.1.0 (in both package.json and package-lock.json)
   #  - create a git commit with message 1.1.0
   #  - create a git tag with name `v1.1.0`
   ```
2. Then `git push` your commit+tag.
   ```bash
   git push
   git push --tags
   ```
3. Publish a new release at https://github.com/LoremLabs/monet/releases/new using the tag from first step. Also add a changelog/release summary (you can edit the it later).
4. A GitHub Action will then automatically run `scripts/release.sh` to publish the package to npm with correct directories and file names (don't simply run `npm publish` locally! Run `./scripts/release.sh` if you wish to publish from your computer).
