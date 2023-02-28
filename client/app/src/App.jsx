import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";
import NewPostPage from "./pages/NewPostPage";
import PostsPage from "./pages/PostsPage";
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
        <Route path="/new-post">
      <NewPostPage />
        </Route>
      <Route path="/posts">
      <PostsPage />
      </Route>
    </Switch>
    </Layout>
  );
}

export default App;
