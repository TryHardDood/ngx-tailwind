# Tailwind CSS Schematics

[![npm version](https://badge.fury.io/js/ngx-tailwind.svg)](https://www.npmjs.com/package/ngx-tailwind)
![Schematics CI](https://github.com/notiz-dev/ngx-tailwind/workflows/Node.js%20CI/badge.svg)

Simple [Angular](https://angular.io/) schematic initializing [Tailwind CSS](https://tailwindcss.com/) in your project. [Angular v11.2](https://twitter.com/angular/status/1359736376581840896) includes native support for Tailwind CSS. 

## Only works with Angular v11.2 and up.

## Installation

Run

```bash
ng add @tryharddood/ngx-tailwind

# or

ng add @tryharddood/ngx-tailwind --project <MY_PROJECT>
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
