import React, { useEffect, useState } from "react";
import FileDrop from "./components/onboarding/FileDrop";
import Login from "./components/onboarding/Login";
import { Route } from "react-router-dom";
import "./App.css";
import DataDisplay from "./components/dashboard/DataDisplay";
import DataCategory from "./components/dashboard/DataCategory";
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
      <Route exact path="/posts/your_posts_1.html" render={(props) => <DataDisplay {...props} />} />
      {/* {
                userData ?
                categoryData.map((category) => {
                    const path = "/" + category.path + "/" + category.name
                    console.log(typeof(path), path)
                    if (path == '/posts/your_posts_1.html') {
                      setActiveData(category.data)
                    }
                    return <Route exact path={path} render={(props) => <DataDisplay {...props} data={category.data} />} />
                })
                : null
            } */}
    </div>
  );
};

export default App;
