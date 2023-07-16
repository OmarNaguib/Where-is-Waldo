import "../styles/modal.css";
export default function EndMessage({ time }) {
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
            >{`${time[0]} : ${time[1]}`}</output>
          </div>

          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}
