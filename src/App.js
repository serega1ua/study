import "./styles.css";
import Counter from "./components/Counter";
import SearchWrapper from "./components/Search";
import GenreToggle from "./components/GenreToggle";
import Todo from "./components/Todo";

export default function App() {
  return (
      <div className="App">
        <Counter />
        <SearchWrapper />
        <GenreToggle />
        <Todo />
      </div>
  );
}
