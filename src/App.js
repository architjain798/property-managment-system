import React, { useState } from "react";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Property from "./components/Property";
import Add from "./components/Add";
const App = () => {
  const [property, setProperty] = useState([
    {
      name: "Property 1",
      description:
        "After querying property information (neighborhood, the number of rooms, price, etc.), home buyers will see listing results that match their search. On the search results page, property photos immediately attract their eyeballs.",
      size: 10,
    },
    {
      name: "Property 2",
      description:
        "So far in their journey, home shoppers have narrowed their choices based on data and pictures. But they still need to get a feel for what makes each home unique and interesting compared to other homes on the market",
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
            <Route
              exact
              path="/"
              element={
                <Property setProperty={setProperty} property={property} />
              }
            />
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
