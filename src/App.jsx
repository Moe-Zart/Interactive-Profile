import "./App.css";
import {BrowserRouter, Route} from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Route path="/" exact component={Home} />
    </BrowserRouter>
  );
}

export default App;
