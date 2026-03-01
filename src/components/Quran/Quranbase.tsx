import React from 'react'

interface QuranbaseProps {
    data: Data
}
interface Data {
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

const Quranbase = ({ data }: QuranbaseProps) => {
    return (
        <main className=' mt-4 p-2 rounded-4 border shadow'>
            <input type="text" name="" id="" className=' form-control' value={`Q.S-${data?.surah.englishName}/${data?.surah.number}:${data?.numberInSurah}`} disabled />
            <span className=' text-secondary'>"{data?.text}"</span><br />
            <section className=" d-flex gap-2">
                <button type='button' className=' btn btn-success shadow-sm mt-2'>
                    <i className="bi bi-bookmark me-2"></i>
                    <span>Simpan ayat</span>
                </button>
                <button type='button' className=' btn btn-light shadow-sm mt-2'>
                    <i className="bi bi-clipboard me-2"></i>
                    <span>Salin ayat</span>
                </button>
            </section>
        </main>
    )
}

export default Quranbase