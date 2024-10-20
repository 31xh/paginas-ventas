import img1 from '../assets/img/clients/client-1.png'
import img2 from '../assets/img/clients/client-2.png'
import img3 from '../assets/img/clients/client-3.png'
import img4 from '../assets/img/clients/client-4.png'
import img5 from '../assets/img/clients/client-5.png'
import img6 from '../assets/img/clients/client-6.png'
import img7 from '../assets/img/clients/client-7.png'
import img8 from '../assets/img/clients/client-8.png'


const Clientes = () => {
    return (
        <div>
            <section id="clients">
                <div className="container" data-aos="fade-up">
                    <div className="section-header">
                        <h2>Clients</h2>
                        <p>Sed tamen tempor magna labore dolore dolor sint tempor duis magna elit veniam aliqua esse amet veniam enim export quid quid veniam aliqua eram noster malis nulla duis fugiat culpa esse aute nulla ipsum velit export irure minim illum fore</p>
                    </div>
                    <div id="clientsCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000" data-aos="fade-up" data-aos-delay={100}>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="row">
                                    <div className="col-3">
                                        <img src={img1} className="d-block w-100 img-fluid" alt="client1" />
                                    </div>
                                    <div className="col-3">
                                        <img src={img2} className="d-block w-100 img-fluid" alt="client2" />
                                    </div>
                                    <div className="col-3">
                                        <img src={img3} className="d-block w-100 img-fluid" alt="client3" />
                                    </div>
                                    <div className="col-3">
                                        <img src={img4} className="d-block w-100 img-fluid" alt="client4" />
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="row">
                                    <div className="col-3">
                                        <img src={img5} className="d-block w-100 img-fluid" alt="client5" />
                                    </div>
                                    <div className="col-3">
                                        <img src={img6} className="d-block w-100 img-fluid" alt="client6" />
                                    </div>
                                    <div className="col-3">
                                        <img src={img7} className="d-block w-100 img-fluid" alt="client7" />
                                    </div>
                                    <div className="col-3">
                                        <img src={img8} className="d-block w-100 img-fluid" alt="client8" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#clientsCarousel" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#clientsCarousel" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#clientsCarousel" data-bs-slide-to="0" className="active" aria-current="true"></button>
                            <button type="button" data-bs-target="#clientsCarousel" data-bs-slide-to="1"></button>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Clientes
