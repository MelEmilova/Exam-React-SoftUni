const getNavigationHeader = (loggedIn, user) => {

  const authLinks = [
    {
      title: 'Home',
      link: '/'
    },
    {
      title: 'All recipes',
      link: '/all-recipes'
    },
    {
      title: 'Find recipe',
      link: '/find-recipe'
    },
    {
      title: 'Create recipe',
      link: `/create-recipe`
    },
    {
      title: 'Logout',
      link: '/logout'
    }
  ];


  const guestLinks = [
    {
      title: 'Home',
      link: '/'
    },
    {
      title: 'All Recipes',
      link: '/all-recipes'
    },
    {
      title: 'Find recipe',
      link: '/find-recipe'
    },
    {
      title: 'Login',
      link: '/login'
    },
    {
      title: 'Register',
      link: '/register'
    },
  ]

  return loggedIn ? authLinks : guestLinks
}

export default getNavigationHeader 