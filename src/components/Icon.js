import classes from "./Icon.module.css";
///
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { far } from "@fortawesome/free-regular-svg-icons";
///
import { useEffect, useState } from "react";
///

library.add(far);
const arrayOfNames = Object.keys(library.definitions.far);

const Icon = () => {
  const [isWaiting, setIsWaiting] = useState(false);
  const [counter, setCounter] = useState(3);
  const [randomName, setRandonName] = useState(
    Math.round(Math.random() * arrayOfNames.length)
  );

  useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);

  const wait = function (seconds) {
    return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
  };

  const iconChangeHandler = () => {
    setIsWaiting(true);
    setCounter(3);
    wait(3).then(() => {
      setRandonName(Math.round(Math.random() * arrayOfNames.length));
      setIsWaiting(false);
    });
  };

  return (
    <div className={classes.iconContainer}>
      {isWaiting ? (
        <div className={classes.counter}>{counter}</div>
      ) : (
        <FontAwesomeIcon
          icon={["far", `${arrayOfNames[randomName]}`]}
          className={classes.icon}
        />
      )}

      <button
        onClick={iconChangeHandler}
        className={classes.button}
        disabled={isWaiting ? true : false}
      >
        {isWaiting ? "Waiting..." : "Click me!"}
      </button>
    </div>
  );
};
export default Icon;
