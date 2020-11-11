import React, { useEffect, useState } from "react";
import FileDrop from "./components/onboarding/FileDrop";
import Login from "./components/onboarding/Login";
import { Route } from "react-router-dom";
import "./App.css";
import DataDisplay from "./components/dashboard/DataDisplay";
import DataCategory from "./components/dashboard/DataCategory";
import {BrowserRouter as Router} from 'react-router-dom';
import Categories from "./components/dashboard/Categories";
import { useSelector } from "react-redux";

const App = () => {
  const [activeData, setActiveData] = useState({})
  const userData = useSelector(state => state.userData)
  const categoryData = useSelector(state => state.categories)

  return (
    <div className="App">
      <Route exact path="/" component={Login} />
      <Route exact path="/" component={FileDrop} />
      <Route exact path="/categories" component={Categories} />
      <Route exact path="/photos_and_videos/your_photos.html" render={(props) => <DataDisplay {...props} />} />
      {
              userData ?
              <Router>
                {
                  categoryData.map((category) => {
                    const path = "/" + category.path + "/" + category.name
                    return <Route path={path} render={(props) => <DataDisplay {...props} data={category.data} />} />
                  })
                }
              </Router>
              : null
            }
    </div>
  );
};

export default App;
