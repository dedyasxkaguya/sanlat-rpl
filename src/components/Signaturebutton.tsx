// import React from 'react'
import myLogo from '../assets/images/logo.png'
const Signaturebutton = () => {
    return (
        <section className=' mt-5 d-flex justify-content-between align-items-start col-8 mx-auto descBoxRpl p-4 rounded-4 shadow text-white ' data-aos="fade-up">
            <div className="">
                <h1 className=' m-0'>X-RPL</h1>
                <p className=' fs-4 fw-light'>"Ngoding jalan, ibadah kencang"</p>
                <div className=" d-flex gap-2 align-items-center justify-content-center">
                    <button type='button' className=' btn btn-lg btn-light'>
                        <span>Learn more</span>
                        <i className="bi bi-chevron-right mx-2"></i>
                    </button>
                    <p className=' fs-4 fw-light m-0'>#Semoga Survive !</p>
                </div>
            </div>
            <img src={myLogo} alt="" className=' rounded-circle' style={{ height: '16dvh' }} />
        </section>
    )
}

export default Signaturebutton