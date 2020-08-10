import React from 'react';
import Recipe from '../../components/recipe/recipe';

class Recipes extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      recipes: []
    }
  }

  renderRecipe() {
    const { recipes } = this.state
    return recipes.map((recipe) => {
      return (
        <Recipe key={recipe._id} {...recipe} />
      )
    })
  }

  getRecipes = () => {

    fetch('http://localhost:3050/all-recipes')
      .then((res) => res.json())
      .then((recipes) => {
        this.setState({
          recipes
        })
      })
    .catch((err) => {
      console.error('ERROR', err);
    })
  }

  componentDidMount() {
    this.getRecipes()
  }


  render() {

    return (
      <div >
        {this.renderRecipe()}
      </div>


    )
  }
}



export default Recipes;
