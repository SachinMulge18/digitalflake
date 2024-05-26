import React from "react";
import { Navbar, LoginForm, Layout } from "./components";
import {
  Home,
  State,
  City,
  Wearhouse,
  NewState,
  NewCity,
  NewWearhouse,
  EditState,
  EditCity,
  EditWearhouse,
} from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/body" element={<Layout />}>
            <Route path="home" element={<Home />} />
            <Route path="state" element={<State />} />
            <Route path="city" element={<City />} />
            <Route path="wearhouse" element={<Wearhouse />} />

            <Route path="newstate" element={<NewState />} />
            <Route path="newcity" element={<NewCity />} />
            <Route path="newwearhouse" element={<NewWearhouse />} />

            <Route path="/body/state/editstate/:id" element={<EditState />} />
            <Route path="/body/state/editcity/:id" element={<EditCity />} />
            <Route
              path="/body/state/editwearhouse/:id"
              element={<EditWearhouse />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
