import React from 'react';

class Products extends React.Component {
  render() {
    const { products, handleAddToCart } = this.props;

    const productItems = products.map(product => (
      <div className="col-md-8" key={product.id}>
        <div className="thumbnail text-center">
          <a href={`#${product.id}`} onClick={handleAddToCart}>
            <img src={`/products/${product.sku}.jpg`} alt={product.title} />
            <p>{product.title}</p>
          </a>
        </div>
      </div>
    ));
    return <div className="row">{productItems}</div>;
  }
}

export default Products;
