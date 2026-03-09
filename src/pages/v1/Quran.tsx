import axios from 'axios';
import { useEffect, useState } from 'react'
// interface Data {
//     count: number;
//     matches: Match[];
// }

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

const Quran = () => {
    const [data,setData] = useState<Match>()
    // const [surah, setSurah] = useState<Surah>()
    useEffect(() => {
        axios.get('http://api.alquran.cloud/v1/search/zina/all/id.indonesian')
            .then(data => {
                const fetched = data.data
                setData(fetched.data.matches[0])
            })
    }, []);
    return (
        <main>
            <label htmlFor="" className=' form-label'>
                Quran
            </label>
            <input type="text" name="" id="" className=' form-control' value={`Q.S-${data?.surah.englishName}/${data?.surah.number}:${data?.numberInSurah}`}    disabled/>
            <span className=' text-secondary p-2'>{data?.text}</span>
        </main>
    )
}

export default Quran