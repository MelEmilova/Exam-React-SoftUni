import React, { Component } from 'react';
import Title from '../title/title';
import Button from '../../components/button/button';
import Input from '../../components/input/input';
import styles from './product.module.css';
import UserContext from '../../Context';

const productsDisplay = [];
const productsList = {
  quantity: Number,
  quantityType: '',
  product: "",
}

const dataRecipe = {
  title: "",
  description: "",
  imageUrl: "",
  productQuantities: []
}

class Product extends Component {
  constructor(props) {
    super(props)
    this.state = {
      meat: this.props.MEAT,
      dairy: this.props.DAIRY,
      vegetables: this.props.VEGETABLES,
      fruits: this.props.FRUITS,
      quantityMeat: "",
      quantityTypeMeat: "",
      quantityVeg: "",
      quantityTypeVeg: "",
      quantityDairy: "",
      quantityTypeDairy: "",
      quantityFruits: '',
      quantityTypeFruits: "",
      imageUrl: "",
      title: "",
      description: "",
      quantityTypeMeatError: false,
      quantityTypeDairyError: false,
      quantityTypeVegError: false,
      quantityTypeFruitsError: false,
      productQuantityLenght: false
    }
  };
  static contextType = UserContext;

  handleChange(e, type) {
    let { value } = e.target;
    this.setState({
      value
    });
  };

  handlequantityTypeBlurMeat = () => {
    const { quantityTypeMeat } = this.state;
    if (quantityTypeMeat !== 'kg' && quantityTypeMeat !== 'gr' && quantityTypeMeat !== 'l' && quantityTypeMeat !== 'ml') {
      this.setState({
        quantityTypeMeatError: true
      });
    } else if (this.state.quantityTypeMeatError) {
      this.setState({
        quantityTypeMeatError: false
      });
    }
  };

  handlequantityTypeBlurDairy = () => {
    const { quantityTypeDairy } = this.state;
    if (quantityTypeDairy !== 'kg' && quantityTypeDairy !== 'gr' && quantityTypeDairy !== 'l' && quantityTypeDairy !== 'ml') {
      this.setState({
        quantityTypeDairyError: true
      });
    } else if (this.state.quantityTypeDairyError) {
      this.setState({
        quantityTypeDairyError: false
      });
    }
  };

  handlequantityTypeBlurVeg = () => {
    const { quantityTypeVeg } = this.state;
    if (quantityTypeVeg !== 'kg' && quantityTypeVeg !== 'gr' && quantityTypeVeg !== 'l' && quantityTypeVeg !== 'ml') {
      this.setState({
        quantityTypeVegError: true
      });
    } else if (this.state.quantityTypeVegError) {
      this.setState({
        quantityTypeVegError: false
      });
    }
  };

  handlequantityTypeBlurFruits = () => {
    const { quantityTypeFruits } = this.state;
    if (quantityTypeFruits !== 'kg' && quantityTypeFruits !== 'gr' && quantityTypeFruits !== 'l' && quantityTypeFruits !== 'ml') {
      this.setState({
        quantityTypeFruitsError: true
      });
    } else if (this.state.quantityTypeFruitsError) {
      this.setState({
        quantityTypeFruitsError: false
      });
    }
  };

  handleChangeQuan = (event, type) => {
    const newState = {}
    newState[type] = event.target.value
    this.setState(newState)
  };

