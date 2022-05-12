import React, { useState } from 'react'
import SideBar from './components/Side_Bar/SideBar'
import { Container } from 'react-bootstrap'
import Header from './components/Header/Header'
import HomeScreen from './Screen/HomeScreen/HomeScreen'
import './_base.scss'
import './_app.scss'


const App = () => {
  const [sidebar, toggleSidebar] = useState(false)
   const handleToggleSidebar = () => toggleSidebar(value => !value)
  return (
    <>
        <Header handleToggleSidebar={handleToggleSidebar}/>
        <div className='app__Container border border-info'>
            <SideBar  StateSideBar={StateSideBar} handleToggleSidebar={handleToggleSidebar}/>
            <Container fluid className='app_main border border-warning' >
                <HomeScreen/>
            </Container>
        </div>
    </>
  )
}

export default App