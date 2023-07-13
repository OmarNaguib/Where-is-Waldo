export default function Header({ characters }) {
  const headerCharacters = characters.map((item) => {
    return (
      <div className="character">
        <img src={item[1]} alt={item[0]} />
        <div className="name">{item[0]}</div>
      </div>
    );
  });
  return (
    <header className="header">
      <div className="header-text">Where's Waldo</div>
      <div className="characters">{headerCharacters}</div>
    </header>
  );
}
