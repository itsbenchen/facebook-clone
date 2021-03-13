import React from "react";
import './App.css';
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widgets from "./Widgets";

// Login Feature
import Login from "./Login";
import { useStateValue } from "./StateProvider";

// When a user logins, we push the info into the data layer to be used by the components

function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="app">
      {!user ? 
        (
          <>
            <Login />
          </>
        ) : 
        (
          <>
            {/* App Header */}
            <div className="app_headerContainer">
              <Header />
            </div>

            {/* App Body */}
            <div className="app_bodyContainer">
              {/* Sidebar */}
              <div className="app_sidebarContainer">
                <Sidebar  />
              </div>
              
              {/* Feed */}
              <div className="app_feedContainer">
                <Feed />
              </div>
              
              {/* Widgets */}
              <div className="app_widgetsContainer">
                <Widgets />
              </div>
            </div>
          </>
        )
      }
    </div>
  );
}

export default App;
