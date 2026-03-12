import Swal from "sweetalert2";
import Login from "../../components/Login"
import Navbar from "../../components/Navbar";
import Today from "../../components/Today";
import { useEffect, useState } from "react";
interface TopLevel {
    user: User;
    quest: Quest;
}

interface Quest {
    tanggal: string;
    data: Data;
}

interface Data {
    shalat_wajib: boolean;
    shalat_sunnah: boolean;
    baca_quran: boolean;
    belajar: boolean;
    bersedekah: boolean
}

interface User {
    name: string;
    email: string;
}
const Quest = () => {
    const [user, setUser] = useState<TopLevel>()
    const [rate, setRate] = useState<number>(0)
    let isLod = localStorage.getItem("userData") ? true : false
    // isLod ? console.log(localStorage.getItem("userData")) : console.log("belum ada data")
    const checkRate = () => {
        const userLocal: TopLevel = JSON.parse(localStorage.getItem("userData")!)
        let completeRate: number = 0
        if (userLocal) {
            userLocal.quest.data.shalat_wajib ? completeRate += 1 : ""
            userLocal.quest.data.shalat_sunnah ? completeRate += 1 : ""
            userLocal.quest.data.baca_quran ? completeRate += 1 : ""
            userLocal.quest.data.belajar ? completeRate += 1 : ""
            userLocal.quest.data.bersedekah ? completeRate += 1 : ""
            if (completeRate >= 1) {
                setRate(completeRate * 20)
            }
        }
        if (completeRate == 5) {
            Swal.fire({
                icon: 'success',
                title: "Selamat ,",
                text: "Kamu telah menyelesaikan quest di hari Rabu, 11 Maret 2026",
                timerProgressBar: true,
                timer: 8000,
                showConfirmButton: false
            })
        }
    }
    const checkDate = (userLocal: TopLevel) => {
        const now = new Date().toLocaleDateString('id-ID', {
            weekday: "long",
            day: "numeric",
            month: "long"
        })
        if (userLocal) {

            if (now == userLocal.quest.tanggal) {
                console.log("Tanggal valid")
            } else {
                console.log("Tanggal tidak valid")
                let completeRate: number = 0
                if (userLocal) {
                    userLocal.quest.data.shalat_wajib = false
                    userLocal.quest.data.shalat_sunnah = false
                    userLocal.quest.data.baca_quran = false
                    userLocal.quest.data.belajar = false
                    userLocal.quest.data.bersedekah = false
                    userLocal.quest.tanggal = now
                    localStorage.setItem("userData", JSON.stringify(userLocal))
                    setUser(userLocal)
                    setRate(completeRate)
                }
            }
        }
    }
    useEffect(() => {
        const userLocal: TopLevel = JSON.parse(localStorage.getItem("userData")!)
        // userLocal.quest.tanggal = "Selasa, 10 Maret"
        setUser(userLocal)
        checkRate()
        checkDate(userLocal)
    }, [])
    const handleComplete = (index: number) => {
        const quests = ["Shalat Wajib", "Shalat Sunnah", "Baca Qur'an", "Belajar", "Bersedekah"]
        Swal.fire({
            icon: "question",
            title: "Tugas Harian",
            text: "Sudahkah kamu mengerjakan " + quests[index] + " hari ini ?",
            showCancelButton: true,
            confirmButtonText: "Sudah",
            cancelButtonText: "Belum",
            footer: "Allahu Sami'ul Basir",
            toast: true
        }).then(res => {
            if (res.isConfirmed) {
                if (user) {
                    if (index == 0) {
                        user.quest.data.shalat_wajib = true
                        localStorage.setItem("userData", JSON.stringify(user))
                        setUser(JSON.parse(localStorage.getItem("userData")!))
                        checkRate()
                    } else if (index == 1) {
                        user.quest.data.shalat_sunnah = true
                        localStorage.setItem("userData", JSON.stringify(user))
                        setUser(JSON.parse(localStorage.getItem("userData")!))
                        checkRate()
                    } else if (index == 2) {
                        user.quest.data.baca_quran = true
                        localStorage.setItem("userData", JSON.stringify(user))
                        setUser(JSON.parse(localStorage.getItem("userData")!))
                        checkRate()
                    } else if (index == 3) {
                        user.quest.data.belajar = true
                        localStorage.setItem("userData", JSON.stringify(user))
                        setUser(JSON.parse(localStorage.getItem("userData")!))
                        checkRate()
                    } else if (index == 4) {
                        user.quest.data.bersedekah = true
                        localStorage.setItem("userData", JSON.stringify(user))
                        setUser(JSON.parse(localStorage.getItem("userData")!))
                        checkRate()
                    }
                }
            }
        })
    }
    const handleAlreadyComplete = () => {
        Swal.fire({
            icon: "info",
            text: "You already finish this quest !",
            showConfirmButton: false,
            toast: true,
            timer: 2000
        })
    }
    const handleReset = () => {
        Swal.fire({
            icon: "question",
            title: "Reset ? ",
            text: "Apakah kamu yakin, perubahan ini tidak bisa diulang",
            showCancelButton: true,
            confirmButtonText: "Ya, aku yakin",
            cancelButtonText: "Tidak"
        }).then(res => {
            if (res.isConfirmed) {
                const userLocal: TopLevel = JSON.parse(localStorage.getItem("userData")!)
                let completeRate: number = 0
                if (userLocal) {
                    userLocal.quest.data.shalat_wajib = false
                    userLocal.quest.data.shalat_sunnah = false
                    userLocal.quest.data.baca_quran = false
                    userLocal.quest.data.belajar = false
                    userLocal.quest.data.bersedekah = false
                    localStorage.setItem("userData", JSON.stringify(userLocal))
                    setUser(userLocal)
                    setRate(completeRate)
                }
            }
        })
    }
    const handleLogout = () => {
        Swal.fire({
            icon: "question",
            title: "Reset ? ",
            text: "Apakah kamu yakin, perubahan ini tidak bisa diulang",
            showCancelButton: true,
            confirmButtonText: "Ya, aku yakin",
            cancelButtonText: "Tidak"
        }).then(res => {
            if (res.isConfirmed) {
                localStorage.removeItem("userData")
                location.href = '/'
            }
        })
    }
    return (
        <>
            <Navbar />
            {!isLod && (
                <Login />
            )}
            {isLod && user && (
                <main className=" col-10 col-lg-8 mx-auto p-4 rounded-4 shadow" style={{ marginTop: '12dvh' }} data-aos="fade-up">
                    <p className=" fs-3">Daily Quest</p>
                    <p className=" text-secondary">Halo {user?.user.name}, siap untuk menjalani tugas hari ini . <Today /></p>
                    {/* <section className=" p-4 rounded-2 shadow-sm"> */}
                    <p className=" fs-5">List Quest</p>
                    <ul className=" list-group">
                        <li className=" list-group-item d-flex justify-content-between align-items-start flex-column flex-lg-row align-items-lg-center">
                            <p className=" m-2 my-0 my-lg-2">Membaca Qur'an minimal 1 juz</p>
                            <div className=" m-2 my-0 my-lg-2">
                                Status : {user.quest.data.baca_quran ?
                                    <button type="button" className='btn btn-success p-2 rounded-2 m-2 my-0 my-lg-2' onClick={() => handleAlreadyComplete()}>Sudah</button> :
                                    <button type="button" className='btn btn-warning p-2 rounded-2 m-2 my-0 my-lg-2' onClick={() => handleComplete(2)}>
                                        Belum
                                    </button>
                                }
                            </div>
                        </li>
                        <li className=" list-group-item d-flex justify-content-between align-items-start flex-column flex-lg-row align-items-lg-center">
                            <p className=" m-2 my-0 my-lg-2">Mempelajari satu hal baru</p>
                            <div className=" m-2 my-0 my-lg-2">
                                Status : {user.quest.data.belajar ?
                                    <button type="button" className='btn btn-success p-2 rounded-2 m-2 my-0 my-lg-2' onClick={() => handleAlreadyComplete()}>Sudah</button> :
                                    <button type="button" className='btn btn-warning p-2 rounded-2 m-2 my-0 my-lg-2' onClick={() => handleComplete(3)}>
                                        Belum
                                    </button>
                                }
                            </div>
                        </li>
                        <li className=" list-group-item d-flex justify-content-between align-items-start flex-column flex-lg-row align-items-lg-center">
                            <p className=" m-2 my-0 my-lg-2">Melakukan salat sunnah</p>
                            <div className=" m-2 my-0 my-lg-2">
                                Status : {user.quest.data.shalat_sunnah ?
                                    <button type="button" className='btn btn-success p-2 rounded-2 m-2 my-0 my-lg-2' onClick={() => handleAlreadyComplete()}>Sudah</button> :
                                    <button type="button" className='btn btn-warning p-2 rounded-2 m-2 my-0 my-lg-2' onClick={() => handleComplete(1)}>
                                        Belum
                                    </button>
                                }
                            </div>
                        </li>
                        <li className=" list-group-item d-flex justify-content-between align-items-start flex-column flex-lg-row align-items-lg-center">
                            <p className=" m-2 my-0 my-lg-2">Menyelesaikan 5 salat fardu</p>
                            <div className=" m-2 my-0 my-lg-2">
                                Status : {user.quest.data.shalat_wajib ?
                                    <button type="button" className='btn btn-success p-2 rounded-2 m-2 my-0 my-lg-2' onClick={() => handleAlreadyComplete()}>Sudah</button> :
                                    <button type="button" className='btn btn-warning p-2 rounded-2 m-2 my-0 my-lg-2' onClick={() => handleComplete(0)}>
                                        Belum
                                    </button>
                                }
                            </div>
                        </li>
                        <li className=" list-group-item d-flex justify-content-between align-items-start flex-column flex-lg-row align-items-lg-center">
                            <p className=" m-2 my-0 my-lg-2">Bersedekah</p>
                            <div className=" m-2 my-0 my-lg-2">
                                Status : {user.quest.data.bersedekah ?
                                    <button type="button" className='btn btn-success p-2 rounded-2 m-2 my-0 my-lg-2' onClick={() => handleAlreadyComplete()}>Sudah</button> :
                                    <button type="button" className='btn btn-warning p-2 rounded-2 m-2 my-0 my-lg-2' onClick={() => handleComplete(4)}>
                                        Belum
                                    </button>
                                }
                            </div>
                        </li>
                    </ul>
                    <div className="d-flex gap-2">
                        <button type="button" className=" btn btn-danger mb-4 mt-2" onClick={() => handleReset()}>
                            <span>Reset</span>
                            <i className=" bi bi-arrow-repeat mx-2"></i>
                        </button>
                        <button type="button" className=" btn btn-outline-danger mb-4 mt-2" onClick={() => handleLogout()}>
                            <span>Logout</span>
                            <i className=" bi bi-box-arrow-right mx-2"></i>
                        </button>
                    </div>
                    <p>Progress Hari ini</p>
                    <div className="progress shadow" role="progressbar" aria-label="" aria-valuenow={rate} aria-valuemin={0} aria-valuemax={100} style={{ height: "1.5rem" }}>
                        <div className="progress-bar" style={{ width: `${rate}%` }}>{rate}%</div>
                    </div>
                    {/* </section> */}
                </main>
            )}
        </>
    )
}

export default Quest