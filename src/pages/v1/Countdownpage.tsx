import React, { useState } from 'react'
import Navbar from '../../components/Navbar'
import Countdown from '../../components/Countdown'

const Countdownpage = () => {
    const [date,setDate] = useState<string>('2026-03-20')
    const [event,setEvent] = useState<string>('Idul Fitri 2026')
    const handleEvent = (e:React.ChangeEvent<HTMLSelectElement>) => {
        setDate(e.target.value)
        setEvent(e.target.selectedOptions[0].textContent)
    }
    const dates = [
        { masehi: 2026, hijriyah: 1447, date: "2026-03-20", event: "Idul Fitri" },
        { masehi: 2026, hijriyah: 1447, date: "2026-05-27", event: "Idul Adha" },
        { masehi: 2026, hijriyah: 1448, date: "2026-06-16", event: "Tahun Baru Islam" },
        { masehi: 2026, hijriyah: 1448, date: "2026-08-25", event: "Maulid Nabi" },

        // 2027
        { masehi: 2027, hijriyah: "1448-1449", date: "2027-02-03", event: "Isra Mi'raj" },
        { masehi: 2027, hijriyah: 1448, date: "2027-03-09", event: "Idul Fitri" },
        { masehi: 2027, hijriyah: 1448, date: "2027-05-16", event: "Idul Adha" },
        { masehi: 2027, hijriyah: 1449, date: "2027-06-06", event: "Tahun Baru Islam" },
        { masehi: 2027, hijriyah: 1449, date: "2027-08-15", event: "Maulid Nabi" },

        // 2028
        { masehi: 2028, hijriyah: "1449-1450", date: "2028-01-23", event: "Isra Mi'raj" },
        { masehi: 2028, hijriyah: 1449, date: "2028-02-26", event: "Idul Fitri" },
        { masehi: 2028, hijriyah: 1449, date: "2028-05-04", event: "Idul Adha" },
        { masehi: 2028, hijriyah: 1450, date: "2028-05-25", event: "Tahun Baru Islam" },
        { masehi: 2028, hijriyah: 1450, date: "2028-08-03", event: "Maulid Nabi" },

        // 2029
        { masehi: 2029, hijriyah: "1450-1451", date: "2029-01-12", event: "Isra Mi'raj" },
        { masehi: 2029, hijriyah: 1450, date: "2029-02-15", event: "Idul Fitri" },
        { masehi: 2029, hijriyah: 1450, date: "2029-04-24", event: "Idul Adha" },
        { masehi: 2029, hijriyah: 1451, date: "2029-05-14", event: "Tahun Baru Islam" },
        { masehi: 2029, hijriyah: 1451, date: "2029-07-23", event: "Maulid Nabi" },
        { masehi: 2029, hijriyah: 1451, date: "2029-12-31", event: "Isra Mi'raj" }, // Terjadi 2x dalam setahun masehi

        // 2030
        { masehi: 2030, hijriyah: 1451, date: "2030-02-05", event: "Idul Fitri" },
        { masehi: 2030, hijriyah: 1451, date: "2030-04-14", event: "Idul Adha" },
        { masehi: 2030, hijriyah: 1452, date: "2030-05-04", event: "Tahun Baru Islam" },
        { masehi: 2030, hijriyah: 1452, date: "2030-07-13", event: "Maulid Nabi" },
        { masehi: 2030, hijriyah: 1452, date: "2030-12-21", event: "Isra Mi'raj" },

        // 2031
        { masehi: 2031, hijriyah: 1452, date: "2031-01-25", event: "Idul Fitri" },
        { masehi: 2031, hijriyah: 1452, date: "2031-04-03", event: "Idul Adha" },
        { masehi: 2031, hijriyah: 1453, date: "2031-04-23", event: "Tahun Baru Islam" },
        { masehi: 2031, hijriyah: 1453, date: "2031-07-02", event: "Maulid Nabi" },
        { masehi: 2031, hijriyah: 1453, date: "2031-12-11", event: "Isra Mi'raj" },

        // 2032
        { masehi: 2032, hijriyah: 1453, date: "2032-01-14", event: "Idul Fitri" },
        { masehi: 2032, hijriyah: 1453, date: "2032-03-22", event: "Idul Adha" },
        { masehi: 2032, hijriyah: 1454, date: "2032-04-11", event: "Tahun Baru Islam" },
        { masehi: 2032, hijriyah: 1454, date: "2032-06-20", event: "Maulid Nabi" },
        { masehi: 2032, hijriyah: 1454, date: "2032-11-29", event: "Isra Mi'raj" },

        // 2033
        { masehi: 2033, hijriyah: 1454, date: "2033-01-03", event: "Idul Fitri" },
        { masehi: 2033, hijriyah: 1454, date: "2033-03-11", event: "Idul Adha" },
        { masehi: 2033, hijriyah: 1455, date: "2033-04-01", event: "Tahun Baru Islam" },
        { masehi: 2033, hijriyah: 1455, date: "2033-06-09", event: "Maulid Nabi" },
        { masehi: 2033, hijriyah: 1455, date: "2033-11-19", event: "Isra Mi'raj" },
        { masehi: 2033, hijriyah: 1455, date: "2033-12-23", event: "Idul Fitri" }, // Terjadi 2x (awal & akhir tahun)

        // 2034
        { masehi: 2034, hijriyah: 1455, date: "2034-03-01", event: "Idul Adha" },
        { masehi: 2034, hijriyah: 1456, date: "2034-03-21", event: "Tahun Baru Islam" },
        { masehi: 2034, hijriyah: 1456, date: "2034-05-30", event: "Maulid Nabi" },
        { masehi: 2034, hijriyah: 1456, date: "2034-11-08", event: "Isra Mi'raj" },
        { masehi: 2034, hijriyah: 1456, date: "2034-12-12", event: "Idul Fitri" },

        // 2035
        { masehi: 2035, hijriyah: 1456, date: "2035-02-18", event: "Idul Adha" },
        { masehi: 2035, hijriyah: 1457, date: "2035-03-11", event: "Tahun Baru Islam" },
        { masehi: 2035, hijriyah: 1457, date: "2035-05-19", event: "Maulid Nabi" },
        { masehi: 2035, hijriyah: 1457, date: "2035-10-28", event: "Isra Mi'raj" },
        { masehi: 2035, hijriyah: 1457, date: "2035-12-02", event: "Idul Fitri" },

        // 2036
        { masehi: 2036, hijriyah: 1457, date: "2036-02-07", event: "Idul Adha" },
        { masehi: 2036, hijriyah: 1458, date: "2036-02-28", event: "Tahun Baru Islam" },
        { masehi: 2036, hijriyah: 1458, date: "2036-05-08", event: "Maulid Nabi" },
        { masehi: 2036, hijriyah: 1458, date: "2036-10-17", event: "Isra Mi'raj" },
        { masehi: 2036, hijriyah: 1458, date: "2036-11-20", event: "Idul Fitri" },

        // 2037
        { masehi: 2037, hijriyah: 1458, date: "2037-01-27", event: "Idul Adha" },
        { masehi: 2037, hijriyah: 1459, date: "2037-02-17", event: "Tahun Baru Islam" },
        { masehi: 2037, hijriyah: 1459, date: "2037-04-27", event: "Maulid Nabi" },
        { masehi: 2037, hijriyah: 1459, date: "2037-10-06", event: "Isra Mi'raj" },
        { masehi: 2037, hijriyah: 1459, date: "2037-11-10", event: "Idul Fitri" },

        // 2038
        { masehi: 2038, hijriyah: 1459, date: "2038-01-16", event: "Idul Adha" },
        { masehi: 2038, hijriyah: 1460, date: "2038-02-06", event: "Tahun Baru Islam" },
        { masehi: 2038, hijriyah: 1460, date: "2038-04-17", event: "Maulid Nabi" },
        { masehi: 2038, hijriyah: 1460, date: "2038-09-25", event: "Isra Mi'raj" },
        { masehi: 2038, hijriyah: 1460, date: "2038-10-30", event: "Idul Fitri" },

        // 2039
        { masehi: 2039, hijriyah: 1460, date: "2039-01-05", event: "Idul Adha" },
        { masehi: 2039, hijriyah: 1461, date: "2039-01-26", event: "Tahun Baru Islam" },
        { masehi: 2039, hijriyah: 1461, date: "2039-04-06", event: "Maulid Nabi" },
        { masehi: 2039, hijriyah: 1461, date: "2039-09-15", event: "Isra Mi'raj" },
        { masehi: 2039, hijriyah: 1461, date: "2039-10-20", event: "Idul Fitri" },
        { masehi: 2039, hijriyah: 1461, date: "2039-12-26", event: "Idul Adha" }, // 2x Adha dalam setahun

        // 2040
        { masehi: 2040, hijriyah: 1462, date: "2040-01-16", event: "Tahun Baru Islam" },
        { masehi: 2040, hijriyah: 1462, date: "2040-03-26", event: "Maulid Nabi" },
        { masehi: 2040, hijriyah: 1462, date: "2040-09-03", event: "Isra Mi'raj" },
        { masehi: 2040, hijriyah: 1462, date: "2040-10-08", event: "Idul Fitri" },
        { masehi: 2040, hijriyah: 1462, date: "2040-12-15", event: "Idul Adha" },

        // 2041
        { masehi: 2041, hijriyah: 1463, date: "2041-01-05", event: "Tahun Baru Islam" },
        { masehi: 2041, hijriyah: 1463, date: "2041-03-15", event: "Maulid Nabi" },
        { masehi: 2041, hijriyah: 1463, date: "2041-08-24", event: "Isra Mi'raj" },
        { masehi: 2041, hijriyah: 1463, date: "2041-09-27", event: "Idul Fitri" },
        { masehi: 2041, hijriyah: 1463, date: "2041-12-05", event: "Idul Adha" },
        { masehi: 2041, hijriyah: 1464, date: "2041-12-25", event: "Tahun Baru Islam" } // Akhir 2041 masuk 1464 H
    ]
    return (
        <>
            <Navbar />
            <main className="col-10 col-lg-8 mx-auto p-4 rounded-4 shadow " style={{marginTop:'12dvh'}}>
                <div className=" mb-4 ">
                    <label htmlFor="">Pilih Hari besar Islam</label>
                    <select name="" id="" className=' form-select' onChange={(e)=>handleEvent(e)}>
                        <option value="default" selected hidden>Idul Fitri 2026</option>
                        {dates.map((a) => {
                            return (
                                <option value={a.date}>{a.event} {a.masehi}</option>
                            )
                        })
                        }
                    </select>
                </div>
            <Countdown targetDate={new Date(date)} event={event}/>
            </main>
        </>
    )
}

export default Countdownpage