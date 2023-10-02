import { useEffect, useState } from "react";
import { getLeaderboardOf } from "../utils/backend";

export default function Leaderboard({ name }) {
  const [records, setRecords] = useState([]);
  useEffect(() => {
    const getData = async () => {
      setRecords(await getLeaderboardOf(name));
    };
    getData();
  }, []);
  console.log(records);
  const recordsDisplay = records.map((item) => (
    <li>
      <div className="name board-item" aria-label="name">
        {item.name}
      </div>
      <div className="time board-item" aria-label="time">
        {item.time}
      </div>
    </li>
  ));
  return (
    <>
      <header className="header">
        <div className="header-text">Where's Waldo</div>
      </header>
      <div className="board" aria-labelledby="#leaderboard">
        <h1 id="leaderboard"> Leaderboard</h1>
        <div className="titles">
          <div className="name board-item">Name</div>
          <div className="time board-item">Time</div>
        </div>
        <ol>{recordsDisplay}</ol>
      </div>
    </>
  );
}
