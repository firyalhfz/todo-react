import "./App.css";
import Todo from "./components/todo/Todo";

// component app -> todo -> todolist
// membagi focus pada suatu component tertentu

const App = () => {
  return (
    <div className="App">
      <Todo></Todo>
    </div>
  );
};

export default App;
