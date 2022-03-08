import React, { Component } from 'react';
import './App.css';
import {getOrders, addToOrders} from '../../apiCalls';
import Orders from '../../components/Orders/Orders';
import OrderForm from '../../components/OrderForm/OrderForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      error: ''
    }
  }

  componentDidMount() {
    getOrders()
    .then(data => {
      this.setState({ orders: data.orders })
    })
      .catch(err => console.error('Error fetching:', err));
  }

  addOrder = (newOrder) => {
    addToOrders(newOrder)
    .then(() => {
      return getOrders()
    .then(data => {
      this.setState({ orders: data.orders })
    })
      .catch(err => console.error('Error fetching:', err));
  })
  }

  render() {
    return (
      <main className="App">
        <header>
          <h1>Burrito Builder</h1>
          {console.log(this.props)}
          <OrderForm addOrder={this.addOrder}/>
        </header>

        <Orders orders={this.state.orders}/>
      </main>
    );
  }
}


export default App;
