import React from 'react'
import Countdown from '../../components/Countdown'
import Quran from '../v1/Quran'
import Shalat from '../v1/Shalat'

const Tests = () => {
  return (
    <main className=' col-8 mx-auto mt-4'>
      List komponen dalam website
      <div className="row row-cols-2">
        <div className="p-2">
          <section className=' p-2 shadow rounded-4'>
            <label htmlFor="" className=' fw-semibold'>1. Countdown lebaran</label>
            <Countdown targetDate={new Date("2026-03-20T00:00:00")} />
          </section>
        </div>
        <div className="p-2">
          <section className=' p-2 shadow rounded-4'>
            <label htmlFor="" className=' fw-semibold'>2. Qur'an</label>
            <Quran />
          </section>
        </div>
        <div className="p-2">
          <section className=' p-2 shadow rounded-4'>
            <label htmlFor="" className=' fw-semibold'>3. Jadwal Shalat</label>
            <Shalat />
          </section>
        </div>
      </div>
    </main>
  )
}

export default Tests