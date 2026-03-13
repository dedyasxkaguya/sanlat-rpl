export interface TopLevel {
    teacher?: Teacher;
    executives?: Teacher[];
    students?: Teacher[];
}

export interface Teacher {
    name: string;
    role: string;
    no: number;
}
import { useEffect } from 'react';
import dataRPL from '../assets/data/class.json'
import Aos from 'aos';
import { Link } from 'react-router-dom';
const Structure = () => {
    useEffect(() => {
        Aos.init()
    })
    const classData: TopLevel = dataRPL as TopLevel
    return (
        <main>
            <section className=" my-4">
                <Link className=" fw-light fs-4 text-black text-decoration-none" to={'https://instagram.com/28.softwaree'} target='_blank' data-aos="fade-right" data-aos-delay={100}>
                    This Is Our Formation - @28.softwaree
                </Link>
                {classData.teacher && (
                    <div className=" mb-4" data-aos="fade-up">
                        <div className="bg-rpl p-4 rounded-4 col-12 col-lg-6">
                            <p className=" fw-semibold m-0 fs-5">{classData.teacher.name}</p>
                            <p className=" fw-light m-0">{classData.teacher.role}</p>
                        </div>
                    </div>
                )}
                {classData.executives && (
                    <section>
                        <div className=" d-flex gap-4 mb-4 flex-column flex-lg-row">
                            <div className="text-rpl border p-4 rounded-4 col-12 col-lg-4" data-aos="fade-left" data-aos-delay={100}>
                                <p className=" fw-semibold m-0 fs-5">{classData.executives[0].name}</p>
                                <p className=" fw-light m-0">{classData.executives[0].role}</p>
                            </div>
                            <div className="text-rpl border p-4 rounded-4 col-12 col-lg-4" data-aos="fade-left" data-aos-delay={100}>
                                <p className=" fw-semibold m-0 fs-5">{classData.executives[1].name}</p>
                                <p className=" fw-light m-0">{classData.executives[1].role}</p>
                            </div>
                        </div>
                        <div className=" d-flex gap-4 mb-4 flex-column flex-lg-row">
                            <div className="text-rpl border p-4 rounded-4 col-12 col-lg-4" data-aos="fade-left" data-aos-delay={100}>
                                <p className=" fw-semibold m-0 fs-5">{classData.executives[2].name}</p>
                                <p className=" fw-light m-0">{classData.executives[2].role}</p>
                            </div>
                            <div className="text-rpl border p-4 rounded-4 col-12 col-lg-4" data-aos="fade-left" data-aos-delay={100}>
                                <p className=" fw-semibold m-0 fs-5">{classData.executives[3].name}</p>
                                <p className=" fw-light m-0">{classData.executives[3].role}</p>
                            </div>
                        </div>
                        <div className=" d-flex gap-4 mb-4 flex-column flex-lg-row">
                            <div className="text-rpl border p-4 rounded-4 col-12 col-lg-4" data-aos="fade-left" data-aos-delay={100}>
                                <p className=" fw-semibold m-0 fs-5">{classData.executives[4].name}</p>
                                <p className=" fw-light m-0">{classData.executives[4].role}</p>
                            </div>
                            <div className="text-rpl border p-4 rounded-4 col-12 col-lg-4" data-aos="fade-left" data-aos-delay={100}>
                                <p className=" fw-semibold m-0 fs-5">{classData.executives[5].name}</p>
                                <p className=" fw-light m-0">{classData.executives[5].role}</p>
                            </div>
                        </div>
                    </section>
                )}
                <section className=' row row-cols-lg-3 row-cols-2 p-2'>
                    {classData.students?.map((a) => {
                        return (
                            <div className="p-2" data-aos="fade-up" data-aos-delay={100}>
                                <div className=" border-rpl bg-light p-3 p-lg-4 rounded-4 ">
                                    <p className=" fw-semibold m-0 text-truncate fs-6">{a.name}</p>
                                    <p className=" fw-light m-0 text-secondary fs-6">{a.role}</p>
                                </div>
                            </div>
                        )
                    })}
                </section>
            </section>
        </main>
    )
}

export default Structure