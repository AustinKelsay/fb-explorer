import React from "react";
import Landing from "./components/onboarding/Landing"
import Download from "./components/onboarding/Download"
import Drop from "./components/onboarding/Drop"
import CategoryRouter from "./components/Routing/CategoryRouter"
import MessageRouter from "./components/Routing/MessageRouter"
import { Route } from "react-router-dom";
import "./App.css";
import Categories from "./components/dashboard/Categories";
import { useSelector } from "react-redux";

const App = () => {
  const userData = useSelector(state => state.userData)
  const categoryData = useSelector(state => state.categories)

  return (
    <div className="App">
      <Route exact path="/" component={Landing} />
      <Route exact path='/download' component={Download} />
      <Route exact path='/drop' render={(props) => <Drop {...props} /> } />
      <Route exact path="/categories" render={(props) => <Categories {...props} />} />
      {
              userData ?
                  <>
                      <CategoryRouter />
                      <MessageRouter />
                  </>
              : null
            }
    </div>
  );
};

export default App;
