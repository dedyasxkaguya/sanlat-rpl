import React from 'react'
import Countdown from '../components/Countdown'
import Navbar from '../components/Navbar'

const Home = () => {
    return (
        <>
            <Navbar />
            <main>
                <div className=" bg-primary">
                    Home
                </div>
                <section>
                    <label htmlFor="" className=' form-label'>Countdown Idul Fitri 1447H</label>
                </section>
                <Countdown targetDate={new Date("2026-03-20T00:00:00")} />
            </main>
        </>
    )
}

export default Home