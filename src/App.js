import React from "react";
import "./App.css";
import Sidebar from "./component/Sidebar";
import Feed from "./component/Feed";
import Widgets from "./component/Widgets";

function App() {
  return (
    <div className="app">
      {/* SIDEBAR */}
      <Sidebar />

      {/* FEED */}
      <Feed />

      {/* WIDGET */}
      <Widgets />
    </div>
  );
}

export default App;
