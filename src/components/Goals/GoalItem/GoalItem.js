import React from "react";

import styles from "./GoalItem.module.css";

const GoalItem = (props) => {
  const deleteHandler = () => {
    props.onDelete(props.id);
  };

  return (
    <li className={styles["goal-item"]}>
      {props.children}
      <button onClick={deleteHandler}>Delete</button>
    </li>
  );
};

export default GoalItem;
