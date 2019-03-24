## swipr

[![npm version](https://badge.fury.io/js/swipr.svg)](https://badge.fury.io/js/swipr)

![](https://raw.githubusercontent.com/StevenIseki/swipr/master/example/screenshot.gif)

Uses hammer.js for smooth and responsive touch swiping

## Installation

`yarn add swipr`

## Usage

```jsx
import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import swipr from 'swipr'
import style from './swipr.css'

class TestComponent extends Component {
  componentDidMount () {
    document.addEventListener('DOMContentLoaded', function () {
      const $elem = document.querySelector('.swipr_example')
      swipr($elem)
    })
  }

  render () {
    return (
      <div>
        <div className='swipr_example'>
          <div className='swipr'>
            <ul className='swipr_slides'>
              <li>
                <img src='/react.png' />
              </li>
              <li>
                <img src='/styled-components.png' />
              </li>
              <li>
                <img src='/webpack.png' />
              </li>
            </ul>
        </div>
        <span className='swipr_prev' />
        <span className='swipr_next' />
      </div>
    </div>
    )
  }
}

ReactDOM.render(
  <TestComponent />,
  document.getElementById('root')
)
```

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
