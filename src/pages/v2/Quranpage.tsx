import axios, { AxiosHeaders } from 'axios';
import React, { useEffect, useState } from 'react'
import Quranbase from '../../components/Quran/Quranbase';
import Searchayat from '../../components/Quran/Searchayat';
import { Link, useParams } from 'react-router-dom';
import Readsurah from '../../components/Quran/Readsurah';
import Navbar from '../../components/Navbar';

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
    const [condition, setCondition] = useState<string>()
    const handleAyat = () => {
        setCondition("1")
    }
    const { active } = useParams()
    return (
        <>
            <Navbar />
            <main className="col-8 mx-auto mt-4 shadow rounded-4 p-4">
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
                    </div>
                </div>
                {active == "ayah" && (
                    <Searchayat />
                )}
                {active == "read" && (
                    <Readsurah />
                )}
            </main>
        </>
    )
}

export default Quranpage