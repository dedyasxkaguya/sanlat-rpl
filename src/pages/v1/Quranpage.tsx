// import axios, { AxiosHeaders } from 'axios';
import React, { useState } from 'react'
// import Quranbase from '../../components/Quran/Quranbase';
import Searchayat from '../../components/Quran/Searchayat';

// interface Data {
//     count: number;
//     matches: Match[];
// }

// interface Match {
//     number: number;
//     text: string;
//     surah: Surah;
//     numberInSurah: number;
// }
// interface Surah {
//     number: number;
//     name: string;
//     englishName: string;
//     englishNameTranslation: string;
// }

const Quranpage = () => {
    const [condition, setCondition] = useState<string>()
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setCondition(e.target.value)
    }
    return (
        <main className="col-8 mx-auto mt-4 shadow rounded-4 p-4">
            <div className="gap-4 w-50 mb-2">
                <label htmlFor="" className=' form-label'>Pilih fitur</label>
                <select name="" id="" className=' form-select' onChange={(e)=>handleChange(e)}>
                    <option value="default" selected hidden>PIlih salah satu fitur</option>
                    <option value="1">Cari ayat</option>
                </select>
            </div>
            {condition == "1" && (
                <Searchayat />
            )}
        </main>
    )
}

export default Quranpage