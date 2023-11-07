import React from "react";

import "./App.css";
import routes from "../../routes";
import Home from "../../pages/home";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

export default function App() {
  return (<>
  <Home/>
    <Router>
      <Routes>
        {routes.map((props, index) => (
          <Route key={index} {...props} />
        ))}
      </Routes>
    </Router>
  </>
     
  );
}
