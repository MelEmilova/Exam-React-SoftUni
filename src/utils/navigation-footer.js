const getNavigationFooter = (loggedIn) => {

  const autlinks = [
    {
      title: 'Home',
      link: '/'
    },
    {
      title: 'About Us',
      link: '/aboutUs'
    },
  ];


  const guestLinks = [
    {
      title: 'Home',
      link: '/'
    },
    {
      title: 'About Us',
      link: '/aboutUs'
    },
  ]

  return loggedIn ? autlinks : guestLinks
}

export default getNavigationFooter