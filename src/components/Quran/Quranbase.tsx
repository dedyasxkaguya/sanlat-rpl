import React from 'react'

interface QuranbaseProps {
    data: Data
    isSearch: boolean
    query: string
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

const Quranbase = ({ data, isSearch, query }: QuranbaseProps) => {
    let text = data.text.split(" ")
    console.log(isSearch)
    return (
        <main className=' mt-4 p-2 rounded-4 border shadow'>
            <input type="text" name="" id="" className=' form-control' value={`Q.S-${data?.surah.englishName}/${data?.surah.number}:${data?.numberInSurah}`} disabled />
            <div className=' text-secondary'>"
            {text.map((a)=>{
                if(a.toLowerCase().includes(query) && query.length>3){
                    return <span className=' bg-warning text-black'>{a} </span>
                }else{
                    return <span>{a} </span>
                }
            })}
                "</div>
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