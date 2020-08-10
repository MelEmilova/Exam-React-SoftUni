import React, { Component } from 'react';
import PageSkeleton from '../../components/page-skeleton/page-skeleton';
import Input from '../../components/input/input';
import Title from '../../components/title/title';
import Recipe from '../../components/recipe/recipe'
import styles from './findRecipe-page.module.css'

class FindRecipe extends Component {
  constructor(props) {
    super(props)

    this.state = {
      first: "",
      second: "",
      third: "",
      vorth: "",
      fifth: "",
      recipes: []
    };
  }
  handleChange = (event, type) => {
    const newState = {}
    newState[type] = event.target.value
    this.setState(newState)
  };

  handleSubmit =  (event) => {
    const allFealds = [];
    const userInput = {
      allProducts:[]
    };
    event.preventDefault();
    const { first, second, third, vorth, fifth } = this.state
    allFealds.push(first, second, third, vorth, fifth);
    allFealds.map((el) =>{
      if(el.length > 1){
       userInput['allProducts'].push(el)
      };
      return userInput
    });



    fetch('http://localhost:3050/find-recipe', {
      method: 'POST',
      body: JSON.stringify(userInput),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((res) => res.json())
    .then((recipes) => {
      this.setState({
        recipes
      });
      
    })
    .catch((err) => {
      console.error('ERROR', err);
    });
  };
  
  renderFindRecipe() {
    const { recipes } = this.state
    return recipes.map((recipe) => {
      return (
        <Recipe key={recipe._id} {...recipe} />
      )
    })
  }



  render() {
    const { first, second, third, vorth, fifth } = this.state
    return (

      <PageSkeleton>
        
          <form onSubmit={this.handleSubmit} >
            <Title title="Write your products and find a recipe" />
            <br />
    
        <Input
              type="text"
              value={first}
              onChange={(e) => this.handleChange(e, 'first')}
              label="Product-1"
              id="first"
            />
       
      
            <Input
              type="text"
              value={second}
              onChange={(e) => this.handleChange(e, 'second')}
              label="Product-2"
              id="second"
            />
            <Input
              type="text"
              value={third}
              onChange={(e) => this.handleChange(e, 'third')}
              label="Product-3"
              id="third"
            />
            <Input
              type="text"
              value={vorth}
              onChange={(e) => this.handleChange(e, 'vorth')}
              label="Product-4"
              id="vorth"
            />
            <Input
              type="text"
              value={fifth}
              onChange={(e) => this.handleChange(e, 'fifth')}
              label="Product-5"
              id="fifth"
            />
            <button type='submit' className={styles.button}>Find Recipe
            </button>
          </form>

        <div>
        {this.renderFindRecipe()}
       
        </div>
       
        
        
      </PageSkeleton>

    )
  }
}


export default FindRecipe;