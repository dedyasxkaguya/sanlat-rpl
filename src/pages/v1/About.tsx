import { useEffect, useState } from "react"
import image5 from "../../assets/images/image5.JPG"
import Navbar from "../../components/Navbar"
import Aos from "aos"
import Gallery from "../../components/Gallery"
import Structure from "../../components/Structure"
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
                <section className=" d-flex gap-2 gap-lg-4 mx-auto justify-content-center align-items-center p-4 mb-2">
                    <button type="button" onClick={() => handleChoice(0)} className={`btn btn-lg ${choice==0 ? "btn-rpl" : "btn-light"} shadow`}>
                        <span>Gallery</span>
                        <i className="bi bi-images mx-2 d-none d-lg-inline"></i>
                    </button>
                    <button type="button" onClick={() => handleChoice(1)} className={`btn btn-lg ${choice==1 ? "btn-rpl" : "btn-light"} shadow`}>
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
            </main >
        </>
    )
}
export default About