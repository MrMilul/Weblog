import React from 'react'
import {BrowserRouter as Router,
  Switch,
  Route} from 'react-router-dom'
import { CreatePost } from './components/CreatePost'
import { HomePage } from './components/HomePage'
import { Layout } from './components/Layout'
import { Navbar } from './components/Navbar'
import './styling/app.css'

const App = () => {
  return (
    <Router>
      <Switch>
      <Layout>
        <Route exact path="/" component={HomePage}/>
        <Route path="/create" component={CreatePost}/>
      </Layout>          
      </Switch>
    </Router>
    
  )
}

export default App