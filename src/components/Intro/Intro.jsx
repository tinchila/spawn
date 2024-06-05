
import './Intro.css';
import btnImg from '../../assets/menu.png';
import bg from '../../assets/Profile1.png';
import { motion } from 'framer-motion';
// import { Link } from 'react-scroll';

const Intro = () => {
  return (
    <section id='intro'>
        <div className='introContent'>
        <span className='hello'>Hello, Im</span>
            <span className='introText'>DJ <span className='introName'>Spawn</span> <br/>Owner of <span className='introName'>First Move Studio</span></span>
            <p className='introPara'>Im a passionate DJ of dark eclectic music, born in the underground.<br/></p>
            <button className='btn'>
                <a href="https://api.whatsapp.com/send?phone=543516783306" target="_blank" rel="noreferrer" className='btnSpawn'>
                    <img src={btnImg} alt="Boton" className='btnSpawnImg'></img>
                    <img src={btnImg} alt="Boton" className='btnSpawnImg'></img>
                    <img src={btnImg} alt="Boton" className='btnSpawnImg'></img>
                </a>
            </button>
        </div>
          <motion.img
            src={bg} alt='Profile'
            className='bg' 
            initial={{x:"7rem", opacity:0}}
            animate={{x:0, opacity:1}}
            transition={{duration:2, type:"spring"}}>
          </motion.img>
    </section>
  )
}

export default Intro;
