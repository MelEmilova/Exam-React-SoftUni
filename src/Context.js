import React from 'react';

const UserContext = React.createContext({
  loddedIn: false,
  user: null,
  lodIn: () =>{},
  logOut:()=>{}
});

export default UserContext;