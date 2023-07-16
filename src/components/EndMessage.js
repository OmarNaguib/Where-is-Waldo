import { differenceInSeconds } from "date-fns";

import "../styles/modal.css";
export default function EndMessage({ time }) {
  const difference = differenceInSeconds(new Date(), time);
  const minutes = Math.floor(difference / 60);
  const seconds = difference % 60;
  return (
    <div className="end-message modal">
      <div className="message-content modal-content">
        <div>Submit your time for the leaderboard</div>
        <form>
          <div className="input">
            <label htmlFor="user">name:</label>
            <input type="text" id="user" />
            <button>Submit</button>
          </div>
          <div>
            <div className="time">{`${minutes} : ${seconds}`}</div>
          </div>
        </form>
      </div>
    </div>
  );
}
