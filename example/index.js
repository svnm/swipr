import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import swipr from '../lib/index'
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
        <p>Swipr example</p>

        <div className='swipr_example'>
      <div className='swipr'>
        <ul className='swipr_slides'>
          <li>
            <img src='https://raw.githubusercontent.com/StevenIseki/react-webpack-example/master/images/react.png' />
          </li>
          <li>
            <img src='https://raw.githubusercontent.com/StevenIseki/react-webpack-example/master/images/styled-components.png' />
          </li>
          <li>
            <img src='https://raw.githubusercontent.com/StevenIseki/react-webpack-example/master/images/webpack.png' />
          </li>
        </ul>
      </div>

      <span className='swipr_prev'>
        <svg xmlns='http://www.w3.org/2000/svg' width='50' height='50' viewBox='0 0 501.5 501.5'>
          <g><path fill='currentColor' d='M302.67 90.877l55.77 55.508L254.575 250.75 358.44 355.116l-55.77 55.506L143.56 250.75z'></path></g>
        </svg>
      </span>
      <span className='swipr_next'>
        <svg xmlns='http://www.w3.org/2000/svg' width='50' height='50' viewBox='0 0 501.5 501.5'>
          <g><path fill='currentColor' d='M199.33 410.622l-55.77-55.508L247.425 250.75 143.56 146.384l55.77-55.507L358.44 250.75z'></path></g>
        </svg>
      </span>
    </div>

      </div>
    )
  }
}

ReactDOM.render(
  <TestComponent />,
  document.getElementById('root')
)
