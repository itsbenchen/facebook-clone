import React from "react";
import './App.css';
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widgets from "./Widgets";

function App() {
  return (
    <div className="app">
      <Header />

      {/* App Body */}
      <div className="app_body">
        {/* Sidebar */}
        <Sidebar />
        {/* Feed */}
        <Feed />
        {/* Widgets */}
        <Widgets />
      </div>

    </div>
  );
}

export default App;
