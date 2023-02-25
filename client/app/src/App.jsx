import AuthPage from "./pages/AuthPage";
import TestPage from "./pages/TestPage";
import Layout from "./pages/layouts/Layout";
import { Route, Switch } from "react-router-dom";
function App ()
{
  return (
  <Layout>
   <Switch>
    <Route path="/" exact>
      <AuthPage />
        </Route>
        <Route path="/test">
          <TestPage />
    </Route>
    </Switch>
    </Layout>
  );
}

export default App;
