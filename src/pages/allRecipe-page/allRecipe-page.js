import React, { Component } from 'react';
import PageSkeleton from '../../components/page-skeleton/page-skeleton'
import UserContext from '../../Context';
import Recipes from '../../components/recipes/recipes';
import Title from '../../components/title/title'

class allRecipes extends Component {

  static contextType = UserContext;

  render() {

    return (
     
        <PageSkeleton>
        <Title title="All Recipes"/>
          <Recipes/>
        </PageSkeleton>
      
    )
  }
}
export default allRecipes;