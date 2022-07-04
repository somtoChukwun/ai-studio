import { Route, Routes } from "react-router-dom";
import Layout from "./components/GlobalStyles/Layout/Layout";
import React, { createContext } from 'react';

import Home from "./components/Home/Home";
import SolutionsPage from "./components/SolutionsPage/SolutionsPage";
import TechnologyPage from "./components/TechnologyPage/TechnologyPage";

import './components/GlobalStyles/GlobalStyles';
import GlobalStyles from "./components/GlobalStyles/GlobalStyles";
import MenuManager from './components/GlobalStyles/Layout/MenuContent/MenuManager/MenuManager'

export const MenuContext = createContext({
  open: false,
  setOpen: () => {}
});

function App() {
  return (
    <>
    <MenuManager>
      <Routes >
        <Route path ="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path ="solutions" element={<SolutionsPage />} />
          <Route path ="technology" element={<TechnologyPage />} />

        </Route>
      </Routes>
      </MenuManager>
    </>
   
  );
}

export default App;
