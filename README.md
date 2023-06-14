<h1 align="center">Tailwind CSS Directional Shadows</h1>

<div align="center">

[![minified size](https://img.shields.io/bundlephobia/min/tailwindcss-directional-shadows)](https://bundlephobia.com/package/tailwindcss-directional-shadows)
[![license](https://img.shields.io/github/license/brandonmcconnell/tailwindcss-directional-shadows?label=license)](https://github.com/brandonmcconnell/tailwindcss-directional-shadows/blob/main/LICENSE.txt)
[![version](https://img.shields.io/npm/v/tailwindcss-directional-shadows)](https://www.npmjs.com/package/tailwindcss-directional-shadows)
[![twitter](https://img.shields.io/twitter/follow/branmcconnell)](https://twitter.com/branmcconnell)

</div>

`tailwindcss-directional-shadows` is a plugin for Tailwind CSS that introduces directional shadow utilities. This provides more flexibility in casting shadows in specific directions and also allows for the creation of shadows as borders, which can be particularly useful with `position: sticky` on tables.

- [Installation](#installation)
- [Usage](#usage)
  - [Directional Shadows](#directional-shadows)
  - [Shadows as Borders](#shadows-as-borders)
- [Why use `tailwindcss-directional-shadows`](#why-use-tailwindcss-directional-shadows)

## Installation

You can install the plugin via npm:

```bash
npm install tailwindcss-directional-shadows
```

Then, include it in your `tailwind.config.js`:

```js
module.exports = {
  plugins: [
    require('tailwindcss-directional-shadows'),
  ]
}
```

## Usage

The plugin provides several utilities for applying shadows in different directions. Here's an overview:

### Directional Shadows

You can apply shadows in specific directions using the `shadow-[direction]-[size]` utility. The direction can be top (`t`), right (`r`), bottom (`b`), or left (`l`). The size is optional and can be one of `sm`, `md`, `lg`, `xl`, `2xl`, or left blank for the default size.

```html
<div class="shadow-t">...</div>
<div class="shadow-r-sm">...</div>
<div class="shadow-b-md">...</div>
<div class="shadow-l-xl">...</div>
```

### Shadows as Borders

Shadows can also be used as borders, which can be especially useful with `position: sticky` on tables. The plugin provides several utilities for this purpose:

- `shadow-border-[size]` applies the shadow border on all sides.
- `shadow-border-x-[size]` applies the shadow border on the left and right.
- `shadow-border-y-[size]` applies the shadow border on the top and bottom.
- `shadow-border-t-[size]`, `shadow-border-b-[size]`, `shadow-border-l-[size]`, and `shadow-border-r-[size]` apply the shadow border on the top, bottom, left, and right, respectively.

```html
<div class="shadow-border-2">...</div>
<div class="shadow-border-x-4">...</div>
<div class="shadow-border-y-2">...</div>
<div class="shadow-border-t-4">...</div>
```

Please replace `[size]` with an appropriate size from the Tailwind CSS border width scale (e.g., `2`, `4`, etc.).

## Why use `tailwindcss-directional-shadows`

`tailwindcss-directional-shadows` allows you to easily apply shadows in different directions and use shadows as borders. This enhances the flexibility of your designs, enabling more precise shadow control and introducing new design possibilities such as shadow-bordered tables with sticky positioning.

---

I hope you find `tailwindcss-directional-shadows` a valuable addition to your projects. If you have any issues or suggestions, don't hesitate to open an issue or pull request.

If you liked this, you might also like my other Tailwind CSS plugins:
* [multitool-for-tailwindcss](https://github.com/brandonmcconnell/multitool-for-tailwindcss): Group utilities together by variant
* [jstool-for-tailwindcss](https://github.com/brandonmcconnell/jstool-for-tailwindcss): Effortless build-time JS script injection
* [tailwind-lerp-colors](https://github.com/brandonmcconnell/tailwind-lerp-colors): Expand your color horizons and take the fuss out of genertaing new—or expanding existing—color palettes
