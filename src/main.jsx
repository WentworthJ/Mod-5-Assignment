import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.jsx'
import './index.css'
import Course from './Course.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <h1>CIS Courses at OC</h1>
    <Course/>
  </React.StrictMode>,
)
