import React, { useState } from "react";
import Login from "./components/Login/Login";

import MainHeader from "./components/MainHeader/MainHeader";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginHandler = () => {
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
  };

  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>{!isLoggedIn && <Login onLogin={loginHandler} />}</main>
    </React.Fragment>
  );
}

export default App;
