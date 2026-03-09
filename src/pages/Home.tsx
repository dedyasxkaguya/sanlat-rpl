import Navbar from '../components/Navbar'
import heroImage from '../assets/images/logo.png'
import { useEffect } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css'; // Jangan lupa impor CSS-nya juga!
import '../assets/css/hero.css'
import Hadith from '../components/Hadith';
const Home = () => {
    useEffect(() => {
        Aos.init()
    }, [])
    return (
        <>
            <Navbar />
            <main>
                <section className="hero" data-aos="fade-up">
                    <div className="hero-bg"></div>
                    <div className="hero-text text-white">
                        <h1>Welcome to<br />Sanlat X-RPL</h1>
                        <a href="#description" className="learn-more">learn more→</a>
                    </div>

                    <div className="hero-badge">
                        <img src={heroImage} alt="SMKN 1 Jakarta" />
                    </div>
                </section>
                <div id='description' className="d-flex justify-content-center align-items-center" data-aos="zoom-in">
                    <i className="bi bi-arrow-up text-black fs-2"></i>
                    <p className=' text-center my-5 fs-2'>Scroll</p>
                </div>
                <section className=' mt-5 d-flex justify-content-center align-items-center flex-column col-6 mx-auto descBox' data-aos="fade-up">
                    <h1>Deskripsi</h1>
                    <p className=' fs-4 fw-light'>
                        Ramadhan bukanlah penghalang kita dalam berkembang, meski kita disibuki dengan kegiatan pendekatan diri dengan tuhan seperti Tarawih, Tadarus, I'tikaf, Mengikuti Majelis Ta'lim dan yang lainnya, bulan ramadhan adalah momen penting buat me-reset diri. di Sanlat X-RPL ini, kita ngembangin project website berbasis rohani. dari kita, oleh kita, untuk keberkahan bersama. ayo jalani bulan penuh ampunan ini dengan produktivitas tinggi, jangan lupa untuk merangkul teman teman kita yang tidak bisa merayakan hangatnya puasa, karena bulan ini ada untuk kita saling bersama.
                    </p>
                </section>
                <section className=' mt-5 d-flex justify-content-start align-items-start flex-column col-6 mx-auto descBoxRpl p-4 rounded-4 shadow text-white' data-aos="fade-up">
                    <h1 className=' m-0'>X-RPL</h1>
                    <p className=' fs-4 fw-light'>"ngoding jalan, ibadah kencang"</p>
                    <div className=" d-flex gap-2 align-items-center justify-content-center">
                        <button type='button' className=' btn btn-lg btn-light'>
                            <span>Learn more</span>
                            <i className="bi bi-chevron-right mx-2"></i>
                        </button>
                        <p className=' fs-4 fw-light m-0'>#Semoga Survive !</p>
                    </div>
                </section>
                <Hadith />
            </main>
        </>
    )
}

export default Home