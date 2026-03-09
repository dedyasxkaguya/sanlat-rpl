import React, { useEffect, useState } from 'react'
import Quranbase from './Quranbase'
import axios from 'axios';
import Swal from 'sweetalert2';

const Searchayat = () => {

    const [data, setData] = useState<Match[]>()
    const [query, setQuery] = useState<string>()
    // const [error, setError] = useState<boolean>(false)
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
    const searchAyat = (query: string) => {
        axios.get(`http://api.alquran.cloud/v1/search/${query}/all/id.indonesian`)
            .then(data => {
                const fetched = data.data
                setData(fetched.data.matches)
            })
            .catch((err) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Tidak menemukan ayat yang mengandung kata ' + query,
                    footer: err,
                    showConfirmButton: false,
                    toast: true,
                    timer: 2000
                })
                // setError(true)
            })
    }
    useEffect(() => {
        searchAyat("shalat")
    }, []);
    const handleQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value)
    }
    const handleHit = () => {
        if (query) {
            searchAyat(query)
        }
    }
    return (
        <main>
            <div className=" row">
                <div className="form-floating col-10">
                    <input id='ayatQuery' type="text" className=' form-control' onChange={(e) => handleQuery(e)} placeholder='Cari teks' />
                    <label htmlFor="ayatQuery" className=' mx-2'>Cari teks</label>
                </div>
                <button type="button" className='col-2 btn btn-outline-success' onClick={() => handleHit()}>
                    <i className="bi bi-search me-2"></i>
                    <span>Cari ayat</span>
                </button>
            </div>
            <section className=''>
                {query && (
                    <span>Menampilkan hasil untuk teks {query} </span>
                )}
                {!query && (
                    <span>Carilah satu kata dalam Al-Quran</span>
                )}
                {data?.map((a) => {
                    if (query !== undefined) {
                        return (
                            <Quranbase data={a} isSearch={true} query={query} />
                        )
                    }
                })}
            </section>
        </main>
    )
}

export default Searchayat