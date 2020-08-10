import React from 'react';
import Product from '../product/product'

class Products extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      products: []
    }
  }

  renderProducts() {
    const { products } = this.state

    for (const key in products) {

      if (products.hasOwnProperty(key)) {
        const productValue = Object.values(products);
        return (
          <Product key={productValue._id} {...products} />
        )
      }
    }
  }

  getProducts = () => {
    fetch('http://localhost:3050/getAll-products')
      .then((res) => res.json())
      .then((products) => {
        this.setState({
          products
        })
      })
  }

  componentDidMount() {
    this.getProducts()
  }


  render() {

    return (
      <div>
        {this.renderProducts()}
      </div>


    )
  }
}



export default Products;
