import React, { useState } from "react";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Property from "./components/Property";
import Add from "./components/Add";
const App = () => {
  const [property, setProperty] = useState([
    {
      name: "archit",
      description: "sadasdsadadasd",
      size: 10,
    },
    {
      name: "ritika",
      description: "dwdwedq",
      size: 11,
    },
  ]);

  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <div className="container">
          <h1 className="text-center text-uppercase mt-3">
            Property Managment
          </h1>
          <Routes>
            <Route exact path="/" element={<Property property={property} />} />
            <Route
              exact
              path="/add"
              element={<Add setProperty={setProperty} property={property} />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
