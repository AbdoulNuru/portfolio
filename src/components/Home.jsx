import React from "react";

const Home = () => {
  return (
    <>
      {/* Loader */}
      {/* <div className="preloader">
        <div className="status">
          <div className="spinner">
            <div className="double-bounce1"></div>
            <div className="double-bounce2"></div>
          </div>
        </div>
      </div> */}
      {/* Loader */}

      {/* Navbar */}
      <nav
        id="navbar"
        className="navbar navbar-expand-lg fixed-top navbar-custom navbar-light sticky"
      >
        <div className="container">
          {/* Logo container */}
          <a className="logo" href="#/">
            Abdoul
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="mdi mdi-menu"></i>
          </button>
          {/* end button */}

          <div
            className="collapse navbar-collapse navigation"
            id="navbarCollapse"
          >
            <ul id="navbar-navlist" className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" href="index-typed.html#home">
                  Home
                </a>
              </li>
              {/* end nav item */}
              <li className="nav-item">
                <a className="nav-link" href="index-typed.html#services">
                  Services
                </a>
              </li>
              {/* end nav item */}
              <li className="nav-item">
                <a className="nav-link" href="index-typed.html#resume">
                  Resume
                </a>
              </li>
              {/* end nav item */}
              <li className="nav-item">
                <a className="nav-link" href="index-typed.html#projects">
                  Projects
                </a>
              </li>
              {/* end nav item */}
              <li className="nav-item">
                <a className="nav-link" href="index-typed.html#news">
                  Blog
                </a>
              </li>
              {/* end nav item */}
              <li className="nav-item">
                <a className="nav-link" href="index-typed.html#contact">
                  Contact
                </a>
              </li>
              {/* end nav item */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#/"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Pages
                </a>
                <div
                  className="dropdown-menu rounded m-0"
                  aria-labelledby="navbarDropdown"
                >
                  <div className="container ms-0 ms-md-0">
                    <div className="row">
                      <div className="col-md-12">
                        <a className="dropdown-item" href="page-blog.html">
                          Blog
                        </a>
                        <a
                          className="dropdown-item"
                          href="page-blog-detail.html"
                        >
                          Blog Detail
                        </a>
                        <a className="dropdown-item" href="page-portfolio.html">
                          Portfolio
                        </a>
                        <a
                          className="dropdown-item"
                          href="page-portfolio-detail.html"
                        >
                          Portfolio Detail
                        </a>
                      </div>
                      {/* end col */}
                    </div>
                    {/* end row */}
                  </div>
                  {/* end container */}
                </div>
              </li>
              {/* end nav item */}
            </ul>

            <ul className="top-right text-right list-unstyled list-inline mb-0 mt-2 mt-sm-0 nav-social">
              <li className="list-inline-item me-2">
                <a href="#/">
                  <i className="mdi mdi-facebook"></i>
                </a>
              </li>
              <li className="list-inline-item me-2">
                <a href="#/">
                  <i className="mdi mdi-twitter"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#/">
                  <i className="mdi mdi-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* end container */}
      </nav>
      {/* end navbar */}
      {/* Navbar End */}

      {/* Personal Info  */}
      {/* Tangira Kwivuga */}
      <div
        className="hero-area position-relative bg-half-120 pb-0"
        style={{ backgroundImage: "url(img/murugo/home-shape.png)" }}
        id="home"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-7 align-items-center">
              <div className="title-heading mt-4 py--50">
                <h1 className="heading text-black">
                  I Am{" "}
                  <span
                    className="element text-primary"
                    data-elements="Web Designer, Web Developer, Photographer"
                  ></span>
                  <span id="typed" className="text-primary"></span>
                </h1>
                <p className="pera-title text-light-muted">
                  Obviously I'm a Web Designer. Web Developer with over 3 years
                  of experience. Experienced with all stages of the development
                </p>
                <div className="hero-btn mt-4 pt-2">
                  <a href="#/" className="btn btn-primary rounded me-2 mb-2">
                    Hire Me
                  </a>
                  <a
                    href="#/"
                    className="btn btn-outline-primary rounded text-white mb-2"
                  >
                    Download CV{" "}
                    <i data-feather="download" className="fea icon-sm"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-5 mt-4 pt-2 mt-sm-0 pt-sm-0">
              <div className="home-image">
                <img
                  src="img/murugo/home.png"
                  alt=""
                  className="img-fluid mx-auto position-relative"
                  style={{ visibility: "hidden" }}
                />
              </div>
            </div>
            {/* Ifoto yomurugo */}
            {/* <div class="col-lg-5 col-md-5 mt-4 pt-2 mt-sm-0 pt-sm-0">
              <div className="home-image">
                <img
                  src="images/home/home.png"
                  alt=""
                  className="img-fluid mx-auto position-relative"
                />
              </div>
            </div> */}
          </div>
        </div>
      </div>
      {/* Soza Kwivuga */}

      {/* Umwirondoro */}
      <section className="bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="card public-profile border-0 rounded shadow"
                style={{ zIndex: 1 }}
              >
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col-lg-3 col-md-4 text-md-start">
                      {/* <img src="images/client/05.jpg" class="avatar avatar-large rounded-circle shadow d-block mx-auto" alt=""> */}
                      <div className="about-details key-feature bg-light">
                        <div className="media-body content">
                          <h6 className="title mb-2">Personal Details</h6>
                          <div className="bor-bottom mt-2 mb-2"></div>
                          <p className="text-muted mb-2 mt-3 font-14">
                            <a href={() => false} className="text-black">
                              Email:{" "}
                            </a>{" "}
                            abdoulniyigena@gmail.com
                          </p>
                          <p className="text-muted mb-2 mt-3 font-14">
                            <a href={() => false} className="text-black">
                              Phone:{" "}
                            </a>{" "}
                            +250 788 470370
                          </p>
                          <p className="text-muted mb-2 font-14">
                            <a href={() => false} className="text-black">
                              Languages:{" "}
                            </a>{" "}
                            English, French, Swahili, Kinyarwanda
                          </p>
                          <p className="text-muted mb-0 font-14">
                            <a href={() => false} className="text-black">
                              Nationality:{" "}
                            </a>{" "}
                            Rwandan
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-9 col-md-8">
                      <div className="row align-items-end">
                        <div className="col-md-12 text-md-start mt-4 mt-sm-0">
                          <h4 className="heading me-2">
                            I Am{" "}
                            <span
                              className="element text-primary"
                              data-elements="Web Designer, Web Developer, Photographer"
                            ></span>
                            <span id="typed" className="text-primary"></span>
                          </h4>
                          <p className="text-light-muted mt-2">
                            Obviously I'm a Web Designer. Web Developer with
                            over 3 years of experience. Experienced with all
                            stages of the development cycle for dynamic web
                            projects. The as opposed to using 'Content here,
                            content here', making it look like readable English.
                          </p>
                          <img src="img/signature.png" height="65" alt="" />
                        </div>
                        {/* end col */}
                      </div>
                      {/* end row */}
                    </div>
                    {/* end col */}
                  </div>
                  {/* end row */}
                </div>
              </div>
            </div>
            {/* end col */}
          </div>
          {/* end row */}
        </div>
        {/* end container */}
      </section>
      {/* end section */}
      {/* Aho umwirondoro urangirira */}
    </>
  );
};

export default Home;
