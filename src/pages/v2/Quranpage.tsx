import axios, { AxiosHeaders } from 'axios';
import React, { useEffect, useState } from 'react'
import Searchayat from '../../components/Quran/Searchayat';
import { Link, useParams } from 'react-router-dom';
import Readsurah from '../../components/Quran/Readsurah';
import Navbar from '../../components/Navbar';
import Juzcounter from '../../components/Quran/Juzcounter';

interface Data {
    count: number;
    matches: Match[];
}

interface Match {
    number: number;
    text: string;
    surah: Surah;
    numberInSurah: number;
}
interface Surah {
    number: number;
    name: string;
    englishName: string;
    englishNameTranslation: string;
}

const Quranpage = () => {
    // const [condition, setCondition] = useState<string>()
    const { active } = useParams()
    const available = ["ayah", "read", "count"]
    let isCorrect: boolean = false
    if (active) {
        available.map((a) => {
            if (a == active) {
                isCorrect = true
            }
        })
    }
    console.log(isCorrect)
    return (
        <>
            <Navbar />
            <main className="col-8 mx-auto shadow rounded-4 p-4" style={{ marginTop: '12dvh' }}>
                <div className="d-flex gap-2 mb-2 flex-column">
                    <span>Pilih fitur</span>
                    <div className="d-flex gap-2">
                        <Link to="/quran/ayah" className={` btn btn-light border p-2 px-4 ${active == 'ayah' ? 'btn-dark' : ''}`}>
                            <i className="bi bi-search me-2"></i>
                            <span>Cari teks</span>
                        </Link>
                        <Link to="/quran/read" className={` btn btn-light border p-2 px-4 ${active == 'read' ? 'btn-dark' : ''}`}>
                            <i className="bi bi-book me-2"></i>
                            <span>Baca Quran</span>
                        </Link>
                        <Link to="/quran/count" className={` btn btn-light border p-2 px-4 ${active == 'count' ? 'btn-dark' : ''}`}>
                            <i className="bi bi-calculator me-2"></i>
                            <span>Hitung Juz</span>
                        </Link>
                        {!isCorrect && (
                            <p className='text-secondary my-auto'>Pilihlah salah satu fitur</p>
                        )}
                    </div>
                </div>
                {active == "ayah" && (
                    <Searchayat />
                )}
                {active == "read" && (
                    <Readsurah />
                )}
                {active == "count" && (
                    <Juzcounter />
                )}
                {!isCorrect && (
                    <div className="">
                        Tidak ada fitur yang sesuai dengan rute {active}
                    </div>
                )}
            </main>
        </>
    )
}

export default Quranpage