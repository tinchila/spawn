import { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../../assets/logoweb.png';
import { Link, animateScroll as scroll } from 'react-scroll';
import menu from '../../assets/menu.png';

// Función para crear las partículas de smog
const createParticles = (container, num) => {
  for (let i = 0; i < num; i++) {
    let particle = document.createElement("div");
    particle.className = "particle";
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.animationDelay = `${Math.random()}s`;
    container.appendChild(particle);
  }
};

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const smogContainer = document.getElementById("smog-container");
    createParticles(smogContainer, 20);
  }, []);

  // Maneja el clic en el logo para asegurar que siempre lleve a la parte superior
  const handleLogoClick = () => {
    scroll.scrollToTop({
      duration: 500,
      smooth: 'easeInOutQuart',
    });
  };

  return (
    <nav className='navbar'>
      <div className='logo-link' onClick={handleLogoClick}>
        <img src={logo} alt='Logo' className='logo' />
      </div>
      <div className='desktopMenu'>
        {/* Otros enlaces siguen utilizando react-scroll Link */}
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Home</Link>
        <Link activeClass='active' to='about' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>Bio</Link>
        <Link activeClass='active' to='events' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>Events</Link>
        <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>Tracks</Link>
        <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>Contact</Link>
      </div>
      <img src={menu} alt='Menu' className='mobMenu' onClick={() => setShowMenu(!showMenu)} />
      <div className='navMenu' style={{ display: showMenu ? 'flex' : 'none' }}>
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={() => setShowMenu(false)}>Home</Link>
        <Link activeClass='active' to='about' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={() => setShowMenu(false)}>Bio</Link>
        <Link activeClass='active' to='events' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={() => setShowMenu(false)}>Events</Link>
        <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={() => setShowMenu(false)}>Tracks</Link>
        <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={() => setShowMenu(false)}>Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
