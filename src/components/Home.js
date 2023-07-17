import { NavLink } from "react-router-dom";
export default function Home() {
  return (
    <div className="home">
      <div className="play">
        <NavLink to="/play">Play</NavLink>
      </div>
      <div className="leaderboard">
        <NavLink to="/leaderboard">Leaderboard</NavLink>
      </div>
    </div>
  );
}
