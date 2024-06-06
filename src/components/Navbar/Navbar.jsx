import { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logoweb.png';
import { animateScroll as scroll } from 'react-scroll';
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
        <div className='desktopMenuListItem'>Bio</div>
        <div className='desktopMenuListItem'>Events</div>
        <div className='desktopMenuListItem'>Tracks</div>
        <div className='desktopMenuListItem' onClick={handleContactClick}>Contact</div>
      </div>
      <img src={menu} alt='Menu' className='mobMenu' onClick={() => setShowMenu(!showMenu)} />
      <div className='navMenu' style={{ display: showMenu ? 'flex' : 'none' }}>
        <div className='listItem' onClick={handleLogoClick}>Home</div>
        <div className='listItem'>Bio</div>
        <div className='listItem'>Events</div>
        <div className='listItem'>Tracks</div>
        <div className='listItem' onClick={handleContactClick}>Contact</div>
      </div>
    </nav>
  );
}

export default Navbar;
