# swipr

originally forked from [lory.js](http://meandmax.github.io/lory/) the touch enabled minimalistic slider written in vanilla JavaScript

just 260 lines of es5 code :) Imagine if we wrote it in es6?

Uses hammer.js so it works the same on the web as on mobile. Swipe or Click...

## Installation

`npm install swipr --save`

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

<script src="/scripts/bundle.js"></script>
```

- <b>now some javascript to init the slider</b>

<i>using node / commonJs</i>

Use browserify or webpack to bundle your main file below to bundle.js

```javascript
    var swipr = require('swipr');
    document.addEventListener('DOMContentLoaded', function () {
        var simple = document.querySelector('.swipr-example');
        swipr(simple);
    });
```

- <b>you need some minimal css for styling your slides</b>

[style.css](https://github.com/StevenIseki/swipr/blob/master/example/styles.css)

## License

[MIT](http://isekivacenz.mit-license.org/)
