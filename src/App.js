import './App.css';
import React from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'

import HomePage from './components/HomePage/HomePage'
import DealsPage from './components/DealsPage/DealsPage'
import Checkout from './components/Checkout/Checkout';
import CartPage from './components/CartPage/CartPage'
import Myorders from './components/Myorders/Myorders'

import ItemPage from './components/ItemPage/ItemPage'

import Navbar from './components/Navbar/Navbar'
class App extends React.Component{
  constructor(){
    super()
    this.state={
      items:[],
      searchfield:''
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

  onSearchchange = (e) =>{
    this.setState({searchfield:e.target.value})
  }

  render(){
    const items = this.state.items
    const searchfield = this.state.searchfield
    const filtereditems = items.filter(item =>{
      return item.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    // console.log("render")
    console.log(process.env)
    return (
      <div className="App">
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/"> <HomePage items={filtereditems} searchChange={this.onSearchchange}/> </Route>
            <Route exact path="/deals"> <DealsPage items={items.filter(item=>item.isOnSale)} /> </Route>
            <Route exact path='/cart'> <CartPage /> </Route> 
            <Route exact path='/item/:itemId' component={ItemPage} />  
            <Route exact path='/checkout' component={Checkout} />  
            <Route exact path='/myorders' component={Myorders} />  
          </Switch>
        </Router>
      </div>
    );
  }
  
}

export default App;
