import { useEffect, useContext } from "react";
import UserContext from "../context";

const TestPage = () =>
{
	const UserContextProvider = useContext( UserContext );
	useEffect( () =>
	{
		UserContextProvider.setLogin( window.localStorage.getItem( "isLoggedIn" ) );
	}, [ UserContextProvider ] );
	
	return (
		<div>
			{ UserContextProvider.isLoggedIn ? 
				<h1>Hi Sir { UserContextProvider.data.toUpperCase()}</h1>
				: <h1>You must log in!!</h1>
			}
		</div>
	)
};

export default TestPage;