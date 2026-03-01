import React from 'react'

interface QuranbaseProps {
    data: Ayah[]
    dataIdn : Translation[]
}
interface Ayah {
    number: number;
    text: string;
    numberInSurah: number;
    juz: number;
    manzil: number;
    page: number;
    ruku: number;
    hizbQuarter: number;
    sajda: boolean;
}
interface Translation{
    number: number;
    text: string;
    numberInSurah: number;
    juz: number;
    manzil: number;
    page: number;
    ruku: number;
    hizbQuarter: number;
    sajda: boolean;
}
const Ayahbase = ({ data , dataIdn }: QuranbaseProps) => {
    return (
        <div className="d-flex flex-column gap-2 mt-4 rounded-4 p-2">
            {data.map((a) => {
                let translate = (dataIdn[a.numberInSurah])
                return (
                    <>
                        <main className='p-2 rounded-2 border shadow'>
                            <p className='m-2 text-secondary text-end fs-5'>{a.text} ({a.numberInSurah}) </p>
                            <p className=' m-0'>{translate?.text}</p>
                            <section className=" d-flex gap-2">
                                {/* <button type='button' className=' btn btn-success shadow-sm mt-2'>
                                    <i className="bi bi-bookmark me-2"></i>
                                    <span>Simpan ayat</span>
                                </button>
                                <button type='button' className=' btn btn-light shadow-sm mt-2'>
                                    <i className="bi bi-clipboard me-2"></i>
                                    <span>Salin ayat</span>
                                </button> */}
                            </section>
                        </main>
                    </>
                )
            })}
        </div>
    )
}

export default Ayahbase