import { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Input from "../components/Input";
import Submit from "../components/Submit";
import Label from "../components/Label";
import UserContext from "../userContext";
const SignUpPage = () =>
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
        <Label id="registerUser" text="Username:" />
        <Input id="registerUser" type="text" setValue={ UserContextProvider.setUserRegister } />
        <Label id="passwordRegister" text="Password:" />
        <Input id="passwordRegister" type="password" setValue={UserContextProvider.setPasswordRegister}/>
          <Submit name="Register" onClick={ UserContextProvider.register } />
          <Link to="/sign-in">
            <div>Have Account? Sign In.</div>
          </Link>
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

export default SignUpPage;