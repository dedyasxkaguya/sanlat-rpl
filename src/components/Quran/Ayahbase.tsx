// @ts-ignore
import React, { useState } from 'react'
import Recite from './Recite';
import { data } from 'react-router-dom';
import Swal from 'sweetalert2';
import Singleayah from './Singleayah';
import Login from '../../pages/v1/Login';

interface QuranbaseProps {
    data: Ayah[]
    dataIdn: Translation[]
}
interface Ayah {
    number: number;
    audio: string
    text: string;
    numberInSurah: number;
    juz: number;
    manzil: number;
    page: number;
    ruku: number;
    hizbQuarter: number;
    sajda: boolean;
}
interface Translation {
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
const Ayahbase = ({ data, dataIdn }: QuranbaseProps) => {
    const userProps = localStorage.getItem("userData") ? localStorage.getItem("userData") : false
    let isLog : boolean = true
    const handleAudio = (a: number) => {
        const audioAll:HTMLAudioElement[] =Array.from(document.querySelectorAll('audio'))
        audioAll.forEach((a)=>{
            a.pause()
        })

        const audio: HTMLAudioElement = document.getElementById(`ayah${a}Audio`) as HTMLAudioElement
        audio.play()
    }
    const handleSave = (a:Ayah,b:Translation) => {
        if(!userProps){
            isLog = false
            location.href = '/login/surah'
        }
        const ayahObj = {
            "data":a,
            "dataIdn":b
        }
        console.log(ayahObj)
        Swal.fire({
            html:<Singleayah data={a} dataIdn={b} page='saved'/>
        })
    }
    return (
        <div className="d-flex flex-column gap-2 mt-4 rounded-4 p-2">
            {data.map((a) => {
                let translate = (dataIdn[a.numberInSurah - 1])
                let isFirst: boolean
                translate.numberInSurah == 1 ? isFirst = true : isFirst = false

                //kill switch
                isFirst = false
                return (
                    <>
                        <main className='p-4 rounded-2 border shadow'>
                            <p className='m-2 text-end fs-3 mb-4'>{a.text} ({a.numberInSurah}) </p>
                            <div className=' m-0 fw-light'>{isFirst && (<p>Dengan menyebut nama Allah Yang maha pengasih lagi maha penyayang</p>)}{translate?.text}</div>
                            <section className=" d-flex gap-2">
                                <button type='button' className=' btn btn-sm btn-success shadow-sm mt-2' onClick={()=>handleSave(a,translate)}>
                                    <i className="bi bi-bookmark me-2"></i>
                                    <span>Simpan ayat</span>
                                </button>
                                <button type='button' className=' btn btn-sm bg-success-subtle border-success shadow-sm mt-2'
                                    onClick={() => handleAudio(a.numberInSurah - 1)}>
                                    <i className="bi bi-soundwave me-2"></i>
                                    <span>Dengarkan Ayat</span>
                                </button>
                                <button type='button' className=' btn btn-sm btn-light shadow-sm mt-2'>
                                    <i className="bi bi-clipboard me-2"></i>
                                    <span>Salin ayat</span>
                                </button>
                            </section>
                            <audio src={a.audio} controls id={`ayah${a.numberInSurah - 1}Audio`} hidden className=' audioAll'/>
                        </main>
                    </>
                )
            })}
            {!isLog && (
                <Login />
            )}
        </div>
    )
}

export default Ayahbase