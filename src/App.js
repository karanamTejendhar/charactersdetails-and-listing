import "./App.css";
import { Route, Redirect, Switch, BrowserRouter } from "react-router-dom";
import HomePage from "./components/Homepage";
import LoginPage from "./components/LoginPage";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector } from "react-redux";
import CharacterPage from "./components/CharacterPage";
import Episodes from "./components/Episodes";
import Addchar from "./components/addChar";

function App() {
  const loginstate = useSelector((state) => state.login__state);
  
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path={"/login"} exact component={LoginPage}></Route>
          {loginstate.data.loggedin && (
            <Route path={"/home"} exact component={HomePage}></Route>
          )}
          {loginstate.data.loggedin && (
            <Route path={"/char/:name"} exact component={CharacterPage}></Route>
          )}
          {loginstate.data.loggedin && (
            <Route path={"/episodes"} exact component={Episodes}></Route>
          )}
          {loginstate.data.loggedin && (
            <Route path={"/addchar"} exact component={Addchar}></Route>
          )}
          <Redirect to={"/login"} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
