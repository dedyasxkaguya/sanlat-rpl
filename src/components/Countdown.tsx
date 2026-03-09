import React, { useEffect, useState } from 'react'

interface CountProps {
  targetDate: Date
  event: string
}
const Countdown = ({ targetDate, event }: CountProps) => {
  const [result, setResult] = useState<string>()
  const countdownObject = {
    'seconds': "",
    'minutes': "",
    'hours': "",
    'days': "",
    'months': "",
    'years': "",
    'expired': false,
  }
  useEffect(() => {

    const updateCount = () => {
      const startdate = new Date()
      const diff = targetDate.getTime() - startdate.getTime()
      if (diff > 0) {

        let seconds = Math.floor(diff / 1000)
        let minutes = Math.floor(seconds / 60)
        let hours = Math.floor(minutes / 60)
        let days = Math.floor(hours / 24)
        let months = Math.floor(days / 30)
        let years = Math.floor(months / 12)
        countdownObject.seconds = (seconds % 60).toString().length < 2 ? "0" + (seconds % 60).toString() : (seconds % 60).toString()
        countdownObject.minutes = (minutes % 60).toString().length < 2 ? "0" + (minutes % 60).toString() : (minutes % 60).toString()
        countdownObject.hours = (hours % 24).toString().length < 2 ? "0" + (hours % 24).toString() : (hours % 24).toString()
        countdownObject.days = (days % 30).toString().length < 2 ? "0" + (days % 30).toString() : (days % 30).toString()
        countdownObject.months = (months % 12).toString().length < 2 ? "0" + (months % 12).toString() : (months % 12).toString()
        countdownObject.years = (years).toString().length < 2 ? "0" + (years).toString() : (years).toString()
        setResult(`${countdownObject.years} Tahun : ${countdownObject.months} Bulan : ${countdownObject.days} Hari : ${countdownObject.hours} Jam : ${countdownObject.minutes} Menit : ${countdownObject.seconds} Detik`)
      } else {
        countdownObject.expired = true
      }
    }
    const intervalId = setInterval(() => {
      updateCount()
    }, 1000);
    updateCount()
    return () => clearInterval(intervalId)
  }, [targetDate])
  return (
    <div className="">
      <label htmlFor="">{event} akan terjadi dalam</label>
      <input type="text" value={result} className=' form-control' disabled={true} />
    </div>
  )
}

export default Countdown