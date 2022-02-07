import React from "react";
import GoalItem from "../GoalItem/GoalItem";

import styles from "./GoalsList.module.css";

const GoalsList = (props) => {
  return (
    <ul className={styles["goal-list"]}>
      {props.goals.map((goal) => (
        <GoalItem key={goal.id} id={goal.id} onDelete={props.onDeleteItem}>
          {goal.text}
        </GoalItem>
      ))}
    </ul>
  );
};

export default GoalsList;
