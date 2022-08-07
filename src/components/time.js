import React, { useState, useEffect } from 'react';

export const DisplayTime = () => {

  const [initialTime, setinitialTime] = useState({
    seconds: 0,
    minutes: 0,
    hours: 0,
  })

  useEffect(() => {
    let isCancelled = false;

    const incrementTime = () => {
      setTimeout(() => {
        let Seconds = initialTime.seconds
        let Minutes = initialTime.minutes
        let Hours = initialTime.hours

        Seconds++

        if (Seconds > 59) {
          Minutes++
          Seconds = 0
        }
        if (Minutes > 59) {
            Hours++
            Minutes = 0
        }
        if (Hours > 24) {
          Hours = 0
        }

        !isCancelled && setinitialTime({ seconds: Seconds, minutes: Minutes, hours: Hours });
      }, 1000)
    }
    incrementTime()

    return () => {
      isCancelled = true
    }
  }, [initialTime])

  return (
    <div>
      <p>
        {`
          ${initialTime.hours < 10 ? '0' + initialTime.hours : initialTime.hours} :
          ${initialTime.minutes < 10 ? '0' + initialTime.minutes : initialTime.minutes} :
          ${initialTime.seconds < 10 ? '0' + initialTime.seconds : initialTime.seconds}
        `}
      </p>
    </div>
  )
}