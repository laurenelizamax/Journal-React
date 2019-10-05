import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from "react-router-dom"
import Journal from '../src/components/Journal'

ReactDOM.render(
  <Router>
    <Journal />
  </Router>
  , document.getElementById('root'))