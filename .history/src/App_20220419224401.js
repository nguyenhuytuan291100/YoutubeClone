import React, { useState } from 'react'
import SideBar from './components/Side_Bar/SideBar'
import { Container } from 'react-bootstrap'
import Header from './components/Header/Header'
import HomeScreen from './Screen/HomeScreen/HomeScreen'
import './_base.scss'
import './_app.scss'

import { BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import LoginScreen from './Screen/LoginScreen/LoginScreen'

const Layout=({chilren})=>{
  const [sidebar, toggleSidebar] = useState(false)
  const handleToggleSidebar = () => toggleSidebar(value => !value)
  return(
    <>
        <Header handleToggleSidebar={handleToggleSidebar}/>
        <div className='app__Container '>
            <SideBar  sidebar={sidebar} handleToggleSidebar={handleToggleSidebar}/>
            <Container fluid className='app_main' >
                {/* <HomeScreen/> */}
                {chilren}
            </Container>
        </div>
    </>
  )
}

const App = () => {
  
  return (
    <Router>
      <Route path='/' exact>
        <Layout>
          <HomeScreen/>
        </Layout>
      </Route>

      <Route path='/auth' >
        <LoginScreen />
      </Route>

      <Route path='/search'>
        <Layout>
          <h1>Search something</h1>
        </Layout>
      </Route>
      
    </Router>
  )
}

export default App