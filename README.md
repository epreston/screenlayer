# screenlayer

2D Presentation Layer for Web Applications

[![NPM version][npm-badge]][npm-url]
[![License][license-badge]][license-url]
[![CI][ci-badge]][ci-url]

## Scripts

| Action        | Command                 | Description                                |
| ------------- | ----------------------- | ------------------------------------------ |
| dev           | `npm run dev`           | Start a development server                 |
| build         | `npm run build`         | Create a production build into "dist"      |
| start         | `npm run start`         | Start a dev server and open in web browser |
| lint          | `npm run lint`          | Run static code analysis                   |
| test          | `npm run test`          | Run unit tests                             |
| test-watch    | `npm run test-watch`    | Watch for changes and run tests            |
| test-coverage | `npm run test-coverage` | Generate a test coverage report            |
| format        | `npm run format`        | Check source file formatting               |
| format-fix    | `npm run format-fix`    | Format source files                        |

## Structure

This repository employs a [monorepo](https://en.wikipedia.org/wiki/Monorepo) setup which hosts a number of associated packages under the `packages` directory. They can be used in any combination and define minimum dependencies between each other.

| Package      | Version                                           | Description |
| ------------ | ------------------------------------------------- | ----------- |
| `components` | [![components][components-badge]][components-url] |             |

This is the convenience package to make core packages available to your project with a single dependency.

| Package       | Version                              | Description |
| ------------- | ------------------------------------ | ----------- |
| `screenlayer` | [![NPM version][npm-badge]][npm-url] | bundle      |

## Tools

| Tool         | Reference                      |
| ------------ | ------------------------------ |
| Node.js      | https://nodejs.org/            |
| Vite         | https://vitejs.dev/            |
| Vitest       | https://vitest.dev/            |
| ESLint       | https://eslint.org/            |
| Prettier     | https://prettier.io            |
| EditorConfig | https://editorconfig.org       |
| jsdom        | https://github.com/jsdom/jsdom |
| rollup.js    | https://rollupjs.org           |
| esbuild      | https://esbuild.github.io      |
| mswjs        | https://mswjs.io               |

## References

| Website       | Reference                  |
| ------------- | -------------------------- |
| vuejs         | https://vuejs.org/         |
| Can I Use     | https://caniuse.com        |
| Browserslist  | https://browsersl.ist      |
| convertacolor | https://convertacolor.com/ |
| Polyfill.io   | https://polyfill.io        |

## License

This project is released under the MIT [License](LICENSE).

[ci-badge]: https://github.com/epreston/screenlayer/actions/workflows/ci.yml/badge.svg
[ci-url]: https://github.com/epreston/screenlayer/actions
[npm-badge]: https://img.shields.io/npm/v/screenlayer
[npm-url]: https://www.npmjs.com/package/screenlayer
[license-badge]: https://img.shields.io/npm/l/screenlayer.svg?cacheSeconds=2592000
[license-url]: LICENSE
[components-badge]: https://img.shields.io/npm/v/@screenlayer/components
[components-url]: https://www.npmjs.com/package/@screenlayer/components
