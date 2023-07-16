import { differenceInSeconds } from "date-fns";

import "../styles/modal.css";
export default function EndMessage({ time }) {
  const difference = differenceInSeconds(new Date(), time);
  const minutes = Math.floor(difference / 60);
  const seconds =
    difference % 60 > 9 ? difference % 60 : "0" + (difference % 60);
  return (
    <div className="end-message modal">
      <div className="message-content modal-content">
        <div className="prompt">Submit your time for the leaderboard</div>
        <form>
          <div className="input">
            <label htmlFor="user">name: </label>
            <input type="text" id="user" />
          </div>
          <div>
            <label htmlFor="time">time: </label>
            <output
              id="time"
              className="time"
            >{`${minutes} : ${seconds}`}</output>
          </div>

          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}
