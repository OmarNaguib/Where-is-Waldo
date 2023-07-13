import "./styles/App.css";
import Challenge from "./components/Challenge";
import image from "./assets/beach.jpg";

function App() {
  return (
    <div className="App">
      <Challenge url={image} name="beach"></Challenge>
    </div>
  );
}

export default App;
