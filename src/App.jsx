import React from 'react'
import Header from './components/header/Header'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Banner from './components/banner/Banner'
import Taskboard from './components/taskboard/Taskboard'
function App() {
  return (
    <div className=''>
      <Header/>
      <Banner/>
      <Taskboard/>
    </div>
  )
}

export default App

