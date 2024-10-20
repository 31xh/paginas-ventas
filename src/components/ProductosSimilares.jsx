
const ProductosSimilares = () => {
  return (
    <div>
      <section id="testimonials">
                <div className="container" data-aos="fade-up">
                    <div className="section-header">
                        <h2>Productos similares</h2>
                        <p>Sed tamen tempor magna labore dolore dolor sint tempor duis magna elit veniam aliqua esse amet veniam enim export quid quid veniam aliqua eram noster malis nulla duis fugiat culpa esse aute nulla ipsum velit export irure minim illum fore</p>
                    </div>
                    <div id="carouselExampleCaptions" className="carousel slide" data-aos="fade-up" data-aos-delay={100}>
                        <div className="swiper-wrapper">
                            <div id="cardCarousel" className="carousel slide" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <div className="row">
                                            <div className="col">
                                                <div className="card">
                                                    <img src="image1.jpg" className="card-img-top" alt="Card 1" />
                                                    <div className="card-body">
                                                        <h5 className="card-title">Card Title 1</h5>
                                                        <p className="card-text">Some quick example text to build on the card title.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="card">
                                                    <img src="image2.jpg" className="card-img-top" alt="Card 2" />
                                                    <div className="card-body">
                                                        <h5 className="card-title">Card Title 2</h5>
                                                        <p className="card-text">Some quick example text to build on the card title.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="card">
                                                    <img src="image3.jpg" className="card-img-top" alt="Card 3" />
                                                    <div className="card-body">
                                                        <h5 className="card-title">Card Title 3</h5>
                                                        <p className="card-text">Some quick example text to build on the card title.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className="row">
                                            <div className="col">
                                                <div className="card">
                                                    <img src="image4.jpg" className="card-img-top" alt="Card 4" />
                                                    <div className="card-body">
                                                        <h5 className="card-title">Card Title 4</h5>
                                                        <p className="card-text">Some quick example text to build on the card title.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="card">
                                                    <img src="image5.jpg" className="card-img-top" alt="Card 5" />
                                                    <div className="card-body">
                                                        <h5 className="card-title">Card Title 5</h5>
                                                        <p className="card-text">Some quick example text to build on the card title.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="card">
                                                    <img src="image6.jpg" className="card-img-top" alt="Card 6" />
                                                    <div className="card-body">
                                                        <h5 className="card-title">Card Title 6</h5>
                                                        <p className="card-text">Some quick example text to build on the card title.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <button className="carousel-control-prev" type="button" data-bs-target="#cardCarousel" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#cardCarousel" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                        <div className="swiper-pagination" />
                    </div>
                </div>
            </section>
    </div>
  )
}

export default ProductosSimilares
