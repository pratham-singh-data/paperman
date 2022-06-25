import { Route, Switch } from "react-router-dom";
import MainPageContent from "./components/MainPageContent";
import Business from "./pages/Business";
import Entertainment from "./pages/Entertainment";
import Health from "./pages/Health";
import Home from "./pages/Home";
import Science from "./pages/Science";
import Sports from "./pages/Sports";
import Technology from "./pages/Technology";

function App() {
  return (
    <div className="App">
      <MainPageContent>
        <Switch>
          <Route path="/" exact><Home/></Route>
          <Route path="/business" exact><Business/></Route>
          <Route path="/entertainment" exact><Entertainment/></Route>
          <Route path="/health" exact><Health/></Route>
          <Route path="/science" exact><Science/></Route>
          <Route path="/sports" exact><Sports/></Route>
          <Route path="/technology" exact><Technology/></Route>
        </Switch>
      </MainPageContent>
    </div>
  );
}

export default App;
