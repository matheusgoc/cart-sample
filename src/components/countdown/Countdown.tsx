import moment from 'moment'
import { useEffect, useState } from 'react';

interface CountdownProps {
  onClose(): void
}

const Countdown = ({onClose}: CountdownProps) => {

  const initialDuration = {
    seconds: 2,
    minutes: 2,
    hours: 2,
    days: 2,
  }

  const [counter, setCounter] = useState(initialDuration)
  const duration = moment.duration(initialDuration)

  useEffect(() => {
    setInterval(() => {
      duration.subtract(1, 's')
      setCounter({
        seconds: duration.seconds(),
        minutes: duration.minutes(),
        hours: duration.hours(),
        days: duration.days(),
      })
    }, 1000)
  }, [])

  const format = (n:number) => (n < 10)? '0' + n : n;

  return (
    <div className="
      flex flex-col md:flex-row justify-center items-center p-1
      bg-blue-marine h-12 w-auto text-gray-300 h-auto">
      <h6 className="
        font-light text-xs text-center pb-2
        md:pb-0 md:text-md sm:px-0">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </h6>
      <div className="flex">
        <div className="flex flex-col justify-center items-center ml-5">
          <div className="font-bold justify-center text-white">{format(counter.days)}</div>
          <div className="text-xs">days</div>
        </div>
        <div className="flex flex-col justify-center items-center ml-5">
          <span className="font-bold text-white">{format(counter.hours)}</span>
          <span className="text-xs">hours</span>
        </div>
        <div className="flex flex-col justify-center items-center ml-5">
          <span className="font-bold text-white">{format(counter.minutes)}</span>
          <span className="text-xs">minutes</span>
        </div>
        <div className="flex flex-col justify-center items-center ml-5">
          <span className="font-bold text-white">{format(counter.seconds)}</span>
          <span className="text-xs">seconds</span>
        </div>
      </div>
      <button onClick={onClose} className="absolute right-0 px-4 cursor-pointer focus:outline-none">
        <img src="images/close.svg" alt="close"/>
      </button>
    </div>
  )
}

export default Countdown