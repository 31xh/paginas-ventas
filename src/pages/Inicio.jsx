
import Clientes from "../components/Clientes"
import Descuento from "../components/Descuento"
import Hero from "../components/Hero"

const Inicio = () => {
    return (
        <div>
            <Hero />
            <section id="about">
                <div className="container" data-aos="fade-up">
                    <div className="row">
                        <div className="col-lg-6 about-img">
                            <img src="src/assets/img/about-img.jpg" alt />
                        </div>
                        <div className="col-lg-6 content">
                            <h2>Lorem ipsum dolor sit amet, consectetur adipiscing</h2>
                            <h3>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h3>
                            <ul>
                                <li><i className="bi bi-check-circle" /> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                                <li><i className="bi bi-check-circle" /> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                                <li><i className="bi bi-check-circle" /> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>


            <section id="services">
                <div className="container" data-aos="fade-up">
                    <div className="section-header">
                        <h2>Services</h2>
                        <p>Sed tamen tempor magna labore dolore dolor sint tempor duis magna elit veniam aliqua esse amet veniam enim export quid quid veniam aliqua eram noster malis nulla duis fugiat culpa esse aute nulla ipsum velit export irure minim illum fore</p>
                    </div>
                    <div className="row gy-4">
                        <div className="col-lg-6" data-aos="fade-up" data-aos-delay={100}>
                            <div className="box">
                                <div className="icon"><i className="bi bi-briefcase" /></div>
                                <h4 className="title"><a href>Lorem Ipsum</a></h4>
                                <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident etiro rabeta lingo.</p>
                            </div>
                        </div>
                        <div className="col-lg-6" data-aos="fade-up" data-aos-delay={200}>
                            <div className="box">
                                <div className="icon"><i className="bi bi-card-checklist" /></div>
                                <h4 className="title"><a href>Dolor Sitema</a></h4>
                                <p className="description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata nodera clas.</p>
                            </div>
                        </div>
                        <div className="col-lg-6" data-aos="fade-up" data-aos-delay={300}>
                            <div className="box">
                                <div className="icon"><i className="bi bi-bar-chart" /></div>
                                <h4 className="title"><a href>Sed ut perspiciatis</a></h4>
                                <p className="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur trinige zareta lobur trade.</p>
                            </div>
                        </div>
                        <div className="col-lg-6" data-aos="fade-up" data-aos-delay={400}>
                            <div className="box">
                                <div className="icon"><i className="bi bi-binoculars" /></div>
                                <h4 className="title"><a href>Magni Dolores</a></h4>
                                <p className="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum rideta zanox satirente madera</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Clientes/>

            <Descuento/>
            
            <section id="call-to-action">
                <div className="container" data-aos="zoom-out">
                    <div className="row">
                        <div className="col-lg-9 text-center text-lg-start">
                            <h3 className="cta-title">Call To Action</h3>
                            <p className="cta-text"> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                        <div className="col-lg-3 cta-btn-container text-center">
                            <a className="cta-btn align-middle" href="#">Call To Action</a>
                        </div>
                    </div>
                </div>
            </section>

            <section id="contact">
                <div className="container" data-aos="fade-up">
                    <div className="section-header">
                        <h2>Contact Us</h2>
                        <p>Sed tamen tempor magna labore dolore dolor sint tempor duis magna elit veniam aliqua esse amet veniam enim export quid quid veniam aliqua eram noster malis nulla duis fugiat culpa esse aute nulla ipsum velit export irure minim illum fore</p>
                    </div>
                    <div className="row contact-info">
                        <div className="col-md-6">
                            <div className="contact-phone">
                                <i className="bi bi-phone" />
                                <h3>Phone Number</h3>
                                <p><a href="tel:+155895548855">+1 5589 55488 55</a></p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="contact-email">
                                <i className="bi bi-envelope" />
                                <h3>Email</h3>
                                <p><a href="mailto:info@example.com">info@example.com</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Inicio
