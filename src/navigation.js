import React, { Suspense } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';


const LazyHomePage = React.lazy(() => import ('./pages/home-page/home-page'));
const LazyRegisterPage = React.lazy(() => import('./pages/register-page/register-page'));
const LazyLoginPage = React.lazy(() => import('./pages/login-page/login-page'));
const LazyContactUsPage = React.lazy(() => import('./pages/aboutUs-page/aboutUs-page'));
const LazyAllRecipe = React.lazy(() => import('./pages/allRecipe-page/allRecipe-page'));
const LazyLogoutPage = React.lazy(() => import('./pages/logout-page/logout-page'));
const LazyCreateRecipe = React.lazy(() => import('./pages/createRecipe-page/createRecipe-page'));
const LazyFindRecipe = React.lazy(() => import('./pages/findRecipe-page/findRecipe-page'));


const LazyNavigation = () => {
 
  return (
    <BrowserRouter>
      <Switch>
        <Suspense fallback={<h1>Loading..</h1>}>
          <Route path="/" exact component={LazyHomePage} />
          <Route path="/register" component={LazyRegisterPage} />
          <Route path="/login" component={LazyLoginPage} />
          <Route path="/aboutUs" component={LazyContactUsPage} />
          <Route path="/all-recipes" component={LazyAllRecipe} />
          <Route path="/logout" component={LazyLogoutPage} />
          <Route path="/create-recipe" component={LazyCreateRecipe} />
          <Route path="/find-recipe" component={LazyFindRecipe} />

        </Suspense>
      </Switch>
    </BrowserRouter>
  )
}

export default LazyNavigation