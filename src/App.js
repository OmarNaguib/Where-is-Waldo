import "./styles/App.css";
import Challenge from "./components/Challenge";
import image from "./assets/beach.jpg";

function App() {
  return (
    <div className="App">
      <header className="App-header">Where's Waldo</header>
      <Challenge url={image}></Challenge>
    </div>
  );
}

export default App;
