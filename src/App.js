import "./App.css";
import { Route, Switch } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import Home from "./Pages/Home";
import VideoBackground from "./Components/VideoBackground";
function App() {
  return (
    <div className="App">
      <VideoBackground/>
          <Home />          
    </div>
  );
}

export default App;
