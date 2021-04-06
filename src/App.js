import './App.css';
import React from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'

import HomePage from './components/HomePage/HomePage'
import DealsPage from './components/DealsPage/DealsPage'
import CartPage from './components/CartPage/CartPage'

import ItemPage from './components/ItemPage/ItemPage'

import Navbar from './components/Navbar/Navbar'
class App extends React.Component{
  constructor(){
    super()
    this.state={
      items:[]
    }
  }
  componentDidMount(){
    // console.log("componentdidmount")
    fetch('https://gp-super-store-api.herokuapp.com/item/list', {
            method: 'get',
            headers: {'Content-Type': 'application/json'},
          })
      .then(response=> response.json())
      // .then((res)=>console.log(res))
      .then(data => {this.setState({ items: data.items})})
  }

  render(){
    const items = this.state.items
    // console.log("render")
    return (
      <div className="App">
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/"> <HomePage items={items} /> </Route>
            <Route exact path="/deals"> <DealsPage items={items.filter(item=>item.isOnSale)} /> </Route>
            <Route exact path='/cart'> <CartPage /> </Route> 
            <Route exact path='/item/:itemId' component={ItemPage} />  
          </Switch>
        </Router>
      </div>
    );
  }
  
}

export default App;
