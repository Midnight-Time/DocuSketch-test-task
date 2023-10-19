import classes from "./App.module.css";
///
import Icon from "./components/Icon";
///

function App() {
  return (
    <div className={classes.container}>
      <div className={classes.containerInner}>
        <header className={classes.header}>
          <h1>Test task for DocuSketch</h1>
          <span>(Frontend Developer Trainee)</span>
        </header>
        <div>
          <Icon />
        </div>
      </div>
    </div>
  );
}

export default App;
