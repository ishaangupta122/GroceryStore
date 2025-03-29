import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className='footer pt-5 pb-3'>
        <div className='container-fluid footer-content'>
          <div className='row w-100 footer-container'>
            <div className='col-lg-4 col-sm-12 footer-brand-container'>
              <h2 className='footer-brand text-white'>Groceries</h2>
              <p className='desc'>
                With a wide selection of fresh produce, pantry staples, and
                household essentials, we've got everything you need just a click
                away.
              </p>
              <div className='col footer-link-col mt-2'>
                <ul className='footer-social-list'>
                  <li>
                    <Link to='/'>
                      <i className='fab fa-facebook-f' />
                    </Link>
                  </li>
                  <li>
                    <Link to='/'>
                      <i className='fab fa-twitter' />
                    </Link>
                  </li>
                  <li>
                    <Link to='/'>
                      <i className='fab fa-instagram' />
                    </Link>
                  </li>
                  <li>
                    <Link to='/'>
                      <i className='fab fa-linkedin-in' />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <hr className='footer-hr footer-hr1' />

            <div className='col footer-link-col'>
              <p className='footer-title'>Customer Service</p>
              <ul className='footer-list'>
                <li>
                  <Link to='/'>Contact Us</Link>
                </li>
                <li>
                  <Link to='/'>Track Order</Link>
                </li>
                <li>
                  <Link to='/'>Return Policy</Link>
                </li>
                <li>
                  <Link to='/'>Shipping Info</Link>
                </li>
              </ul>
            </div>
            <div className='col footer-link-col'>
              <p className='footer-title'>Company</p>
              <ul className='footer-list'>
                <li>
                  <Link to='/'>About Us</Link>
                </li>
                <li>
                  <Link to='/'>Careers</Link>
                </li>
                <li>
                  <Link to='/'>Press Releases</Link>
                </li>
                <li>
                  <Link to='/'>Blog</Link>
                </li>
              </ul>
            </div>
            <div className='col footer-link-col'>
              <p className='footer-title'>Account</p>
              <ul className='footer-list'>
                <li>
                  <Link to='/'>Your Account</Link>
                </li>
                <li>
                  <Link to='/'>Order Tracking</Link>
                </li>
                <li>
                  <Link to='/'>Delivery Info</Link>
                </li>
                <li>
                  <Link to='/'>Shipping and Policies</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className='footer-hr' />
        <div className='col'>
          <p className='my-0 text-center copyright-text'>
            © All rights reserved. Made with{" "}
            <i className='fa-solid fa-heart'></i> by <span>Ishaan Gupta</span>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
