import { useState } from "react";

export default function Player() {
  //state related stuff
  const [enteredName, setEnteredName] = useState("");
  function handleNameChange(e){
    setEnteredName(e.target.value);
  }
  //derived state stuff

  //conditional content
  const playerName = enteredName ? enteredName : "unknown entity";
  return (
    <section id="player">
      <h2>Welcome {playerName}</h2>
      <p>
        <input value={enteredName} type="text" onChange={handleNameChange}/>
        <button>Set Name</button>
      </p>
    </section>
  );
}
