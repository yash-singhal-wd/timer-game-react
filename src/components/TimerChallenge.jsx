import {useState} from 'react';

export default function TimerChallenge({title, targetTime}) {
    //state related stuff
    const [timerExpired, setTimerExpired] = useState(false);
    //derived state stuff
    function handleStart(){
        setTimeout( () => {
            setTimerExpired(true);
        }, targetTime*1000);
    }
    //conditional components
    const startLabel = timerExpired ? "Stop Challenge" : "Start Challenge";
    const timerLabel = timerExpired ? "Timer is Running..." : undefined;
    return (
        <section className="challenge">
            <h2>{title}</h2>
            {timerExpired && <p>You fuckin lost</p>}
            <p className="challenge-time">
                {targetTime} second(s)
            </p>
            <p><button onClick={handleStart}>{startLabel}</button></p>
            <p className="active">{timerLabel}</p>
        </section>
    );
}