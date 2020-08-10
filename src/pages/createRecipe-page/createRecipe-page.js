import React, { Component } from 'react';
import PageSkeleton from '../../components/page-skeleton/page-skeleton'
import UserContext from '../../Context';
import Products from '../../components/products/products'


class CreateRecipePage extends Component {

  static contextType = UserContext;

  render() {
    return (
      <PageSkeleton>
        <Products/>
      </PageSkeleton >

    )
  }
}
export default CreateRecipePage;