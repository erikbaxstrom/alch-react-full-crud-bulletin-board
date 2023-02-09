import { Route, Switch, Redirect } from 'react-router-dom';
import Auth from './components/Auth/Auth';
import { useUser } from './context/UserContext.js';
import Posts from './components/Posts/Posts.js';

import './App.css';

function App() {
  const { handleLogout, user } = useUser();

  return (
    <div className="App">
      <header>
        <div>
          <span>{user && `Hello, ${user.email}`}</span>
          {user && <button onClick={handleLogout}>Sign Out</button>}
        </div>
      </header>
      <main>
        <Switch>
          <Route path="/auth/:loginType" component={Auth} />
          <Route path="/" component={Posts} />
          <Route path="/Posts">
            <>
              {user && <Redirect to="/Posts" />}
              {!user && <Redirect to="/auth/sign-in" />}
            </>
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
