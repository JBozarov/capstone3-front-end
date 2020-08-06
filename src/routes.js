import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Dashboard from './components/dashboard/Dashboard'
import Products from './components/products/Products'
import Single from './components/single/Single'
import Cart from './components/cart/Cart'
import Admin from './components/admin/Admin'
import AdminDetails from './components/adminDetails/AdminDetails'




export default (
   <Switch>
      <Route exact path='/' component={Dashboard} />
      <Route exact path='/admin' component={Admin} /> 
      <Route path='/admin/:serialNumber' render={(props) => <AdminDetails {...props} />}/>
      <Route exact path='/tshirts' component={Products} />
      <Route exact path='/products/:serialNumber' component={Single} />
      <Route exact path='/cart' component={Cart} />
   </Switch>
)