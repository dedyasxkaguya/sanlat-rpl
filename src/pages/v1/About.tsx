import { useEffect, useState } from "react"
import image5 from "../../assets/images/image4.jpg"
import Navbar from "../../components/Navbar"
import Aos from "aos"
import Gallery from "../../components/Gallery"
import Structure from "../../components/Structure"
import { Link } from "react-router-dom"
const About = () => {
    const [choice, setChoice] = useState<number>(1)
    useEffect(() => {
        Aos.init()
    })
    const handleChoice = (a: number) => {
        setChoice(a)
    }
    return (
        <>
            <Navbar />
            <main className=' col-10 col-lg-8 mx-auto' style={{ marginTop: "12dvh" }}>
                <section data-aos="fade-up" className=" mb-2">
                    <p className=" fs-2 text-rpl fw-semibold">About Us, X-RPL</p>
                    <div className="p-2">
                        <img src={image5} className="d-block w-100 aboutImage rounded-4" alt="..." />
                    </div>
                </section>
                <section className=" d-flex gap-2 gap-lg-4 mx-auto justify-content-center align-items-center p-4 mb-2" data-aos="fade-up">
                    <button type="button" onClick={() => handleChoice(0)} className={`btn btn-lg ${choice == 0 ? "btn-rpl" : "btn-light"} shadow`}>
                        <span>Gallery</span>
                        <i className="bi bi-images mx-2 d-none d-lg-inline"></i>
                    </button>
                    <button type="button" onClick={() => handleChoice(1)} className={`btn btn-lg ${choice == 1 ? "btn-rpl" : "btn-light"} shadow`}>
                        <span>Structure</span>
                        <i className="bi bi-diagram-3 mx-2 d-none d-lg-inline"></i>
                    </button>
                </section>
                {choice == 0 && (
                    <Gallery />
                )}
                {choice == 1 && (
                    <Structure />
                )}
                <section className=" d-flex gap-4 flex-column flex-lg-row p-3 shadow rounded-5" data-aos="fade-up">
                    <Link to={'https://instagram.com/28.softwaree'}
                    className=" d-flex gap-2 rounded-4 shadow p-2 text-black text-decoration-none justify-content-start align-items-center igBox">
                        <div className=" p-2 instagram rounded-3 shadow-sm d-flex justify-content-center align-items-center">
                            <i className="bi bi-instagram fs-3"></i>
                        </div>
                        <p className=" m-0 fs-4"> Visit us on instagram</p>
                    </Link>
                    <Link to={'https://instagram.com/28.softwaree'}
                    className=" d-flex gap-2 rounded-4 shadow p-2 text-black text-decoration-none justify-content-start align-items-center border-rpl">
                        <div className=" p-2 bg-rpl rounded-3 shadow-sm d-flex justify-content-center" style={{width:"6.4dvh",height:"6.4dvh"}}>
                            <i className="bi bi-chat-left-fill fs-3"></i>
                        </div>
                        <p className=" m-0 fs-4"> Feedback</p>
                    </Link>
                </section>
                <section className=" my-5"></section>
            </main>
        </>
    )
}
export default About