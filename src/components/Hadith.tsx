// import React from 'react'
import myHadith from '../assets/data/hadith.json'
// import Aos from 'aos';
import Swal from 'sweetalert2';

export interface TopLevel {
    metadata: Metadata;
    hadiths: Hadith[];
}

export interface Hadith {
    hadithnumber: number;
    arabicnumber: number;
    text: string;
    grades: any[];
    reference: Reference;
}

export interface Reference {
    book: number;
    hadith: number;
}

export interface Metadata {
    name: string;
    sections: { [key: string]: string };
    section_details: { [key: string]: SectionDetail };
}

export interface SectionDetail {
    hadithnumber_first: number;
    hadithnumber_last: number;
    arabicnumber_first: number;
    arabicnumber_last: number;
}
const Hadith = () => {
    let dataHadith = myHadith as TopLevel
    const mt_rand = (min: number, max: number) => {
        return Math.floor(Math.random() * (max - min + 1)) + min
    }
    const i = mt_rand(1, dataHadith.hadiths.length)
    const handleSave = () => {
        navigator.clipboard.writeText(
            `${dataHadith?.hadiths[i]?.text} \n${dataHadith.metadata.name} no ${dataHadith?.hadiths[i]?.hadithnumber}.Book ${dataHadith?.hadiths[i]?.reference.book} / Hadith ${dataHadith?.hadiths[i]?.reference.hadith}`
        )
        Swal.fire({
            icon: 'success',
            title: 'Success',
            text: 'Berhasil menyalin hadis',
            showConfirmButton: false,
            toast: true,
            timer: 2000,
            timerProgressBar: true
        })
    }
    return (
        <section className=' mb-5 d-flex justify-content-start align-items-start flex-column col-10 col-lg-8 mx-auto p-4 rounded-4 shadow' data-aos="fade-up">
            <h1 className=''>Random Hadith of the day</h1>
            <p className=' fs-5 fw-light'>
                {dataHadith?.hadiths[i]?.text}
            </p>
            {/* <p className=' fs-5 fw-light'>
                <span>{dataHadith.metadata.section_details[dataHadith?.hadiths[i]?.hadithnumber]?.hadithnumber_first}-</span>
                <span>{dataHadith.metadata.section_details[dataHadith?.hadiths[i]?.hadithnumber]?.hadithnumber_last}</span>
                </p> */}
            <p className=' fs-5 fw-light'>
                <span>{dataHadith.metadata.name} </span>
                <span>no {dataHadith?.hadiths[i]?.hadithnumber}. </span>
                <span>Book {dataHadith?.hadiths[i]?.reference.book} / </span>
                <span>Hadith {dataHadith?.hadiths[i]?.reference.hadith} </span>
            </p>
            <p className=' fs-5 fw-light'>#Semoga Survive !</p>
            <button type='button' className=' btn btnClipboard' onClick={() => handleSave()}>
                <span>Copy to clipboard</span>
                <i className="bi bi-clipboard mx-2"></i>
            </button>
        </section>
    )
}

export default Hadith