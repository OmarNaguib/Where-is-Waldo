import "./styles/App.css";
import Home from "./components/Home";
import Challenge from "./components/Challenge";
import Leaderboard from "./components/LeaderBoard";
import image from "./assets/beach.jpg";
import { HashRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/play"
            element={<Challenge url={image} name="beach"></Challenge>}
          ></Route>
          <Route path="/board" element={<Leaderboard />}></Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
