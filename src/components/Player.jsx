import { useState, useRef } from "react";

export default function Player() {
  const playerNameInputRef = useRef();
  //state related stuff
  const [enteredName, setEnteredName] = useState("");
  function handleSubmit() {
    setEnteredName(playerNameInputRef.current.value);
    playerNameInputRef.current.value = "";
  }
  //derived state stuff

  //conditional content
  const playerName = enteredName ? enteredName : "unknown entity";
  return (
    <section id="player">
      <h2>Welcome {playerName}</h2>
      <p>
        <input ref={playerNameInputRef} type="text"/>
        <button onClick={handleSubmit}>Set Name</button>
      </p>
    </section>
  );
}
