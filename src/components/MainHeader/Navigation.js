import React from "react";

import styles from "./Navigation.module.css";

const Navigation = (props) => {
  return (
    <nav className={styles.nav}>
      <button>Logout</button>
    </nav>
  );
};

export default Navigation;
