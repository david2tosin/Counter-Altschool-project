import './App.css'
import { Component } from 'react'
import CounterOne from './CounterOne'
import CounterTwo from './CounterTwo'
import BuggyCounter from './BuggyCounter'
import { Routes, Route } from 'react-router-dom'
import ErrorPage from './ErrorPage'
import ErrorBoundary from './ErrorBoundary'

function App() {

  return (
    <Routes>
      <Route path='/' element={<CounterOne />} />
      <Route path='countertwo' element={<CounterTwo />} />
      <Route path='buggycounter' element={<ErrorBoundary><BuggyCounter /></ErrorBoundary>} />
      <Route path='*' element={<ErrorPage />} />
    </Routes>
  )
}

export default App
