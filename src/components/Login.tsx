import React, { useEffect, useState } from 'react'

const Login = () => {
    const [name, setName] = useState<string>()
    const [email, setEmail] = useState<string>()
    const [emailInvalid, setEmailInvalid] = useState<boolean>(true)
    let isLog: boolean
    localStorage.getItem("dataUser") ? isLog = true : isLog = false
    const userProps = {
        "user": {
            "name": '',
            "email": ''
        },
        "quest": {
            "tanggal": "",
            "data": {
                "shalat_wajib": false,
                "shalat_sunnah": false,
                "baca_quran": false,
                "belajar": false,
                "bersedekah":false
            }
        }
    }
    const date = new Date().toLocaleDateString('id-ID', {
        weekday: "long",
        day: "numeric",
        month: "long"
    })
    const handleLog = () => {
        const e = document.getElementById("btnKirim") as HTMLButtonElement
        if (e) {
            console.log(e.innerHTML)
            e.style.opacity = ".75"
            e.disabled = true
            setInterval(() => {
                e.innerHTML = "Memproses.."
                setTimeout(() => {
                    e.innerHTML = "Memproses..."
                }, 300);
                setTimeout(() => {
                    e.innerHTML = "Memproses.."
                }, 600);
                setTimeout(() => {
                    e.innerHTML = "Memproses."
                }, 1000);
            }, 1000);
            setTimeout(() => {
                if (name) {
                    if (email?.includes("@gmail.com")) {
                        userProps.user.name = name
                        userProps.user.email = email
                        userProps.quest.tanggal = date
                        localStorage.setItem("userData", JSON.stringify(userProps))
                        location.href ='/'
                    } else {
                        setEmailInvalid(true)
                    }
                }
            }, 1000);
        }
    }
    const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
    }
    const handleRmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }
    useEffect(() => {
        console.log(isLog)
    }, [])
    return (
        <section className=' bg-white position-absolute fixedCenter p-4 rounded-4 shadow col-8 col-lg-4'>
            <p className=' form-label'>Masukkan data sebelum menjalani <i>Daily Quest</i></p>
            <div className=" form-floating">
                <input type="text" name="" id="nameInput" className=' form-control mb-2' onChange={(e) => handleName(e)}
                    placeholder='Masukkan nama' autoFocus/>
                <label htmlFor="nameInput">Masukkan nama</label>
            </div>
            <div className="form-floating mt-2">
                <input type="email" name="" id="emailInput" className=' form-control mb-2' onChange={(e) => handleRmail(e)}
                    placeholder='Masukkan email' />
                <label htmlFor="emailInput">Masukkan email</label>
                {emailInvalid && (
                    <div className=' invalid-feedback'>Hanya menerima email dari @gmail.com</div>
                )}
            </div>
            <button id='btnKirim' type="button" className=' btn btn-lg btn-primary w-100' onClick={() => handleLog()}>Kirim</button>
        </section>
    )
}

export default Login