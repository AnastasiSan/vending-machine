import React from "react";
import { hot } from "react-hot-loader/root";
import './main.global.css'
import { Vending } from "./shared/Vending";



function AppComponent() {
  return (
      <Vending/>
  )
};

export const App = hot(() => <AppComponent />);