import React, { useState } from 'react'
import Navbar from '../../components/Navbar'
import Today from '../../components/Today'

const Login = () => {
    // const {page} = useParams()
    const [name, setName] = useState<string>()
    const [email, setEmail] = useState<string>()
    // const [nameInvalid, setNameInvalid] = useState<boolean>(true)
    const [emailInvalid, setEmailInvalid] = useState<boolean>(true)
    let isLog: boolean
    localStorage.getItem("dataUser") ? isLog = true : isLog = false
    const userProps = {
        "user": {
            "name": '',
            "email": ''
        },
        "lastAyah": "",
        "": ""
    }
    const handleLog = () => {
        if (name) {
            if (email?.includes("@gmail.com")) {
                userProps.user.name = name
                userProps.user.email = email
            } else {
                setEmailInvalid(true)
            }
        }
        console.log(userProps)
    }
    const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
    }
    const handleRmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }
    // date = `${transDay(d.getDay())}, ${d.getDate().toString()} ${transMonth(d.getMonth())}`
    // useEffect(() => {
    //     console.log(date)
    // }, [])
    return (
        <>
            <Navbar />
            {!isLog && (
                <section className=' bg-white position-absolute fixedCenter p-4 rounded-4 shadow'>
                    <p className=' form-label'>Masukkan data sebelum menjalani Login</p>
                    <div className=" form-floating">
                        <input type="text" name="" id="nameInput" className=' form-control mb-2' onChange={(e) => handleName(e)}
                            placeholder='Masukkan nama' />
                        <label htmlFor="nameInput">Masukkan nama</label>
                        {/* {nameInvalid && (
                            <div className=' invalid-feedback'>Mohon masukkan nama</div>
                        )} */}
                    </div>
                    <div className="form-floating mt-2">
                        <input type="email" name="" id="emailInput" className=' form-control mb-2' onChange={(e) => handleRmail(e)}
                            placeholder='Masukkan email' />
                        <label htmlFor="emailInput">Masukkan email</label>
                        {emailInvalid && (
                            <div className=' invalid-feedback'>Hanya menerima email dari @gmail.com</div>
                        )}
                    </div>
                    <button type="button" className=' btn btn-lg btn-primary w-100' onClick={() => handleLog()}>Kirim</button>
                </section>
            )}
            <div>Quest untuk Hari <Today /></div>
        </>
    )
}

export default Login