import "./App.css";
import { Route, Switch } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import Home from "./Routes/Home";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
