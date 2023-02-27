import { createContext, useState } from "react";
import axios from "axios";

const UserContext = createContext( null );

export const UserContextProvider = ( { children } ) =>
{
	const [ registerUsername, setRegisterUsername ] = useState( "" );
	const [ registerPassword, setRegisterPassword ] = useState( "" );
	const [ loginUsername, setLoginUsername ] = useState( "" );
  const [ loginPassword, setLoginPassword ] = useState( "" );
	const [ isLoggedIn, setIsLoggedIn ] = useState( false );	
  const [ data, setData ] = useState( null );
  
	const setLogin = ( bool ) =>
	{
		setIsLoggedIn(bool)
	}

	const setUserRegister = ( value ) =>
	{
		setRegisterUsername(value)
	}

	const setPasswordRegister = ( value ) =>
	{
		setRegisterPassword(value)
	}

	const setUserLogin = ( value ) =>
	{
		setLoginUsername(value)
	}

	const setPasswordLogin = ( value ) =>
	{
		setLoginPassword(value)
	}

	const setUserData = ( value ) =>
	{
		setData(value)
  }
  
	const register = () =>
  {
    axios( {
      method: "post",
      data: {
        username: registerUsername,
        password: registerPassword,
      },
      withCredentials: true,
      url: "/register"
    } ).then( res =>
    {
      window.localStorage.setItem( "token", res.data.username );
      window.localStorage.setItem( "isLoggedIn", true );
      setLogin( window.localStorage.getItem( "isLoggedIn" ) );
    } ).catch( error =>
    {
      if ( error.response )
      {
        console.log( error.response.data );
        console.log( error.response.status );
        console.log( error.response.headers );
        window.location.href("/")
      } else if ( error.request )
      {
        console.log(error.request);
      } else
      {
        console.log('Error', error.message);
      }
    })
	}
	const login = () =>
  {
      axios( {
      method: "post",
      data: {
        username: loginUsername,
        password: loginPassword,
      },
      withCredentials: true,
      url: "/login"
    } ).then( res =>
    {
      window.localStorage.setItem( "token", res.data.username );
      window.localStorage.setItem( "isLoggedIn", true );
    	setLogin( window.localStorage.getItem( "isLoggedIn" ) );
    } ).catch( error =>
    {
      if ( error.response )
      {
        console.log( error.response.data );
        console.log( error.response.status );
        console.log( error.response.headers );
      } else if ( error.request )
      {
        console.log(error.request);
      } else
      {
        console.log('Error', error.message);
      }
    })
  }

  const logout = () =>
  {
      axios( {
      method: "get",
      withCredentials: true,
      url: "/logout"
    } )
        .then( () =>
        {
          window.localStorage.removeItem( "token" );
          window.localStorage.removeItem( "isLoggedIn" );
          window.location.href = "/sign-in";
    })
  }
	
	const context = {
		setLogin,
		isLoggedIn,
		setUserRegister,
		registerUsername,
		setPasswordRegister,
		registerPassword,
		setUserLogin,
		loginUsername,
		setPasswordLogin,
		loginPassword,
		setUserData,
		data,
		register,
		login,
		logout
	}
	return (
		<UserContext.Provider value={ context }>
			{children}
		</UserContext.Provider>
	)
};

export default UserContext;