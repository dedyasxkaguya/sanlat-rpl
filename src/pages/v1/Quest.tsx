import { data } from "react-router-dom";
import Login from "../../components/Login"
import Navbar from "../../components/Navbar";
import Today from "../../components/Today";
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
}

interface User {
    name: string;
    email: string;
}
const Quest = () => {
    let isLod = localStorage.getItem("userData") ? true : false
    // isLod ? console.log(localStorage.getItem("userData")) : console.log("belum ada data")
    let user: TopLevel = JSON.parse(localStorage.getItem("userData")!)
    return (
        <>
            <Navbar />
            {!isLod && (
                <Login />
            )}
            {isLod && (
                <main className=" col-6 mx-auto p-4 rounded-4 shadow" style={{ marginTop: '12dvh' }}>
                    <p className=" fs-3">Daily Quest</p>
                    <p className=" text-secondary">Halo {user?.user.name}, siap untuk menjalani tugas hari ini . <Today /></p>
                    <section className=" p-2 rounded-2 shadow-sm">
                        <p>List Quest</p>
                        <ul className=" list-group">
                            <li className=" list-group-item">
                                Membaca Qur'an minimal 1 juz, Status : {user.quest.data.baca_quran ? "Sudah" : "Belum"}
                            </li>
                            <li className=" list-group-item">
                                Mempelajari satu hal baru, Status : {user.quest.data.belajar ? "Sudah" : "Belum"}
                            </li>
                            <li className=" list-group-item">
                                Melakukan salat sunnah, Status : {user.quest.data.shalat_sunnah ? "Sudah" : "Belum"}
                            </li>
                            <li className=" list-group-item">
                                Menyelesaikan 5 salat fardu, Status : {user.quest.data.shalat_wajib ? "Sudah" : "Belum"}
                            </li>
                        </ul>
                    </section>
                </main>
            )}
        </>
    )
}

export default Quest