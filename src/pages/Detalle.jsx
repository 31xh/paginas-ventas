import { useState } from "react"
import { Heart, Share2, ShoppingCart, Star } from "lucide-react"
import img1 from '../assets/img/team-1.jpg'
import Review from "../components/Review"

const Detalle = () => {
  const [mainImage, setMainImage] = useState("/placeholder.svg?height=400&width=400")

  const images = [
    img1,
    "/placeholder.svg?height=100&width=100",
    "/placeholder.svg?height=100&width=100",
    "/placeholder.svg?height=100&width=100"
  ]
  return (
    <div className="container py-5">
      <div className="row">
        {/* Product Images */}
        <div className="col-md-6 mb-4">
          <img src={img1} alt="Main product image" className="img-fluid rounded mb-4" />
          <div className="row">
            {images.map((img, index) => (
              <div key={index} className="col-3">
                <img
                  src={img}
                  alt={`Product image ${index + 1}`}
                  className="img-fluid rounded cursor-pointer"
                  onClick={() => setMainImage(img)}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="col-md-6">
          <h1 className="display-5 fw-bold">Premium Wireless Headphones</h1>
          <p className="lead text-muted">Texto descriptivo del producto</p>

          <div className="d-flex align-items-center mb-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="text-warning" />
            ))}
            <span className="ms-2 text-muted">(128 reviews)</span>
          </div>

          <h2 className="h1 mb-3">$299.99</h2>
          <p className="text-muted">Free shipping on orders over $500</p>

          <h3 className="h5 mb-3">Color</h3>
          <div className="d-flex mb-4">
            {['bg-dark', 'bg-light', 'bg-danger', 'bg-primary'].map((color, index) => (
              <div key={index} className={`me-2 rounded-circle ${color}`} style={{ width: '30px', height: '30px', cursor: 'pointer' }}></div>
            ))}
          </div>

          <div className="d-grid gap-2">
            <button className="btn btn-dark" type="button">
              <ShoppingCart className="me-2" /> Agregar al carrito
            </button>
            <div className="d-flex gap-2">
              <button className="btn btn-outline-danger flex-grow-1" type="button">
                <Heart className="me-2" /> Agregar a una Lista
              </button>
              <button className="btn btn-outline-primary" type="button">
                <Share2 />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Product Details Tabs */}
      <div className="my-5">
        <ul className="nav nav-tabs" id="productTabs" role="tablist">
          <li className="nav-item" role="presentation">
            <button className="nav-link active" id="description-tab" data-bs-toggle="tab" data-bs-target="#description" type="button" role="tab" aria-controls="description" aria-selected="true">Descripcion</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="specifications-tab" data-bs-toggle="tab" data-bs-target="#specifications" type="button" role="tab" aria-controls="specifications" aria-selected="false">Especificaciones</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="reviews-tab" data-bs-toggle="tab" data-bs-target="#reviews" type="button" role="tab" aria-controls="reviews" aria-selected="false">Reviews</button>
          </li>
        </ul>
        <div className="tab-content mt-3" id="productTabsContent">
          <div className="tab-pane fade show active" id="description" role="tabpanel" aria-labelledby="description-tab">
            <p>
              Experience audio like never before with our Premium Wireless Headphones.
              Featuring advanced noise-cancellation technology, crystal-clear sound quality,
              and a comfortable over-ear design, these headphones are perfect for music enthusiasts,
              frequent travelers, and anyone who appreciates high-fidelity audio.
            </p>
          </div>
          <div className="tab-pane fade" id="specifications" role="tabpanel" aria-labelledby="specifications-tab">
            <ul className="list-unstyled">
              <li>• Bluetooth 5.0 connectivity</li>
              <li>• Active Noise Cancellation (ANC)</li>
              <li>• 40mm dynamic drivers</li>
              <li>• Up to 30 hours battery life</li>
              <li>• Quick charge: 5 minutes for 1 hour of playback</li>
              <li>• Touch controls for easy operation</li>
            </ul>
          </div>
          <div className="tab-pane fade" id="reviews" role="tabpanel" aria-labelledby="reviews-tab">
            {[...Array(3)].map((_, index) => (
              <div key={index} className="card mb-3">
                <div className="card-body">
                  <div className="mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="text-warning" />
                    ))}
                  </div>
                  <h5 className="card-title">Great sound quality!</h5>
                  <p className="card-text">
                    These headphones have amazing sound quality and the noise cancellation is top-notch.
                    Comfortable to wear for long periods too!
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Related Products */}
      <section className="my-5">
        <h2 className="display-6 mb-4">You May Also Like</h2>
        <div className="row">
          <div id="carouselExampleCaptions" className="carousel slide">
            <section>
            </section>
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={1} aria-label="Slide 2" />
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={2} aria-label="Slide 3" />
            </div>
            <div className="carousel-inner">{/*The Carousel Container*/}
              <div className="carousel-item carousel-item-1 active">{/*The Carousel item 1*/}
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                  <div className="col">
                    <div className="card shadow-sm mx-8 my-5">
                      <small className="text-bg-warning px-5 rounded text-bg-light new">new</small>
                      <svg className="bd-placeholder-img card-img-top" width="100%" height={225} xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
                        <image href="https://source.unsplash.com/unpaired-red-nike-sneaker-164_6wVEHfI" height="100%" width="100%" />
                      </svg>
                      <div className="card-body">
                        <i className="fa-solid fa-star text-warning" />
                        <i className="fa-solid fa-star text-warning" />
                        <i className="fa-solid fa-star text-warning" />
                        <i className="fa-solid fa-star text-warning" />
                        <i className="fa-regular fa-star text-warning" />
                        <p className="card-text">Nike</p>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="btn-group">
                            <button type="button" className="btn btn-sm btn-outline-warning">View</button>
                            <button type="button" className="btn btn-sm btn-outline-warning"><i className="fa-solid fa-cart-shopping" /></button>
                          </div>
                          <small className="text-bg-warning px-2 rounded">$800.00</small>
                        </div>
                      </div>
                    </div>{/*[end of card]*/}
                  </div>
                  <div className="col">
                    <div className="card shadow-sm mx-8 my-5">
                      <small className="text-bg-warning px-5 rounded text-bg-light new">new</small>
                      <svg className="bd-placeholder-img card-img-top" width="100%" height={225} xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
                        <image href="https://source.unsplash.com/white-adidas-low-top-sneakers-JM-qKEd1GMI" height="100%" width="100%" />
                      </svg>
                      <div className="card-body">
                        <i className="fa-solid fa-star text-warning" />
                        <i className="fa-solid fa-star text-warning" />
                        <i className="fa-solid fa-star text-warning" />
                        <i className="fa-regular fa-star text-warning" />
                        <i className="fa-regular fa-star text-warning" />
                        <p className="card-text">Adidas</p>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="btn-group">
                            <button type="button" className="btn btn-sm btn-outline-warning">View</button>
                            <button type="button" className="btn btn-sm btn-outline-warning"><i className="fa-solid fa-cart-shopping" /></button>
                          </div>
                          <small className="text-bg-warning px-2 rounded">$600.00</small>
                        </div>
                      </div>
                    </div>{/*[end of card]*/}
                  </div>
                  <div className="col">
                    <div className="card shadow-sm mx-8 my-5">
                      <small className="text-bg-warning px-5 rounded text-bg-light new">new</small>
                      <svg className="bd-placeholder-img card-img-top" width="100%" height={225} xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
                        <image href="https://source.unsplash.com/white-and-black-nike-air-force-1-low-XZ3EmAIWuz0" height="100%" width="100%" />
                      </svg>
                      <div className="card-body">
                        <i className="fa-solid fa-star text-warning" />
                        <i className="fa-regular fa-star text-warning" />
                        <i className="fa-regular fa-star text-warning" />
                        <i className="fa-regular fa-star text-warning" />
                        <i className="fa-regular fa-star text-warning" />
                        <p className="card-text">Slat Sole Show</p>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="btn-group">
                            <button type="button" className="btn btn-sm btn-outline-warning">View</button>
                            <button type="button" className="btn btn-sm btn-outline-warning"><i className="fa-solid fa-cart-shopping" /></button>
                          </div>
                          <small className="text-bg-warning px-2 rounded">$500.00</small>
                        </div>
                      </div>
                    </div>{/*[end of card]*/}
                  </div>
                </div>{/*[End of Carousel Item 1]*/}
              </div>
              {/* Carousel Item 2 */}
              <div className="carousel-item carousel-item-2">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                  <div className="col">
                    <div className="card shadow-sm mx-8 my-5">
                      <small className="text-bg-warning px-5 rounded text-bg-light new">new</small>
                      <svg className="bd-placeholder-img card-img-top" width="100%" height={225} xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
                        <image href="https://source.unsplash.com/flatlay-photography-of-wireless-headphones-PDX_a_82obo" height="100%" width="100%" />
                      </svg>
                      <div className="card-body">
                        <i className="fa-solid fa-star text-warning" />
                        <i className="fa-solid fa-star text-warning" />
                        <i className="fa-regular fa-star text-warning" />
                        <i className="fa-regular fa-star text-warning" />
                        <i className="fa-regular fa-star text-warning" />
                        <p className="card-text">Black Glass Headset</p>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="btn-group">
                            <button type="button" className="btn btn-sm btn-outline-warning">View</button>
                            <button type="button" className="btn btn-sm btn-outline-warning"><i className="fa-solid fa-cart-shopping" /></button>
                          </div>
                          <small className="text-bg-warning px-2 rounded">$200.00</small>
                        </div>
                      </div>
                    </div>{/*[end of card]*/}
                  </div>
                  <div className="col">
                    <div className="card shadow-sm mx-8 my-5">
                      <small className="text-bg-warning px-5 rounded text-bg-light new">new</small>
                      <svg className="bd-placeholder-img card-img-top" width="100%" height={225} xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
                        <image href="https://source.unsplash.com/gray-and-brown-corded-headphones-GI6L2pkiZgQ" height="100%" width="100%" />
                      </svg>
                      <div className="card-body">
                        <i className="fa-regular fa-star text-warning" />
                        <i className="fa-regular fa-star text-warning" />
                        <i className="fa-regular fa-star text-warning" />
                        <i className="fa-regular fa-star text-warning" />
                        <i className="fa-regular fa-star text-warning" />
                        <p className="card-text">Nano Stripe Headset</p>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="btn-group">
                            <button type="button" className="btn btn-sm btn-outline-warning">View</button>
                            <button type="button" className="btn btn-sm btn-outline-warning"><i className="fa-solid fa-cart-shopping" /></button>
                          </div>
                          <small className="text-bg-warning px-2 rounded">$300.00</small>
                        </div>
                      </div>
                    </div>{/*[end of card]*/}
                  </div>
                  <div className="col">
                    <div className="card shadow-sm mx-8 my-5">
                      <small className="text-bg-warning px-5 rounded text-bg-light new">new</small>
                      <svg className="bd-placeholder-img card-img-top" width="100%" height={225} xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
                        <image href="https://source.unsplash.com/black-and-silver-sony-headphones-aiWjNA46Urc" height="100%" width="100%" />
                      </svg>
                      <div className="card-body">
                        <i className="fa-solid fa-star text-warning" />
                        <i className="fa-solid fa-star text-warning" />
                        <i className="fa-solid fa-star text-warning" />
                        <i className="fa-regular fa-star text-warning" />
                        <i className="fa-regular fa-star text-warning" />
                        <p className="card-text">Steelseries</p>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="btn-group">
                            <button type="button" className="btn btn-sm btn-outline-warning">View</button>
                            <button type="button" className="btn btn-sm btn-outline-warning"><i className="fa-solid fa-cart-shopping" /></button>
                          </div>
                          <small className="text-bg-warning px-2 rounded">$500.00</small>
                        </div>
                      </div>
                    </div>{/*[end of card]*/}
                  </div>
                </div>
              </div> {/*[carousel-item-2]*/}
              {/* Carousel Item 3 */}
              <div className="carousel-item carousel-item-2">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                  <div className="col">
                    <div className="card shadow-sm mx-8 my-5">
                      <small className="text-bg-warning px-5 rounded text-bg-light new">new</small>
                      <svg className="bd-placeholder-img card-img-top" width="100%" height={225} xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
                        <image href="https://source.unsplash.com/space-gray-iphone-x-with-box-K1MxhTd6SKo" height="100%" width="100%" />
                      </svg>
                      <div className="card-body">
                        <i className="fa-solid fa-star text-warning" />
                        <i className="fa-solid fa-star text-warning" />
                        <i className="fa-solid fa-star text-warning" />
                        <i className="fa-solid fa-star text-warning" />
                        <i className="fa-solid fa-star text-warning" />
                        <p className="card-text">iPhone 15</p>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="btn-group">
                            <button type="button" className="btn btn-sm btn-outline-warning">View</button>
                            <button type="button" className="btn btn-sm btn-outline-warning"><i className="fa-solid fa-cart-shopping" /></button>
                          </div>
                          <small className="text-bg-warning px-2 rounded">$2000.00</small>
                        </div>
                      </div>
                    </div>{/*[end of card]*/}
                  </div>
                  <div className="col">
                    <div className="card shadow-sm mx-8 my-5">
                      <small className="text-bg-warning px-5 rounded text-bg-light new">new</small>
                      <svg className="bd-placeholder-img card-img-top" width="100%" height={225} xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
                        <image href="https://source.unsplash.com/silver-iphone-6-on-silver-macbook-gQ6NlDvRngU" height="100%" width="100%" />
                      </svg>
                      <div className="card-body">
                        <i className="fa-solid fa-star text-warning" />
                        <i className="fa-solid fa-star text-warning" />
                        <i className="fa-regular fa-star text-warning" />
                        <i className="fa-regular fa-star text-warning" />
                        <i className="fa-regular fa-star text-warning" />
                        <p className="card-text">iPhone 14 Pro Max</p>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="btn-group">
                            <button type="button" className="btn btn-sm btn-outline-warning">View</button>
                            <button type="button" className="btn btn-sm btn-outline-warning"><i className="fa-solid fa-cart-shopping" /></button>
                          </div>
                          <small className="text-bg-warning px-2 rounded">$1500.00</small>
                        </div>
                      </div>
                    </div>{/*[end of card]*/}
                  </div>
                  <div className="col">
                    <div className="card shadow-sm mx-8 my-5">
                      <small className="text-bg-warning px-5 rounded text-bg-light new">new</small>
                      <svg className="bd-placeholder-img card-img-top" width="100%" height={225} xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
                        <image href="https://source.unsplash.com/black-iphone-7-with-white-and-black-dice-YLNMXzXk8zs" height="100%" width="100%" />
                      </svg>
                      <div className="card-body">
                        <i className="fa-solid fa-star text-warning" />
                        <i className="fa-solid fa-star text-warning" />
                        <i className="fa-solid fa-star text-warning" />
                        <i className="fa-regular fa-star text-warning" />
                        <i className="fa-regular fa-star text-warning" />
                        <p className="card-text">iPhone 14</p>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="btn-group">
                            <button type="button" className="btn btn-sm btn-outline-warning">View</button>
                            <button type="button" className="btn btn-sm btn-outline-warning"><i className="fa-solid fa-cart-shopping" /></button>
                          </div>
                          <small className="text-bg-warning px-2 rounded">$1200.00</small>
                        </div>
                      </div>
                    </div>{/*[end of card]*/}
                  </div>
                </div>
              </div> {/*[carousel-item-3]*/}
            </div>{/*[End of Container]*/}
          </div>

          <div className="control-btn">
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
              <i className="fa-solid fa-arrow-right" />
              <span className="carousel-control-next-icon visually-hidden" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
              <span className="carousel-control-prev-icon visually-hidden" aria-hidden="true" />
              <i className="fa-solid fa-arrow-left" />
              <span className="visually-hidden">Previous</span>
            </button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="my-5 bg-light rounded p-5 text-center">
        <h2 className="display-6 mb-3">Limited Time Offer!</h2>
        <p className="lead mb-4">Get 10% off your purchase when you order in the next 24 hours.</p>
        <button className="btn btn-primary btn-lg">Shop Now</button>
      </section>


      <Review/>
    </div>
  )
}

export default Detalle
