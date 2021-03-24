# Tailwind CSS Schematics

[![npm version](https://badge.fury.io/js/ngx-tailwind.svg)](https://www.npmjs.com/package/ngx-tailwind)
![Schematics CI](https://github.com/notiz-dev/ngx-tailwind/workflows/Node.js%20CI/badge.svg)

Simple [Angular](https://angular.io/) schematic initializing [Tailwind CSS](https://tailwindcss.com/) in your project. [Angular v11.2](https://twitter.com/angular/status/1359736376581840896) includes native support for Tailwind CSS. 

## Only works with Angular v11.2 and up.

## Installation

Run

```bash
npm install https://github.com/TryHardDood/ngx-tailwind
yarn add https://github.com/TryHardDood/ngx-tailwind
ng generate ngx-tailwind:ng-add

# or

npm install https://github.com/TryHardDood/ngx-tailwind
yarn add https://github.com/TryHardDood/ngx-tailwind
ng generate ngx-tailwind:ng-add --project <MY_PROJECT>
```

Example output

```bash
? Which stylesheet format are you using? SCSS [ https://sass-lang.com/documentation/syntax#scss ]
? Which @tailwindcss plugins do you want to install? aspect-ratio, forms, line-clamp, typography
CREATE tailwind.config.js (360 bytes)
CREATE scripts/ngx-tailwind-jit-transform.js (367 bytes)
UPDATE package.json (1782 bytes)
UPDATE src/styles.scss (97 bytes)
√ Packages installed successfully.
```

## Migrate from Tailwind CSS v1 to v2

To upgrade you project from [Tailwind CSS v1.x to v2.0](https://tailwindcss.com/docs/upgrading-to-v2) run the following install command

```bash
npm i -D tailwindcss@latest autoprefixer@latest postcss@latest postcss-import@latest postcss-loader@latest

# using scss
npm i -D postcss-scss@latest
```

Read the full [Upgrade Guide](https://tailwindcss.com/docs/upgrading-to-v2) to update your custom `tailwind.config.js` (e.g. [your color palette](https://tailwindcss.com/docs/upgrading-to-v2#configure-your-color-palette-explicitly)) and replace removed classes from your template (e.g. [shadow-outline and shadow-xs](https://tailwindcss.com/docs/upgrading-to-v2#replace-shadow-outline-and-shadow-xs-with-ring-utilities)).

All available flags:

| Flag                             |  Description                                                   | Type             |  Default                                              |
| -------------------------------- | -------------------------------------------------------------- | ---------------- | ----------------------------------------------------- |
|  `cssFormat`                     | The file extension or preprocessor to use for style files.     | `css` \|  `scss` | `css`                                                 |
|  `project`                       | The project to initialize with Tailwind CSS.                   | `string`         | **First** Angular project                             |
|  `postcssVersion`                | The postcss version to be installed.                           | `string`         | `^8.2.6`                                              |
|  `skipTailwindInit`              | Skip initializing Tailwind.                                    | `boolean`        | `false`                                               |
|  `tailwindVersion`               | The Tailwind version to be installed.                          | `string`         | `^2.0.3`                                              |
|  `disableCrossPlatform`          | Set the build:prod script to be only UNIX compatible.          | `boolean`        | `false`                                               |
|  `crossEnvVersion`               | The cross-env version to be installed.                         | `string`         | `^7.0.3`                                              |
|  `tailwindPlugins`               | @tailwindcss plugins installed and added to tailwind.config.js | `string[]`       | [`aspect-ratio`, `forms`, `line-clamp`, `typography`] |

## Developing

Install `@angular-devkit/schematics-cli` to be able to use `schematics` command

```bash
npm i -g @angular-devkit/schematics-cli
```

Now build the schematics and run the schematic.

```bash
npm run build
# or
npm run build:watch

# dry-run in angular-workspace
npm run start:dev

# execute schematics in angular-workspace
npm run start
```
