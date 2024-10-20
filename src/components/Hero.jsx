import { Link } from 'react-router-dom'
import hero1 from '../assets/img/hero-carousel/1.jpg'
import hero2 from '../assets/img/hero-carousel/2.jpg'
import hero3 from '../assets/img/hero-carousel/3.jpg'
import hero4 from '../assets/img/hero-carousel/4.jpg'
import hero5 from '../assets/img/hero-carousel/5.jpg'


const Hero = () => {

    const slides = [
        hero1,
        hero2,
        hero3,
        hero4,
        hero5

    ];

    return (
        <div>
            <section id="hero">
                <div className="hero-content" data-aos="fade-up">
                    <h2>Making <span>your ideas</span><br />happen!</h2>
                    <div>
                        <Link to={'/sesion'} href="#about" className="btn-get-started scrollto">Iniciar Sesion</Link>
                        <Link to={'/tienda'} href="#portfolio" className="btn-projects scrollto">Nuestra Tienda</Link>
                    </div>
                </div>
                <div id="carouselExampleIndicators" className="carousel slide">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" />
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} aria-label="Slide 3" />
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="..." className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="..." className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="..." className="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>

            </section>
        </div>
    )
}

export default Hero
