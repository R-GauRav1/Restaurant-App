import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer, toast } from "react-toastify";
import FrontPage from "./FrontPage";



function App() {
  return (
    <div>
      <ToastContainer />
      <Router>
        <Switch>
          <Route path="/" exact component={FrontPage}></Route>
        </Switch>
        {/* <Switch>
        <Route path="/" exact component={FrontPage}></Route>
        </Switch> */}
        {/* <Switch>
        <Route path="/apetizer" exact component={ApetizerPage}></Route>
        </Switch>
        <Switch>
        <Route path="/dessert" exact component={DessertPage}></Route>
        </Switch>
        <Switch>
        <Route path="/clone" exact component={ClonePage}></Route>
        </Switch>
        <Switch>
        <Route path="/weired" exact component={WeiredPage}></Route>
        </Switch> */}
       
      </Router>
    </div>
  );
}
export default App;