  handleSubmitMeat = (event) => {
    event.preventDefault();
    const meatPr = this.state.value
    const { quantityMeat, quantityTypeMeat } = this.state
    productsList.quantity = Number(quantityMeat);
    productsList.quantityType = quantityTypeMeat;
    productsDisplay.push(meatPr);
    this.props.MEAT.map((el) => {
      if ((el.title).toString() === meatPr.toString()) {
        productsList.product = el._id;
        return productsList
      }
      return productsList
    });
    fetch('http://localhost:3050/create-quantity', {
      method: 'POST',
      body: JSON.stringify(productsList),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((res) => res.json())
      .then((data) => {
        dataRecipe.productQuantities.push(data._id)
      })
      .catch((err) => {
        return alert(err)
      })
  };

  handleSubmitDiary = (event) => {
    event.preventDefault();
    const diaryPr = this.state.value;
    const { quantityDairy, quantityTypeDairy } = this.state;
    productsList.quantity = Number(quantityDairy);
    productsList.quantityType = quantityTypeDairy;
    productsDisplay.push(diaryPr)
    this.props.DAIRY.map((el) => {
      if ((el.title).toString() === diaryPr.toString()) {
        productsList.product = el._id;
        return productsList
      }
      return productsList
    });
    fetch('http://localhost:3050/create-quantity', {
      method: 'POST',
      body: JSON.stringify(productsList),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((res) => res.json())
      .then((data) => {
        dataRecipe.productQuantities.push(data._id)
      })
      .catch((err) => {
        return alert(err)
      })
  };

  handleSubmitVegetables = (event) => {
    event.preventDefault();
    const vegetablesPr = this.state.value
    const { quantityVeg, quantityTypeVeg } = this.state
    productsList.quantity = Number(quantityVeg);
    productsList.quantityType = quantityTypeVeg;
    productsDisplay.push(vegetablesPr)
    this.props.VEGETABLES.map((el) => {
      if ((el.title).toString() === vegetablesPr.toString()) {
        productsList.product = el._id
        return productsList;
      }
      return productsList
    });
    fetch('http://localhost:3050/create-quantity', {
      method: 'POST',
      body: JSON.stringify(productsList),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((res) => res.json())
      .then((data) => {
        dataRecipe.productQuantities.push(data._id)
      })
      .catch((err) => {
        return alert(err)
      })
  };

  handleSubmitFruits = (event) => {
    event.preventDefault();
    const fruitsPr = this.state.value
    const { quantityFruits, quantityTypeFruits } = this.state
    productsList.quantity = Number(quantityFruits);
    productsList.quantityType = quantityTypeFruits;
    productsDisplay.push(fruitsPr)
    this.props.FRUITS.map((el) => {
      if ((el.title).toString() === fruitsPr.toString()) {
        productsList.product = el._id;
        return productsList
      }
      return productsList
    });
    fetch('http://localhost:3050/create-quantity', {
      method: 'POST',
      body: JSON.stringify(productsList),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((res) => res.json())
      .then((data) => {
        dataRecipe.productQuantities.push(data._id)
      })
      .catch((err) => {
        return alert(err)
      })
  };

  openWidget = () => {
    const widget = window.cloudinary.createUploadWidget({
      cloudName: 'dxmla5zuj',
      uploadPreset: 'SiftUni-Forms'
    }, (error, result) => {
      console.log('Error: ', error);
      console.log('Result: ', result);
      if (result.event === 'success') {
        this.setState({
          imageUrl: result.info.url
        })

      }
    })
    widget.open()
  };

  description = (event) => {
    event.preventDefault();
    const { title, description } = this.state
    if (dataRecipe.productQuantities.length === 0) {
      this.setState({
        productQuantityLenght: true
      });
    } else {
      dataRecipe.title = title;
      dataRecipe.description = description;

      fetch('http://localhost:3050/create-recipe', {
        method: 'POST',
        body: JSON.stringify(dataRecipe),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then((res) => res.json())
      window.location.href = 'http://localhost:3000/'
    }

  };

  render() {
  const { meat, dairy, vegetables, fruits,
      quantityMeat, quantityTypeMeat, quantityVeg, quantityTypeVeg,
      quantityDairy, quantityTypeDairy, quantityFruits,
      quantityTypeFruits, title, description, imageUrl, quantityTypeMeatError,
      quantityTypeDairyError, quantityTypeVegError, quantityTypeFruitsError,productQuantityLenght } = this.state;
    return (

      <div className={styles.container}>
        <Title title={'Create your recipe'} />
        <h2>Select products</h2>
        <div className={styles.container_selected}>

          <h3>Title recipe:</h3>
          <form onSubmit={this.description}>
            <input
              name="title" id="title" cols="90" rows="4"
              value={title}
              onChange={(e) => this.handleChangeQuan(e, 'title')}></input>
            <br />
            <br />

            <button onClick={this.openWidget}>Upload Image</button>
            {imageUrl ? (<img alt='' src={imageUrl} className={styles.image} />) : null}
            <br />
            <br />
            {productQuantityLenght ? (<div>The recipe must contain at least one product</div>) : null}
            <br />
            <h3>Description:</h3>

            <textarea name="description" id="description" cols="90" rows="20"
              value={description}
              onChange={(e) => this.handleChangeQuan(e, 'description')}></textarea>

            <Button nameButton="Create recipe" />
          </form>
        </div>

        <div className={styles.inner_container_left_1}>
          <form onSubmit={this.handleSubmitMeat}>
            <div>
              <label htmlFor=""><strong>MEAT</strong>  </label>
              <br />
              <select value={this.state.value} onChange={(e) => this.handleChange(e, 'meat')} className={styles.input_field} >
                <option value="empty"></option>
                {meat.map((el) => {
                  return <option >
                    {el.title}</option>
                })}
              </select>

              <Input
                type="text"
                value={quantityMeat}
                onChange={(e) => this.handleChangeQuan(e, 'quantityMeat')}
                label="Quantity"
                id="quantity"
              />
              <Input
                type="text"
                value={quantityTypeMeat}
                onChange={(e) => this.handleChangeQuan(e, 'quantityTypeMeat')}
                label="QuantityType"
                id="quantityType"
                onBlur={this.handlequantityTypeBlurMeat}
              />
              {quantityTypeMeatError ? (<div>Quantity Type must be one of the following - 'kg', 'gr', 'l', 'ml'</div>) : null}
            </div>
            <Button nameButton='Add Meat' />
          </form>
        </div>

        <div className={styles.inner_container_right_2}>
          <form onSubmit={this.handleSubmitDiary}>
            <div>
              <label htmlFor=""><strong>DAIRY</strong></label>
              <br />
              <select value={this.state.value} onChange={(e) => this.handleChange(e, 'dairy')} className={styles.input_field}>
                <option value="empty"></option>
                {dairy.map((el) => {
                  return <option >
                    {el.title}</option>
                })}
              </select>
              <Input
                type="text"
                value={quantityDairy}
                onChange={(e) => this.handleChangeQuan(e, 'quantityDairy')}
                label="Quantity"
                id="quantity"
              />
              <Input
                type="text"
                value={quantityTypeDairy}
                onChange={(e) => this.handleChangeQuan(e, 'quantityTypeDairy')}
                label="QuantityType"
                id="quantityType"
                onBlur={this.handlequantityTypeBlurDairy}
              />
              {quantityTypeDairyError ? (<div>Quantity Type must be one of the following - 'kg', 'gr', 'l', 'ml'</div>) : null}
            </div>
            <Button nameButton='Add' />
          </form>
        </div>

        <div className={styles.inner_container_left_3}>
          <form onSubmit={this.handleSubmitVegetables}>
            <div>
              <label htmlFor=""><strong>VEGETABLES</strong></label>
              <br />
              <select value={this.state.value} onChange={(e) => this.handleChange(e, 'vegetables')} className={styles.input_field}>
                <option value="empty"></option>
                {vegetables.map((el) => {
                  return <option >
                    {el.title}</option>
                })}
              </select>
              <Input
                type="text"
                value={quantityVeg}
                onChange={(e) => this.handleChangeQuan(e, 'quantityVeg')}
                label="Quantity"
                id="quantity"
              />
              <Input
                type="text"
                value={quantityTypeVeg}
                onChange={(e) => this.handleChangeQuan(e, 'quantityTypeVeg')}
                label="QuantityType"
                id="quantityType"
                onBlur={this.handlequantityTypeBlurVeg}
              />
              {quantityTypeVegError ? (<div>Quantity Type must be one of the following - 'kg', 'gr', 'l', 'ml'</div>) : null}
            </div><Button nameButton='Add' />
          </form>
        </div>

        <div className={styles.inner_container_right_4}>
          <form onSubmit={this.handleSubmitFruits}>
            <div>
              <label htmlFor=""><strong>FRUITS</strong></label>
              <br />
              <select value={this.state.value} onChange={(e) => this.handleChange(e, 'fruits')} className={styles.input_field}>
                <option value="empty"></option>
                {fruits.map((el) => {
                  return <option>
                    {el.title}</option>
                })}
              </select>
              <Input
                type="text"
                value={quantityFruits}
                onChange={(e) => this.handleChangeQuan(e, 'quantityFruits')}
                label="Quantity"
                id="quantity"
              />
              <Input
                type="text"
                value={quantityTypeFruits}
                onChange={(e) => this.handleChangeQuan(e, 'quantityTypeFruits')}
                label="QuantityType"
                id="quantityType"
                onBlur={this.handlequantityTypeBlurFruits}
              />
              {quantityTypeFruitsError ? (<div>Quantity Type must be one of the following - 'kg', 'gr', 'l', 'ml'</div>) : null}
            </div><Button nameButton='Add' />
          </form>
        </div>
        <div>
          <br />
          <h2>Selected products:</h2>
          <ul>
            {productsDisplay.map((el => {
              return <li>{el}</li>
            }))}
          </ul>
          <br />
        </div>
      </div >
    )
  };
}

export default Product;

