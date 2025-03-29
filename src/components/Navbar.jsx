import { Link } from "react-router-dom";
import CartOffcanvas from "./CartCanvas";

const Navbar = () => {
  return (
    <>
      <CartOffcanvas />
      <div className='sideNavbar'>
        <nav
          className='navbar navbar-expand-lg navbar-light bg-light px-4'
          style={{ boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}>
          <div className='container-fluid'>
            <Link className='navbar-brand text-dark' to='/'>
              Groceries.
            </Link>
            <button
              className='navbar-toggler'
              type='button'
              data-bs-toggle='offcanvas'
              data-bs-target='#offcanvasExample'
              aria-controls='offcanvasExample'>
              <span className='navbar-toggler-icon'></span>
            </button>
            <div
              className='offcanvas offcanvas-start w-75'
              tabIndex={-1}
              id='offcanvasExample'
              aria-labelledby='offcanvasExampleLabel'>
              <div className='offcanvas-header'>
                <h5 className='offcanvas-title' id='offcanvasExampleLabel'>
                  Groceries.
                </h5>
                <button
                  type='button'
                  className='btn-close'
                  data-bs-dismiss='offcanvas'
                  aria-label='Close'></button>
              </div>
              <div className='offcanvas-body'>
                <ul className='navbar-nav' id='nav-ul'>
                  <li className='nav-item'>
                    <Link className='nav-link' to={"/"}>
                      Home
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link className='nav-link'>About</Link>
                  </li>
                  <li className='nav-item'>
                    <Link className='nav-link' to={"/contact"}>
                      Contact
                    </Link>
                  </li>

                  <li className='nav-item dropdown'>
                    <button
                      className='btn btn-none dropdown-toggle'
                      type='button'
                      data-bs-toggle='dropdown'>
                      Shop
                    </button>
                    <ul className='dropdown-menu'>
                      <li>
                        <Link className='dropdown-item'>Action</Link>
                      </li>
                      <li>
                        <Link className='dropdown-item'>Another action</Link>
                      </li>
                      <li>
                        <Link className='dropdown-item'>
                          Something else here
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
                <div className='icons'>
                  <Link className='text-dark icon-links'>
                    <i className='fa-solid fa-magnifying-glass'></i>
                  </Link>
                  <Link className='text-dark icon-links'>
                    <i className='fa-regular fa-heart'></i>
                  </Link>
                  <Link className='text-dark icon-links'>
                    <i className='fa-regular fa-user'></i>
                  </Link>
                  <button
                    type='button'
                    className='text-dark icon-links shop-cart-btn'
                    data-bs-toggle='offcanvas'
                    data-bs-target='#offcanvasCart'
                    aria-controls='offcanvasCart'>
                    <i className='fa-solid fa-cart-shopping'></i>
                  </button>
                </div>
              </div>
              <div className='offcanvas-footer navbar-offcanvas-footer'>
                <div className='footer-actions navbar-footer-actions'>
                  <button className='btn btn-custom btn-custom1'>
                    Login
                    <i className='fa-solid fa-arrow-right'></i>
                  </button>
                  <button className='btn btn-custom btn-custom2'>
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
