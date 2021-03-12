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
        <div className="app_sidebar">
          <Sidebar  />
        </div>
        
        {/* Feed */}
        <div className="app_feed">
          <Feed />
        </div>
        
        {/* Widgets */}
        <div className="app_widgets">
          <Widgets />
        </div>
      </div>

    </div>
  );
}

export default App;
