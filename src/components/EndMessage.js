import { useState } from "react";
import "../styles/modal.css";
import { addLeaderboardRecord } from "../utils/backend";
export default function EndMessage({ time }) {
  const [name, setName] = useState("");
  const submitRecord = async (e) => {
    e.preventDefault();
    console.log("here");

    console.log(await addLeaderboardRecord({ name, time }));
  };
  return (
    <div className="end-message modal">
      <div className="message-content modal-content">
        <div className="prompt">Submit your time for the leaderboard</div>
        <form>
          <div className="input">
            <label htmlFor="user">name: </label>
            <input
              type="text"
              id="user"
              defaultValue={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div>
            <label htmlFor="time">time: </label>
            <output id="time" className="time">
              {time}
            </output>
          </div>

          <button onClick={submitRecord}>Submit</button>
        </form>
      </div>
    </div>
  );
}
