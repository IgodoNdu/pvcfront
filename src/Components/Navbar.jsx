import React, {useState} from 'react';
import { Link } from 'react-scroll';
import logo from '../images/logo1.png';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const changeBackground = () => {
      if(window.scrollY >= 50) {
        setNav(true);
      } else{
        setNav(false);
      }
    }

    window.addEventListener('scroll', changeBackground);
    

  return (
    <nav className={nav ? "nav active" : "nav"}>
      <Link to='main' className='logo' smooth={true} duration={2000}>
        <img src={logo} alt='' />
      </Link>
      <input className='menu-btn' type='checkbox' id='menu-btn' />
      <label className='menu-icon' htmlFor='menu-btn'>
        <span className='nav-icon'></span>
      </label>
      <ul className='menu'>
        <li><Link to='main' smooth={true} duration={2000}>Header</Link></li>
        <li><Link to='about' smooth={true} duration={2000}>About PVC Draw</Link></li>
        <li><Link to='products' smooth={true} duration={2000}>Terms and Conditions</Link></li>
        <li><Link to='contact' smooth={true} duration={2000}>Register for draw</Link></li>
        <li><Link to='entries' smooth={true} duration={2000}>Entries</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar
