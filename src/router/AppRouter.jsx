import React from 'react'
import {HashRouter as Router, Switch, Route} from 'react-router-dom'
import SignIn from '../pages/SignIn/SignIn'
import SignUp from '../pages/SignUp/SignUp'
import Layout from '../pages/Layout'
import Home from '../pages/Home/Home'



export default function AppRouter() {
  return (
   <>
    <Router>
      <Switch>
       
       <Layout>

        <Route exact path='/' component={Home} />
        <Route path='/signin' component={SignIn} />
        <Route path='/signup' component={SignUp} />
        
       </Layout>

      </Switch>
    </Router>
   </>
  )
}
