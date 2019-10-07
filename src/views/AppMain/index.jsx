import React from "react";
import AppRouter from "../../route/index";
import MainHeader from "../MainHeader";
export default function AppMain() {
  return (
    <div className="App-main">
      <MainHeader />
      <AppRouter />
    </div>
  );
}
