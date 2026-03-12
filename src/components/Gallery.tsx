import Aos from "aos"
import { useEffect } from "react"
import image1 from "../assets/images/image1.JPG"
import image2 from "../assets/images/image2.JPG"
import image3 from "../assets/images/image3.JPG"
import image4 from "../assets/images/image4.JPG"
import image5 from "../assets/images/image5.JPG"
import image6 from "../assets/images/image6.JPG"
const Gallery = () => {
    const images: string[] = [
        image1, image2, image3, image4, image5, image6
    ]
    useEffect(() => {
        Aos.init()
    })
    return (
        <main className="row m-0 mx-auto justify-content-center gallery">
            <section data-aos="fade-up" className=" col-4 d-none d-md-flex">
                <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner p-2">
                        <div className="carousel-item active">
                            <img src={image6} className="d-block w-100 aboutImage rounded-4" alt="..." />
                        </div>
                        {images.map((a) => {
                            return (
                                <div className="carousel-item">
                                    <img src={a} className="d-block w-100 aboutImage rounded-4" alt="..." />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
            <section data-aos="fade-up" className=" col-8 row row-cols-4 d-none d-md-flex" data-aos-delay={100}>
                <div className="p-2 aboutImage">
                    <img src={image1} alt="" className=" h-100 smallAboutImage rounded-4 bg-black" />
                </div>
                <div className="p-2 aboutImage">
                    <img src={image2} alt="" className=" h-100 smallAboutImage rounded-4 bg-black" />
                </div>
                <div className="p-2 aboutImage">
                    <img src={image3} alt="" className=" h-100 smallAboutImage rounded-4 bg-black" />
                </div>
                <div className="p-2 aboutImage">
                    <img src={image4} alt="" className=" h-100 smallAboutImage rounded-4 bg-black" />
                </div>
            </section>
            <section className="row row-cols-3 row-cols-lg-6" data-aos-delay={100}>
                {images.map((a, index) => {
                    return (
                        <div className="p-2 aboutImage" data-aos="fade-up" data-aos-delay={100 * index}>
                            <img src={a} alt="" className=" w-100 smallAboutImage rounded-4 bg-black" />
                        </div>
                    )
                })}
                {images.map((a, index) => {
                    return (
                        <div className="p-2 aboutImage" data-aos="fade-up" data-aos-delay={100 * index * 1.2}>
                            <img src={a} alt="" className=" w-100 smallAboutImage rounded-4 bg-black" />
                        </div>
                    )
                })}
                {images.map((a, index) => {
                    return (
                        <div className="p-2 aboutImage" data-aos="fade-up" data-aos-delay={100 * index * 1.5}>
                            <img src={a} alt="" className=" w-100 smallAboutImage rounded-4 bg-black" />
                        </div>
                    )
                })}
            </section>
        </main>
    )
}

export default Gallery