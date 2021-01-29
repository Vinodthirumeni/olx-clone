import "./App.css";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import AdsPage from "./AdsPage";
import AddAds from "./AddAds";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route path="/AdsPage/:id">
            <AdsPage />
          </Route>
          <Route path="/AddAds">
            <AddAds />
          </Route>
          <Route path="/">
            <Body />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}
export default App;
