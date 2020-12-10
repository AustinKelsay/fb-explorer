import React from "react";
import FileDrop from "./components/onboarding/FileDrop";
import Login from "./components/onboarding/Login";
import Landing from "./components/onboarding/Landing"
import { Route } from "react-router-dom";
import "./App.css";
import DataDisplay from "./components/dashboard/DataDisplay";
import { v4 as uuidv4 } from 'uuid';
import Categories from "./components/dashboard/Categories";
import { useSelector } from "react-redux";

const App = () => {
  const userData = useSelector(state => state.userData)
  const categoryData = useSelector(state => state.categories)

  return (
    <div className="App">
      <Route exact path="/" component={Login} />
      <Route exact path="/" component={FileDrop} />
      <Route exact path="/landing" component={Landing} />
      <Route exact path="/categories" render={(props) => <Categories {...props} />} />
      {
              userData ?
                  categoryData.map((category) => {
                    const path = "/" + category.path + "/" + category.name
                    return <Route key={uuidv4()} path={path} render={(props) => <DataDisplay {...props} data={category.data} />} />
                  })
              : null
            }
    </div>
  );
};

export default App;
