## Handlebars 4 / Bootstrap 5 / Webpack 5 / Gulp 4 / Boilerplate

![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)
[![license](https://img.shields.io/github/license/Jon-Westbrook/Handlebars-Bootstrap5-Webpack-Boilerplate)](https://github.com/Jon-Westbrook/Handlebars-Bootstrap5-Webpack-Boilerplate/blob/master/LICENSE)
![version](https://img.shields.io/github/package-json/v/Jon-Westbrook/Handlebars-Bootstrap5-Webpack-Boilerplate)

This boilerplate project uses **gulp-webpack-handlebars-bootstrap-5** as a flexible template for web development. It has a sophisitcated yet minimalist set organization for creating responsive, high-performance and lightweight pages.

:rocket: Gulp 4 + Webpack 5 + Handlebars + Bootstrap 5 + Babel + BrowserSync :fire:

## Quickstart

1. Install **NodeJS** and **NPM** and **Yarn**
2. Clone this repository
3. `nvm use`
4. `yarn install`
5. `yarn dev` for development, or `yarn build` for production

### Tasks in Detail

|                | Task Name                                 | Description                                               | Environment |
| -------------- | :---------------------------------------- | :-------------------------------------------------------- | :---------- |
| :construction: | `yarn dev` or `gulp`                      | Compile dev build, start the server and watch for changes | Development |
| :factory:      | `yarn build` or `gulp build --production` | Compile production build                                  | Production  |

### How to use SVG sprite?

##### Add images

1. `optional` Change color values (`fill` or `stroke`) in your SVG file to `currentColor` to support dynamic color changes.
2. Put SVG file in `src/img/svg-sprite` directory.
3. The code from your SVG file will be included in one svg-sprite and placed in `dist/img/svg-sprite/sprite.svg`

##### SVG tag

```html
<svg viewBox="x0 y0 x1 y1">
  <use href="assets/img/svg-sprite/sprite.svg#YOUR_SVG_FILE_NAME"></use>
</svg>
```

You can get viewBox value from your SVG file or using devTools on the page after including sprite.svg

##### IMG tag

```html
<img src="assets/img/svg-sprite/sprite.svg#YOUR_SVG_FILE_NAME" alt="" />
```

In this case, the image does not respond to color changes.

**[⬆ back to menu](#documentation)**

## Features

| Type           | List                                                                                                                                                                                                                             |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Task Runner    | [Gulp](https://www.npmjs.com/package/gulp)                                                                                                                                                                                       |
| CSS            | [SASS / SCSS](https://www.npmjs.com/package/gulp-sass), [CleanCSS](https://www.npmjs.com/package/gulp-clean-css), [Autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer)                                                |
| JS             | [Webpack](https://www.npmjs.com/package/webpack), [Babel](https://www.npmjs.com/package/babel-loader)                                                                                                                            |
| JS Examples    | [FileInclude](https://www.npmjs.com/package/gulp-file-include), [Uglify](https://www.npmjs.com/package/gulp-uglify)                                                                                                              |
| HTML Templates | [Handlebars.js](https://www.npmjs.com/package/handlebars), [handlebars-layouts](https://github.com/shannonmoeller/handlebars-layouts)                                                                                            |
| Images         | [ImageMin](https://www.npmjs.com/package/gulp-imagemin)                                                                                                                                                                          |
| Live Reload    | [BrowserSync](https://www.npmjs.com/package/browser-sync)                                                                                                                                                                        |
| Debug          | [Sourcemaps](https://www.npmjs.com/package/gulp-sourcemaps), [Plumber](https://www.npmjs.com/package/gulp-plumber)                                                                                                               |
| More           | [Favicons](https://www.npmjs.com/package/favicons), [SVG Sprites](https://www.npmjs.com/package/gulp-svg-sprite), [Notifier](https://www.npmjs.com/package/node-notifier), [Changed](https://www.npmjs.com/package/gulp-changed) |
| Included JS    | [Jquery](https://www.npmjs.com/package/jquery), [Bootstrap 5](https://www.npmjs.com/package/bootstrap), [CurrentDevice](https://www.npmjs.com/package/current-device)                                                            |

**[⬆ back to menu](#documentation)**

## File structure

```
|-- dist
|-- tasks
|-- src
|   |-- fonts
|   |-- img
|   |   |-- favicon
|   |   |   |-- logo.png
|   |   |-- content (optional)
|   |   |-- main (optional)
|   |   |-- svg-sprite
|   |-- js
|   |   |-- components
|   |   |-- other
|   |   |-- app.js
|   |   |-- main.js
|   |-- styles
|   |   |-- components
|   |   |-- main.scss
|   |   |-- _app.scss
|   |   |-- _variables.scss
|   |-- views
|   |   |-- data
|   |   |-- helpers
|   |   |-- partials
|   |   |-- templates
|   |   |   |-- pages
|   |   |   |-- index.html
|-- .babelrc.js
|-- .browserslistrc
|-- .gitignore
|-- .nvmrc
|-- gulpfile.js
|-- package.json
|-- README.md
|-- webpack.config.js
```

- `dist` - folder with the finished results of assembly. In dev mode, is the root of the server.

- `tasks` - directory with gulp tasks.

- `.babelrc.js` - babel static configuration.

- `gulpfile.js` - config and main tasks.

- `src` - source files

  - `fonts` - fonts files in directories named by font name. For example _fonts/Ubuntu/Regular.{woff, woff2, ttf}_

  - `img` - all images for optimization:

    - `content` - optional directory (Implied as: dynamic images for pages, may be removed after placing the layout on the CMS)
    - `main` - optional directory (Implied as: static template images (logo, background and etc.))
    - `favicon` - generating favicons from one image

    - `svg-sprite` - optimizes them and bakes them into SVG sprites

  - `views`

    - `helpers` - _Handlebars.js_ helpers

    - `partials` - _Handlebars.js_ templates

    - `template` - site pages

      - `index.html` - entry point

      - `pages` - all pages

**[⬆ back to menu](#documentation)**

## Copyright and license

Copyright 2023 Jonathon Westbrook under the [MIT license](http://opensource.org/licenses/MIT).
