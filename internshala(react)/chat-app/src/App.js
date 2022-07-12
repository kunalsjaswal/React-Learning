import React from "react";
import { Route, Switch} from "react-router-dom";
import 'rsuite/dist/styles/rsuite-default.css';
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import { ProfileProvider } from "./context/profile.context";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";

function App() {
  return (
    <ProfileProvider>
    <Switch>

          {/* Signin Route  */}
          <PublicRoute path="/signin">
            <SignIn/>
          </PublicRoute>

          {/* private router for home  */}
          <PrivateRoute>
            <Home/>
          </PrivateRoute>
          
    </Switch>
    </ProfileProvider>
  );
}

export default App;
