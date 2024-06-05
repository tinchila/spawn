
import './About.css';
import Business from '../../assets/business-design.png';
import Inicios from '../../assets/inicios.png';
import BackDesign from '../../assets/backend-design.png';


const About = () => {
  return (
    <section id='about'>
        <span className='aboutTitle'>Biography</span>
        <span className='aboutDesc'>Federico Luna mejor conocido como Spawn aka Kolo, es un DJ oriundo de la provincia de Buenos Aires, creció en la ciudad de Ushuaia y actualmente reside en Córdoba. Formó la productora First Move Studio, con la cual ademas de realizar prácticas, grabaciónes y asesorías de mezclas tanto para DJs como para productores también organiza eventos con la participación de artistas de todo el país.</span>
        <div className='aboutBars'>
            <div className='aboutBar'>
            <img src={Inicios} alt='Inicios' className='aboutBarImgTop'></img>
                <div className='aboutBarText'>
                    <h2 className='aboutTextTitle'>Inicios</h2>
                    <p className='aboutBarTextTop'>Junto a la productora First Move realizo varios eventos en la ciudad de Ushuaia con participaciónes de artistas de toda la provincia, incluso con la participacion en un evento de Mariano DC. Posteriormente en el año 2016 se despidio de la ciudad convocando al evento GrooveAndYes de la ciudad de Buenos Aires.<br></br><br></br>
                    Su iniciativa de estudiar produccion de medios audiovisuales lo llevo a la provincia de Córdoba, donde pudo compartir cabina con artistas renombrados como ANNA, Analog Jungs, Matias Chilano, Pampa, Luciano Lebihan, Marce del Boca, Evegrem, Centeno, Apolo, Axel Zambrano, Vladimir, Benja Millan, Castelli Stucks, Lutuc, Pilar Basttistelli, Ariel Zurita, Mac Páez y Juan Arce entre otros.</p>
                </div>
            </div>
            <div className='aboutBar'>
                <img src={BackDesign} alt='BackDesign' className='aboutBarImgMed'></img>
                <div className='aboutBarText'>
                    <h2 className='aboutTextTitle'>Background</h2>
                    <p className='aboutBarTextBack'> Las influencias de Spawn durante sus sets giran entorno a las melodías y grooves oscuros del Minimal Techno, orientado a los sonidos de artistas como Recondite, Hozho, Massano, Dubfire John Digweed hasta Richie Hawtin.<br></br><br></br>
                    En el año 2022 realizo técnica de cabina para el artista BizzaRap en el evento Halloween realizado en el Castillo del Jockey. Y en el año 2023 realizo técnica de cabina en el festival Cósquin Rock.<br></br><br></br>
                    Actualmente trabaja en la técnia de cabina en Buenas Noches producciones (trabajando junto a artistas como Hernán Cattaneo, Richie Hawtin, John Digweed, Guy J, Facu Carri, Fede Gomez entre otros)</p>
                </div>
            </div>
            <div className='aboutBar'>
                <img src={Business} alt='business' className='aboutBarImg'></img>
                <div className='aboutBarText'>
                    <h2 className='aboutTextTitle'>Rider Técnico</h2>
                    <p className='aboutBarTextRider'>Pionner CDJ2000Nxs2 o superior.<br></br><br></br>Pioneer 900Nxs2 o superior.</p>
                </div>
            </div>
        </div>
        </section>
    )
}

export default About;
