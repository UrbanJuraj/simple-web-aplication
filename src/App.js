import React, { useState } from "react";
import GoalInput from "./components/Goals/GoalInput/GoalInput";
import GoalsList from "./components/Goals/GoalsList/GoalsList";
import Login from "./components/Login/Login";

import MainHeader from "./components/MainHeader/MainHeader";
import Card from "./components/UI/Card/Card";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [goals, setGoals] = useState([]);

  const addGoalHandler = (enteredText) => {
    setGoals((prevGoals) => {
      const updatedGoals = [...prevGoals];
      updatedGoals.unshift({ text: enteredText, id: Math.random().toString() });
      return updatedGoals;
    });
  };

  const deleteItemHandler = (goalId) => {
    setGoals((prevGoals) => {
      const updatedGoals = prevGoals.filter((goal) => goal.id !== goalId);
      return updatedGoals;
    });
  };

  const loginHandler = () => {
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
  };

  let content = <p>No goals found.</p>;

  if (goals.length > 0)
    content = <GoalsList goals={goals} onDeleteItem={deleteItemHandler} />;

  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && (
          <Card>
            <GoalInput onAddGoal={addGoalHandler} />
          </Card>
        )}
        {isLoggedIn && <Card>{content}</Card>}
      </main>
    </React.Fragment>
  );
}

export default App;
