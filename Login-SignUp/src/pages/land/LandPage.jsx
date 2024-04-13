import React, { useState, useEffect } from 'react';
import './landpage.css'
import { Link } from 'react-router-dom';


const Land = () => {
  const [navbarActive, setNavbarActive] = useState(false);
  const [headerActive, setHeaderActive] = useState(false);

  // Function to toggle the navbar and overlay
  const toggleNavbar = () => {
    setNavbarActive(!navbarActive);
  };

  // Function to close the navbar and overlay
  const closeNavbar = () => {
    setNavbarActive(false);
  };

  // Function to handle scrolling and show/hide header and back to top button
  const handleScroll = () => {
    if (window.scrollY > 80) {
      setHeaderActive(true);
    } else {
      setHeaderActive(false);
    }
  };

  // Add event listener for scrolling when component mounts
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array ensures that this effect runs only once when component mounts

  return (
    <div>
      {/* Hero section */}
      <section className="section hero" id="home" aria-label="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="h1 hero-title">
            Connecting students and supervisors for <span className="has-before">innovative</span> end-of-year projects.
          </h1>
          <p className="hero-text">
            Welcome to ProjetLink, where students and supervisors collaborate on technology projects, fostering innovation and educational growth.
          </p>
          <div className="wrapper">
            <a href="#feature" className="btn btn-primary has-before has-after">How It Works</a>
            <Link to="login/" className="hero-btn" aria-label="pixology promo">
            <ion-icon name="play-outline" aria-hidden="true"></ion-icon>
            <span className="span">Sign-Up</span>
            </Link>
          </div>
          <ul className="social-list">
            <li>
              <a href="#" className="social-link" style={{ "--color": "hsl(241, 77%, 63%)" }}>
                <ion-icon name="logo-facebook"></ion-icon>
                <span className="span">Facebook</span>
              </a>
            </li>
            <li>
              <a href="#" className="social-link" style={{ "--color": "hsl(0, 100%, 50%)" }}>
                <ion-icon name="logo-youtube"></ion-icon>
                <span className="span">Youtube</span>
              </a>
            </li>
            <li>
              <a href="#" className="social-link" style={{ "--color": "hsl(203, 89%, 53%)" }}>
                <ion-icon name="logo-twitter"></ion-icon>
                <span className="span">Twitter</span>
              </a>
            </li>
          </ul>
        </div>
        <figure className="hero-banner">
          <img src="/images/hero-banner (1).png" width="794" height="637" alt="hero banner" className="w-100" />
        </figure>
      </div>
      </section>

      {/* Service section */}
      <section className="section service" id="service" aria-label="service">
      <div className="container">
          <p className="section-subtitle has-before text-center">Our Projects</p>
          <h2 className="h2 section-title text-center">Choose from thousands of projects and make a <span className="has-before">meaningful</span> impact!</h2>
          <ul className="grid-list">
            <li>
              <div className="service-card" style={{ '--color': 'hsl(174, 77%, 50%)' }}>
                <div className="card-icon">
                  <img src="/images/service-icon-1.png" width="30" height="30" loading="lazy" alt="service icon" />
                </div>
                <h3 className="h3">
                  <a href="#" className="card-title">Communication Technologies</a>
                </h3>
              </div>
            </li>
            {/* Repeat the above pattern for other list items */}
            <li>
              <a href="#" className="link-card" style={{ '--color': 'hsl(203, 97%, 75%)' }}>
                <span className="span">More Suggestions</span>
                <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
              </a>
            </li>
          </ul>
        </div>
      </section>

      {/* Feature section */}
      <section className="section feature" id="feature" aria-label="feature">
      <div className="container">
          <figure className="feature-banner">
            <img src="/images/feature-banner.png" width="582" height="585" loading="lazy" alt="feature banner" className="w-100" />
          </figure>
          <div className="feature-content">
            <p className="section-subtitle has-before">How it Works</p>
            <h2 className="h2 section-title">
              The procedures for applying for the <span className="has-before">project.</span>
            </h2>
            <ul className="feature-list">
              <li>
                <div className="feature-card">
                  <div className="card-icon" style={{ '--color': 'hsl(174, 77%, 50%)' }}>
                    <ion-icon name="rocket-sharp" aria-hidden="true"></ion-icon>
                  </div>
                  <div>
                    <h3 className="h3 card-title">Choose a project.</h3>
                    <p className="card-text">
                      Select a project aligned with your interests from available options.
                    </p>
                  </div>
                </div>
              </li>
              {/* Repeat the above pattern for other list items */}
            </ul>
          </div>
        </div>
      </section>

      {/* Newsletter section */}
      <section id="newsletter" className="section newsletter has-bg-image" aria-label="newsletter" style={{backgroundImage: "url('C:\\Users\\MSI\\Downloads\\newsletter-bg.jpg')"}}>
            <div className="container">
              <figure className="newsletter-banner">
                <img src="/images/newsletter-banner.png" width="355" height="356" loading="lazy"
                  alt="newsletter banner" className="w-100" />
              </figure>
              <div className="newsletter-content">
                <p className="section-subtitle has-before">Get every update</p>
                <h2 className="h2 section-title">Subscribe newslater get latest updates and deals</h2>
                <form action="" className="newsletter-form">
                  <input type="email" name="email_address" placeholder="Enter your mail" required className="email-field" />
                  <button type="submit" className="btn btn-secondary has-before has-after">
                    <span className="span">Subscribe</span>
                    <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
                  </button>
                </form>
              </div>
            </div>
      </section>

      {/* Blog section */}
      <section className="section blog" id="blog" aria-label="blog">
      <div className="container">
              <p className="section-subtitle text-center has-before">NEWS & UPDATES</p>
              <h2 className="h2 section-title text-center">
                The latest <span className="has-before">UPDATES</span>
              </h2>
              <ul className="blog-list">
                <li>
                  <div className="blog-card large">
                    <figure className="card-banner">
                      <img src="/images/blog-1.jpg" width="644" height="363" loading="lazy"
                        alt="Godaddy user flow solution..." className="img-cover" />
                    </figure>
                    <div className="card-content">
                      <div className="wrapper">
                        <a href="#" className="tag">Web Development</a>
                        <a href="#" className="publish-date">
                          <ion-icon name="time-outline" aria-hidden="true"></ion-icon>
                          <span className="span">Nov 22, 2023</span>
                        </a>
                      </div>
                      <h3>
                        <a href="#" className="card-title">Developing a platform for the GEC departement</a>
                      </h3>
                      <p className="card-text">
                        Developing a platform for the GEC department to streamline communication and enhance collaboration among students, faculty, and staff.
                      </p>
                    </div>
                  </div>
                </li>
                {/* Repeat the above pattern for other list items */}
              </ul>
            </div>
      </section>

      {/* Footer section */}
      <section className="footer">
       
      <div className="footer-top section">

<div className="footer-brand">

  <p className="footer-list-title">About ProjectLink</p>

  <p className="footer-text">
    Empowering Professionals with Seamless Connectivity for Enhanced Collaboration and Innovation.
  </p>

  
</div>

<ul className="footer-list">

  <li>
    <p className="footer-list-title">Useful Links</p>
  </li>

  <li>
    <a href="mailto:Ahmed.Rekik@ieee.org" className="footer-link">Contact us</a>
  </li>

  <li>
    <a href="#feature" className="footer-link">How it Works</a>
  </li>

  <li>
    <a href="#service" className="footer-link">Create</a>
  </li>

  <li>
    <a href="#home" className="footer-link">Explore</a>
  </li>

  <li>
    <a href="#feature" className="footer-link">Terms & Procedures</a>
  </li>

</ul>

<ul className="footer-list">

  <li>
    <p className="footer-list-title">Community</p>
  </li>

  <li>
    <a href="#service" className="footer-link">Suggestions</a>
  </li>

  <li>
    <a href="#service" className="footer-link">Projects</a>
  </li>

  <li>
    <a href="#newsletter" className="footer-link">Newsletters</a>
  </li>

</ul>

<ul className="footer-list">

  <li>
    <p className="footer-list-title">Instagram post</p>
  </li>

  <li>
    <ul className="insta-post">

      <li>
        <div className="insta-card">

          <figure className="post-banner">
            <img src="/images/insta-post-1.jpg" width="77" height="63" loading="lazy"
              alt="instagram post" className="img-cover" />
          </figure>

          <a href="#" className="card-content">
            <ion-icon name="logo-instagram" aria-hidden="true"></ion-icon>
          </a>

        </div>
      </li>
      <li>
        <div class="insta-card">
        <figure class="post-banner">
            <img src="/images/insta-post-3.jpg" width="77" height="63" loading="lazy"
                alt="instagram post" class="img-cover" />
        </figure>

        <a href="#" class="card-content">
            <ion-icon name="logo-instagram" aria-hidden="true"></ion-icon>
        </a>

        </div>
        </li>   
        <li>
            <div class="insta-card">

            <figure class="post-banner">
                <img src="/images/insta-post-4.jpg" width="77" height="63" loading="lazy"
                 alt="instagram post" class="img-cover" />
            </figure>

            <a href="#" class="card-content">
                <ion-icon name="logo-instagram" aria-hidden="true"></ion-icon>
             </a>

            </div>
             </li>

            <li>
            <div class="insta-card">

            <figure class="post-banner">
                    <img src="/images/insta-post-5.jpg" width="77" height="63" loading="lazy"
                      alt="instagram post" class="img-cover" />
                  </figure>

                  <a href="#" class="card-content">
                    <ion-icon name="logo-instagram" aria-hidden="true"></ion-icon>
                  </a>

                </div>
              </li>

              <li>
                <div class="insta-card">

                  <figure class="post-banner">
                    <img src="/images/insta-post-6.jpg" width="77" height="63" loading="lazy"
                      alt="instagram post" class="img-cover" />
                  </figure>

                  <a href="#" class="card-content">
                    <ion-icon name="logo-instagram" aria-hidden="true"></ion-icon>
                  </a>

                </div>
              </li>


      

    </ul>
  </li>

</ul>

</div>

<div className="footer-bottom">

<p className="copyright">
  &copy; {new Date().getFullYear()} ProjectLink. All Rights Reserved
</p>

<ul className="footer-bottom-list">

  <li>
    <a href="#" className="footer-bottom-link">Privacy policy</a>
  </li>

  <li>
  <Link to="login/">Login / Signup</Link>
  </li>

</ul>

</div>

</section>
     

      {/* Back to top button */}
      <a href="#top" className={`back-top-btn has-after ${headerActive ? 'active' : ''}`} aria-label="back to top" data-back-top-btn>
        <ion-icon name="arrow-up" aria-hidden="true"></ion-icon>
      </a>

      {/* ionicon link */}
      <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
      <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
    </div>
  );
};

export default Land;
