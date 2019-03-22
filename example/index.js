import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import swipr from '../src/index'

class TestComponent extends Component {
  componentDidMount () {
    document.addEventListener('DOMContentLoaded', function () {
      const $elem = document.querySelector('.swipr_example')
      console.log($elem)
      swipr($elem)
    })
  }

  render () {
    return (
      <div>
        <p>Swipr example</p>
      </div>
    )
  }
}

ReactDOM.render(
  <TestComponent />,
  document.getElementById('root')
)
