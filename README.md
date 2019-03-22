## swipr

[![npm version](https://badge.fury.io/js/swipr.svg)](https://badge.fury.io/js/swipr)

![](https://raw.githubusercontent.com/StevenIseki/swipr/master/example/screenshot.gif)

Uses hammer.js for smooth and responsive touch swiping

## Installation

`yarn add swipr`

## Usage

[codepen example](http://codepen.io/StevenIseki/pen/uilcC)

- <b>add some html</b>

<i>your container, swipr wrapper element and your li slides with whatever content you like</i>

```html
<div class="swipr_example">
  <div class="swipr">
    <ul class="swipr_slides">
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  </div>
</div>
```

- <b>now some javascript to init the slider</b>

```javascript
    var swipr = require('swipr');
    document.addEventListener('DOMContentLoaded', function () {
        var simple = document.querySelector('.swipr-example');
        swipr(simple);
    });
```

- <b>you need some minimal css for styling your slides</b>

[style.css](https://github.com/StevenIseki/swipr/blob/master/example/styles.css)

## Development
    yarn
    npm run dev

## Build
    yarn
    npm run build
    npm login
    npm version patch
    git add -A
    git push origin master
    npm publish

## License

[MIT](http://isekivacenz.mit-license.org/)
