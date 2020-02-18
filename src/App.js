import React from 'react';
import Products from './components/products';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      filteredProducts: [],
    };
  }
  componentWillMount() {
    fetch('http://localhost:8001/products')
      .then(res => res.json())
      .catch(err =>
        fetch('db.json')
          .then(res => res.json())
          .then(data => data.products)
      )
      .then(data => {
        this.setState({ products: data });
      });
  }
  handleAddToCart = () => {};

  render() {
    return (
      <div className="container">
        <h1>Ecommerce Shopping Cart</h1>
        <hr />
        <div className="row">
          <div className="col-md-8">
            <Products
              products={this.state.products}
              handleAddToCart={this.handleAddToCart}
            />
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    );
  }
}

export default App;
