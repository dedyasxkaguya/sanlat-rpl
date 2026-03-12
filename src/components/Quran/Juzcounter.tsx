import React, { useEffect, useState } from 'react'
import Today from '../Today'
import axios from 'axios';
import Juzdata from '../../assets/data/Juz.json'
const Juzcounter = () => {
  interface TopLevel {
    code: number;
    status: string;
    data: Data;
  }

  interface Data {
    hijri: Hijri;
    gregorian: Gregorian;
  }

  interface Gregorian {
    date: string;
    format: string;
    day: string;
    month: GregorianMonth;
    year: string;
    designation: Designation;
    lunarSighting: boolean;
  }

  interface Designation {
    abbreviated: string;
    expanded: string;
  }

  interface GregorianMonth {
    number: number;
    en: string;
  }

  interface Hijri {
    date: string;
    format: string;
    day: string;
    month: HijriMonth;
    year: string;
    designation: Designation;
    holidays: any[];
    adjustedHolidays: any[];
    method: string;
  }
  interface HijriMonth {
    number: number;
    en: string;
    ar: string;
    days: number;
  }

  interface juzDataProps {
    number: number
    name: string
    translation: string
  }

  const [data, setData] = useState<Data>()
  const [juz, setjuz] = useState<number>(1)
  const [rate, setRate] = useState<number>()
  const [remainDate, setRemainDate] = useState<number>()
  const [pending, isPending] = useState<boolean>(false)
  const dataJuz: juzDataProps[] = Juzdata
  const d = new Date()
  const day = (d.getDate()).toString().padStart(2, "0")
  const month = (d.getMonth() + 1).toString().padStart(2, "0")
  useEffect(() => {
    axios.get<TopLevel>(`https://api.aladhan.com/v1/gToH/${day}-${month}-2026`)
      .then(data => {
        const fetched = data.data
        setData(fetched.data)
        let dayRemain: number = (30 - Number(fetched.data.hijri.day))
        setRemainDate(dayRemain)
        setRate(30 / dayRemain)
      })
  }, [])
  const countSpeedRate = (a: number) => {
    if (remainDate) {
      setRate((30 - a) / remainDate)
    }
  }
  const handleJuzRange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setjuz(Number(e.target.value))
    setTimeout(() => {
      isPending(true)
    }, 500);
    setTimeout(() => {
      isPending(false)
      countSpeedRate(Number(e.target.value))
    }, 1000);
  }
  return (
    <main>
      <div>Hari ini adalah hari <Today /> Tanggal Masehi dan hari ke {data?.hijri.day} {data?.hijri.month.en} Tanggal Hijriyah, </div>
      {rate && (
        <section className='gap-4 d-flex flex-column flex-lg-row'>
          <div className=" p-2 rounded-2 shadow-sm">
            <label htmlFor="juzRange" className=' mb-2'>Sekarang kamu ada di juz berapa </label>
            <input type="range" name="" id="juzRange" className=' form-range' min={1} max={29} defaultValue={1} onChange={(e) => handleJuzRange(e)} autoFocus />
            <span className=' text-secondary'>Juz {juz} {dataJuz[juz - 1].name} ({dataJuz[juz - 1].translation})</span>
          </div>
          <div className=" p-2 rounded-2 shadow-sm">
            <label htmlFor="juzSpeedrun" className=''>Untuk Khatam dalam hari ke 30 ramadan, kamu perlu membaca</label>
            {!pending && (
              <input type="text" name="" id="juzSpeedrun" className=' form-control mb-2' disabled value={`${rate?.toFixed(1)} Juz atau ${Number(rate.toFixed(1)) * 10} Lembar per hari`} />
            )}
            {pending && (
              <input type="text" name="" id="juzSpeedrun" className=' form-control mb-2 text-secondary opacity-75' disabled value={`Menghitung, tunggu sebentar...`} />
            )}
            <span className=' text-secondary'>Tersisa {remainDate} hari di bulan {data?.hijri.month.en}</span>
          </div>
        </section>
      )}
    </main>
  )
}

export default Juzcounter