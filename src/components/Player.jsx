import { useRef, useState } from "react";

export default function Player() {
  const [playerName, setPlayerName] = useState(null);
  const playerNameRef = useRef();
  const submitHandler = () => {
    setPlayerName(playerNameRef.current.value);
  };
  return (
    <section id="player">
      <h2>Welcome {playerName ?? "unknown entity"} </h2>
      <p>
        <input ref={playerNameRef} type="text" />
        <button onClick={submitHandler}>Set Name</button>
      </p>
    </section>
  );
}
