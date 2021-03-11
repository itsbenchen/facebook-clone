import React from "react";
import './App.css';
import Header from "./Header";
import Sidebar from "./Sidebar";

function App() {
  return (
    <div class="app">
      <Header />

      {/* App Body */}
      <div class="app_body">
        {/* Sidebar */}
        <Sidebar />
        {/* Feed */}
        {/* Widgets */}
      </div>

    </div>
  );
}

export default App;
