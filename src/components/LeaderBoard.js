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
      <span className="name">{item.name}</span>
      <span className="time">{item.time}</span>
    </li>
  ));
  return (
    <div className="board">
      <h1>Leaderboard</h1>
      <ol>{recordsDisplay}</ol>
    </div>
  );
}
