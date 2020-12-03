import React from 'react'
import CountUp, {useCountUp} from 'react-countup'

function CountUpPractical() {

    const { countUp, start, pauseResume, reset, update} = useCountUp({
        startOnMount: false,
        duration: 5,
        end: 1000,
    })

    return (
        <div>
            <h5>{countUp}</h5>
            <button onClick={start}>Start</button>
            <button onClick={reset}>Reset</button>
            <button onClick={pauseResume}>Pause/Resume</button>
            <button onClick={() => update(2000)}>Update</button>
        </div>
    )
}

export default CountUpPractical
