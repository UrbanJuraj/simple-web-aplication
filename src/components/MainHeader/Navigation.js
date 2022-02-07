import React from "react";

import styles from "./Navigation.module.css";

const Navigation = (props) => {
  return (
    <nav className={styles.nav}>
      {props.isLoggedIn && <button onClick={props.onLogout}>Logout</button>}
    </nav>
  );
};

export default Navigation;
