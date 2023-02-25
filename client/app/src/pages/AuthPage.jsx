import { useEffect, useContext} from "react";
import Input from "../components/Input";
import Submit from "../components/Submit";
import UserContext from "../context";
const AuthPage = () =>
{
  const UserContextProvider = useContext( UserContext );
  
  useEffect( () =>
  {
    UserContextProvider.setUserData( window.localStorage.getItem( "token" ) );
    UserContextProvider.setLogin( window.localStorage.getItem( "isLoggedIn" ) );
}, [UserContextProvider])

  return (
    
    <div className="container">
      { UserContextProvider.data ?
        <h1>Welcome Mr.{ UserContextProvider.data.toUpperCase() }</h1>
        : null }
      
      { !UserContextProvider.isLoggedIn ?
        <div>
        <h1>Register</h1>
        <Input type="text" placeholder="Username" setValue={UserContextProvider.setUserRegister } />
        <Input type="password" placeholder="Paassword" setValue={UserContextProvider.setPasswordRegister}/>
        <Submit name="Register" onClick={UserContextProvider.register} />
        </div>
        : null }

      { !UserContextProvider.isLoggedIn ?
        <div>
      <h1>Login</h1>
      <Input type="text" placeholder="Username" setValue={UserContextProvider.setUserLogin} />
      <Input type="password" placeholder="Password" setValue={UserContextProvider.setPasswordLogin} />
      <Submit name="Login" onClick={UserContextProvider.login}/>
        </div>
        : null }
      
      { UserContextProvider.isLoggedIn ?
        <div>
      <h1>Logout</h1>
        <Submit name="Logout" onClick={UserContextProvider.logout} />
        </div>
        : null }
    </div>
	)
};

export default AuthPage;