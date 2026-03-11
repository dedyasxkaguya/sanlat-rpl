import { useEffect, useState } from "react"
import image4 from "../../assets/images/image4.JPG"
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
            <main className=' col-8 mx-auto' style={{ marginTop: "12dvh" }}>
                <section data-aos="fade-up" className=" mb-4">
                    <p className=" fs-2 text-rpl fw-semibold">About Us, X-RPL</p>
                    <div className="p-2">
                        <img src={image4} className="d-block w-100 aboutImage rounded-4" alt="..." />
                    </div>
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