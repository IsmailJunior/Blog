import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";
import Layout from "./pages/layouts/Layout";
import { Route, Switch } from "react-router-dom";
function App ()
{
  return (
  <Layout>
   <Switch>
    <Route path="/sign-up">
      <SignUpPage />
        </Route>
            <Route path="/sign-in">
      <SignInPage />
        </Route>
    </Switch>
    </Layout>
  );
}

export default App;
