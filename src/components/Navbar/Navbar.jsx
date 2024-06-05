import { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../../assets/logoweb.png';
import { Link, animateScroll as scroll } from 'react-scroll';
import menu from '../../assets/menu.png';

const createParticles = (containerId, num) => {
  const container = document.getElementById(containerId);
  if (container) {
    for (let i = 0; i < num; i++) {
      let particle = document.createElement("div");
      particle.className = "particle";
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.animationDelay = `${Math.random()}s`;
      container.appendChild(particle);
    }
  } else {
    console.log('Container not found:', containerId);
  }
};

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    createParticles("smog-container", 20);
  }, []);

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
      <div className="smog-container" id="smog-container">
        {/* Partículas */}
      </div>
    </nav>
  );
}

export default Navbar;
