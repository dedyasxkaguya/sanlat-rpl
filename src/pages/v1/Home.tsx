import Navbar from '../../components/Navbar'
import heroImage from '../../assets/images/logosk.jpeg'
import { useEffect } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css'; // Jangan lupa impor CSS-nya juga!
import '../../assets/css/hero.css'
import Hadith from '../../components/Hadith';
import Signaturebutton from '../../components/Signaturebutton';
const Home = () => {
    useEffect(() => {
        Aos.init()
    }, [])
    return (
        <>
            <Navbar />
            <main>
                <section className="hero" data-aos="fade-up">
                    <div className="hero-bg">
                        <aside className=' hero-aside d-flex justify-content-center align-items-center'>
                            <div className="hero-text text-white">
                                <h1>Welcome to<br />Sanlat X-RPL</h1>
                                <a href="#description" className="learn-more">learn more→</a>
                            </div>
                        </aside>
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
                <Signaturebutton />
                <Hadith />
            </main>
        </>
    )
}

export default Home