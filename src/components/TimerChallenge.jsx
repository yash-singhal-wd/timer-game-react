import {useState} from 'react';

export default function TimerChallenge({title, targetTime}) {
    //state related stuff
    const [timerStarted, setTimerStarted] = useState(false);
    const [timerExpired, setTimerExpired] = useState(false);
    //derived state stuff
    function handleStart(){
        setTimerStarted(true);
        setTimeout( () => {
            setTimerExpired(true);
            setTimerStarted(false);
        }, targetTime*1000);
    }

    function handleStop(){
        
    }
    //conditional components
    const startLabel = timerStarted ? "Stop Challenge" : "Start Challenge";
    const timerLabel = timerStarted ?  "Timer is Running..." : timerExpired ? "Ha ha ha!" : undefined;
    const timerClass = timerStarted ? "active" : undefined;
    return (
        <section className="challenge">
            <h2>{title}</h2>
            {timerExpired && <p>You fuckin lost</p>}
            <p className="challenge-time">
                {targetTime} second{`${targetTime > 1 ? 's' : ''}`}
            </p>
            <p><button onClick={handleStart}>{startLabel}</button></p>
            <p classname={timerClass}>{timerLabel}</p>

        </section>
    );
}