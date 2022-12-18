function Main() {
    return (
        <main>
            <section id="home" className="banner">
                <div className="container h-100">
                    <div className="row align-items-center h-100 px-5">
                        <div className="col-xs-6 col-sm">
                            <h3 className="mt-3 font-monospace fw-bold">INTRODUCING LUCID THEME</h3>
                            <h1>Carefully crafted and beautiful landing page.</h1>
                            <p className="fw-bold mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tellus erat, pellentesque ac leo id, elementum sodales ligula. Aenean sed pulvinar mauris. Quisque ultrices tincidunt dui, a dictum urna posuere.</p>
					        <button type="button" className="btn btn-primary text-white text-bold fw-bold">DOWNLOAD NOW</button>
					        <button type="button" className="btn btn-outline-light fw-bold">VIEW FEATURES</button>
                        </div>
                        <div className="col-xs-6 col-sm">
                            <img className="img-fluid" src="img/verticle-phones.png" alt="Phones" />
                        </div>
                    </div>
                </div>
            </section>

            <section id="features" className="features">
                <div className="container">
                    <div className="text-center">
                        <div>
                            <h4 className="font-monospace fw-bold">PRODUCT OVERVIEW</h4>
                            <h2 className="fw-bold fs-1">List of amazing features</h2>

                            <img className="mx-auto daag" src="img/daag.png" alt="" />
                        </div>
                        
                        <div className="row">
                            <div className="col-md-3">
                                <div className="icon">
                                    <i className="bi bi-display-fill" />
                                </div>
                                <h3>Responsive</h3>
                                <p className="fs-5 text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris fermentum vestibulum enim ut dignissim. Aliquam.</p>
                            </div>
                            <div className="col-md-3">
                                <div className="icon">
                                    <i className="bi bi-gear-fill"></i>
                                </div>
                                <h3>Customizable</h3>
                                <p className="fs-5 text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris fermentum vestibulum enim ut dignissim. Aliquam.</p>
                            </div>
                            <div className="col-md-3">
                                <div className="icon">
                                    <i className="bi bi-brush-fill"></i>
                                </div>
                                <h3>Lovely design</h3>
                                <p className="fs-5 text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris fermentum vestibulum enim ut dignissim. Aliquam.</p>
                            </div>
                            <div className="col-md-3">
                                <div className="icon">
                                    <i className="bi bi-phone-fill"></i>
                                </div>
                                <h3>Mobile friendly</h3>
                                <p className="fs-5 text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris fermentum vestibulum enim ut dignissim. Aliquam.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <hr />

            <section id="about" className="details">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-xs-6">
                            <img className="img-fluid" src="img/verticle-phones.png" alt="Phones" />
                        </div>
                        <div className="col-sm-6 col-xs-6">
                            <h4 className="font-monospace fw-bold">DIP INTO THE DETAILS</h4>
                            <h2 className="mb-3 fw-bold fs-1">Beautiful on every devices</h2>

                            <img className="mx-auto daag" src="img/daag.png" alt="" />

                            <p className="fs-5 text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a neque magna. Morbi rhoncus tellus lorem. Cras vel lorem eu ex ultrices mattis. In nec vehicula nulla. Nullam tempus metus neque, sit amet volutpat augue.</p>

                            <ul>
                                <li><i className="bi bi-trophy-fill"></i> Awesome design</li>
                                <li><i className="bi bi-phone-fill"></i> Fully responsive</li>
                                <li><i className="bi bi-lightning-charge-fill"></i> Retina ready</li>
                                <li><i className="bi bi-palette-fill"></i> Tons of features and easy to use</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="feature-detail">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-5 col-xs-5">
                            <h4 className="font-monospace fw-bold">DIP INTO THE DETAILS</h4>
                            <h2 className="mb-3 fw-bold fs-1">Super easy to customize</h2>

                            <img className="mx-auto daag" src="img/daag.png" alt="" />

                            <p className="fs-5 text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis libero est, pretium non purus a, commodo imperdiet elit. Aenean mattis tincidunt ultricies. Nunc ut nisi massa. Vivamus non pulvinar purus. Aenean porttitor dui sed maximus faucibus. Vivamus nibh leo, porttitor eu malesuada tempus, blandit sed sapien. Quisque efficitur risus lacus. </p>
                        </div>
                        <div className="col-sm-7 col-xs-7">
                            <img className="img-fluid" src="img/laid-phone2.png" alt="Phone" />
                        </div>
                    </div>
                </div>
            </section>

            <section id="testimonials" className="pricing-slide">
                <div className="container">
                    <div>
                        <div className="text-center">
                            <h4 className="font-monospace fw-bold">QUALITY HAS ITS PRICE</h4>
                            <h2 className="fw-bold fs-1 text-white">Pricings & Plans</h2>

                            <img className="mx-auto daag" src="img/daag.png" alt="" />
                        </div>
                        <div id="carouselIndicators" className="carousel slide pb-5" data-bs-ride="carousel">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div className="carousel-inner text-white">
                                <div className="carousel-item active">
                                    <div className="row">
                                        <div className="col-sm-6 mb-3">
                                            <p className="fs-3 fst-italic fw-bold">Once upon a time all the Rivers combined to protest against the action of the Sea in making their waters salt. “When we come to you,” said they to the Sea.</p>
                                            <div className="person">
                                                <img src="img/slider-img-1.jpg" className="" alt="" />
                                                <h6>John Doe</h6>
                                                <h5>CEO, THE RIVERS COMPANY</h5>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 mb-3">
                                            <p className="fs-3 fst-italic fw-bold">A shoe is not only a design, but it's a part of your body language, the way you walk. The way you're going to move is quite dictated by your shoes.</p>
                                            <div className="person">
                                                <img src="img/slider-img-2.jpg" className="" alt="" />
                                                <h6>Dean Winchester</h6>
						      		            <h5>UX DESIGNER, GOOGLE INC.</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="row">
                                        <div className="col-sm-6 mb-3">
                                            <p className="fs-3 fst-italic fw-bold">Once upon a time all the Rivers combined to protest against the action of the Sea in making their waters salt. “When we come to you,” said they to the Sea.</p>
                                            <div className="person">
                                                <img src="img/slider-img-3.jpg" className="" alt="" />
                                                <h6>John Doe</h6>
                                                <h5>CEO, THE RIVERS COMPANY</h5>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 mb-3">
                                            <p className="fs-3 fst-italic fw-bold">A shoe is not only a design, but it's a part of your body language, the way you walk. The way you're going to move is quite dictated by your shoes.</p>
                                            <div className="person">
                                                <img src="img/slider-img-4.jpg" className="" alt="" />
                                                <h6>Dean Winchester</h6>
						      		            <h5>UX DESIGNER, GOOGLE INC.</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="row">
                                        <div className="col-sm-6 mb-3">
                                            <p className="fs-3 fst-italic fw-bold">Once upon a time all the Rivers combined to protest against the action of the Sea in making their waters salt. “When we come to you,” said they to the Sea.</p>
                                            <div className="person">
                                                <img src="img/slider-img-5.jpg" className="" alt="" />
                                                <h6>John Doe</h6>
                                                <h5>CEO, THE RIVERS COMPANY</h5>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 mb-3">
                                            <p className="fs-3 fst-italic fw-bold">A shoe is not only a design, but it's a part of your body language, the way you walk. The way you're going to move is quite dictated by your shoes.</p>
                                            <div className="person">
                                                <img src="img/slider-img-6.jpg" className="" alt="" />
                                                <h6>Dean Winchester</h6>
						      		            <h5>UX DESIGNER, GOOGLE INC.</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="download">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-xs-6">
                            <p className="text-white fs-1"><span className="fw-bold">Like what you see? </span>Get this great theme now!</p>
                        </div>
                        <div className="col-sm-6 col-xs-6">
                            <button type="button" className="btn btn-outline-light text-bold fw-bold">VIEW FEATURES</button>
                            <button type="button" className="btn btn-primary text-white fw-bold">DOWNLOAD NOW</button>
                        </div>
                    </div>
                </div>
            </section>

            <section id="pricing" className="price-plan">
                <div className="container text-center">
                    <div className="pricing-heading">
                        <h4 className="font-monospace fw-bold">QUALITY HAS ITS PRICE</h4>
                        <h2 className="mb-3 fw-bold fs-1">Pricings &amp; Plans</h2>

                        <img className="mx-auto daag" src="img/daag.png" alt="" />
                    </div>
                    <div className="pricing-tables row justify-content-evenly mb-5 mt-3">
                        <div className="col-9 col-sm-5 col-md-5 col-lg-2 mb-3">
                            <div>
                                <h3>FREE</h3>
                             </div>
                            <div>
                                <h5 className="fw-bold">$25</h5>
                                <p className="fs-5">/per month</p>
                            </div>
                            <div>
                                <p className="fs-5 text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi arcu ex, gravida a <a href="#">dolor</a> nec.</p>
                                <button type="button" className="btn btn-outline-primary hover-white fw-bold">ORDER NOW</button>
                            </div>
                        </div>
                        <div className="col-9 col-sm-5 col-md-5 col-lg-2 mb-3">
                            <div>
                                <h3>PERSONAL</h3>
                            </div>
                            <div>
                                <h5 className="fw-bold">$25</h5>
                                <p className="fs-5">/per month</p>
                            </div>
                            <div>
                                <p className="fs-5 text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi arcu ex, gravida a <a href="#">dolor</a> nec.</p>
                                <button type="button" className="btn btn-outline-primary hover-white fw-bold">ORDER NOW</button>
                            </div>
                        </div>
                        <div className="col-9 col-sm-5 col-md-5 col-lg-2 mb-3">
                            <div>
                                <h3 className="main-blue">BUSINESS</h3>
                            </div>
                            <div className="background-main-blue">
                                <h5 className="fw-bold">$50</h5>
                                <p className="fs-5 text-white">/per month</p>
                            </div>
                            <div>
                                <p className="fs-5 text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi arcu ex, gravida a <a href="#">dolor</a> nec.</p>
                                <button type="button" className="btn btn-outline-primary hover-white fw-bold">ORDER NOW</button>
                            </div>
                        </div>
                        <div className="col-9 col-sm-5 col-md-5 col-lg-2 mb-3">
                            <div>
                                <h3>ULTIMATE</h3>
                            </div>
                            <div>
                                <h5 className="fw-bold">$99</h5>
                                <p className="fs-5">/per month</p>
                            </div>
                            <div>
                                <p className="fs-5 text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi arcu ex, gravida a <a href="#">dolor</a> nec.</p>
                                <button type="button" className="btn btn-outline-primary hover-white fw-bold">ORDER NOW</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="contact" className="contact">
                <div className="container text-center">
                    <div className="contact-heading">
					    <h4 className="font-monospace fw-bold">STAY IN TOUCH</h4>
					    <h2 className="mb-3 fw-bold fs-1">Contact us</h2>

					    <img className="mx-auto daag" src="img/daag.png" alt="" />
				    </div>
                    <div className="row justify-content-center">
                        <div className="col">
                            <i className="bi bi-telephone-fill"></i>
                            <p className="fs-5 text-muted">Phone: (415) 124-5678</p>
                            <p className="fs-5 text-muted">Fax: (412) 123-8290</p>
                        </div>
                        <div className="col">
                            <i className="bi bi-geo-alt-fill"></i>
                            <p className="fs-5 text-muted">1001 Brickell Bay Dr.</p>
                            <p className="fs-5 text-muted">Suite 1900</p>
                            <p className="fs-5 text-muted">Miami, FL 33131</p>
                        </div>
                        <div className="col">
                            <i className="bi bi-envelope-fill"></i>
                            <p className="fs-5 text-muted">user@mail.com</p>
                        </div>
                    </div>
                    <div className="form mx-auto mt-5 bg-black pt-5 px-5 pb-3">
                        <form action="">
                            <div className="row">
                                <div className="col">
                                    <input required type="text" className="form-control mb-3" name="name" placeholder="Name*" />
                                    <input required type="email" className="form-control mb-3" name="email" placeholder="Email*" />
                                    <input required type="text" className="form-control mb-3" name="subject" placeholder="Subject*" />
                                </div>
                                <div className="col">
                                    <textarea required className="form-control mb-3" cols="30" rows="3" name="message" placeholder="Message*" />
                                    <button type="submit" className="btn btn-primary text-white">SEND MESSAGE</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            <section className="map">
                <div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26556786.070929594!2d-116.97570703047097!3d35.65741775774772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2z0KHQv9C-0LvRg9GH0LXQvdGWINCo0YLQsNGC0Lgg0JDQvNC10YDQuNC60Lg!5e0!3m2!1suk!2sua!4v1671107188711!5m2!1suk!2sua" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </section>
        </main>
    );
}

export default Main;