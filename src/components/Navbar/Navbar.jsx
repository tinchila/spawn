import { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logoweb.png';
import { Link, animateScroll as scroll } from 'react-scroll';
import menu from '../../assets/menu.png';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleLogoClick = () => {
    scroll.scrollToTop({
      duration: 500,
      smooth: 'easeInOutQuart',
    });
  };

  const handleContactClick = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className='navbar'>
      <div className='logo-link' onClick={handleLogoClick}>
        <img src={logo} alt='Logo' className='logo' />
      </div>
      <div className='desktopMenu'>
        <div className='desktopMenuListItem' onClick={handleLogoClick}>Home</div>
        <Link activeClass='active' to='about' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>Bio</Link>
        <Link activeClass='active' to='events' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>Events</Link>
        <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>Tracks</Link>
        <div className='desktopMenuListItem' onClick={handleContactClick}>Contact</div>
      </div>
      <img src={menu} alt='Menu' className='mobMenu' onClick={() => setShowMenu(!showMenu)} />
      <div className='navMenu' style={{ display: showMenu ? 'flex' : 'none' }}>
        <div className='listItem' onClick={handleLogoClick}>Home</div>
        <Link activeClass='active' to='about' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={() => setShowMenu(false)}>Bio</Link>
        <Link activeClass='active' to='events' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={() => setShowMenu(false)}>Events</Link>
        <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={() => setShowMenu(false)}>Tracks</Link>
        <div className='listItem' onClick={handleContactClick}>Contact</div>
      </div>
    </nav>
  );
}

export default Navbar;
