import "../styles/modal.css";
export default function EndMessage() {
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
        </form>
      </div>
    </div>
  );
}
