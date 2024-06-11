
import './Contact.css';
import Youtube from '../../assets/youtube-icon.png';
import Soundcloud from '../../assets/soundcloud-icon.png';
import WhatsappIcon from '../../assets/whatsapp-icon.png';
import Instagram from '../../assets/instagram-icon.png';
import Linktr from '../../assets/linktree-icon.png';
import Enviar from '../../assets/menu.png';
import EnviarHover from '../../assets/enviar.png'; // Importa la imagen para el hover
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

const Contact = () => {
  const form = useRef();
  const [buttonImage, setButtonImage] = useState(Enviar);

  const handleMouseEnter = () => {
    setButtonImage(EnviarHover);
  };

  const handleMouseLeave = () => {
    setButtonImage(Enviar);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_o8t2qwe', 'template_4wsmjgf', form.current, 'PwcJfkdqTsuHgDmrK')
      .then((result) => {
        console.log(result.text);
        // Muestra la alerta de SweetAlert2 después de un envío exitoso
        Swal.fire({
          title: 'Enviado!',
          text: 'Tu mensaje fue enviado exitosamente.',
          color: '#ffffff',
          icon: 'success',
          confirmButtonText: 'OK',
          confirmButtonColor: '#555', // Color gris para el botón OK
          background: '#404040', // Fondo negro
          customClass: {
            title: 'white-text', // Texto del título en blanco
            htmlContainer: 'white-text', // Texto del cuerpo en blanco
            confirmButton: 'custom-confirm-button' // Clase personalizada para el botón OK
          },
          onOpen: (modalElement) => {
            const confirmButton = modalElement.querySelector('.custom-confirm-button');
            if (confirmButton) {
              // Aplicar estilos personalizados
              confirmButton.style.backgroundColor = '##404040'; // Color de fondo amarillo
              confirmButton.style.color = '#fff'; // Color del texto blanco
              confirmButton.style.border = '1px solid #ffc730'; // Color del borde amarillo
            }
          },
        });

        // Restablece el formulario
        form.current.reset();
      })
      .catch((error) => {
        console.log(error.text);
        // En caso de error, también puedes mostrar una alerta de error
        Swal.fire({
          title: 'Error!',
          text: 'Tu mensaje no pudo ser enviado. Por favor intenta enviarlo nuevamente.',
          icon: 'error',
          confirmButtonText: 'OK',
        });
      });
  };

  return (
    <section id='contactPage' className='contactPage'>
      <div id='contact'>
        <h1 className='contactPageTitle'>Contact Me</h1>
        <span className='contactDesc'>Por favor llena el formulario debajo para discutir por posibles oportunidades de trabajo, eventos o reservar para First Move.</span>
        <form className='contactForm' ref={form} onSubmit={sendEmail}>
          <input type='text' className='name' placeholder='Your Name' name='your_name' />
          <input type='email' className='email' placeholder='Your Email' name='your_email' />
          <textarea className='msg' name='message' rows='5' placeholder='Your Message'></textarea>
          <button 
            type='submit' 
            value='send' 
            className='submitBtn'
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <img src={buttonImage} alt="Enviar" className='enviarBtn' />
          </button>
          <br />
          <div className='links'>
            <a href="https://www.youtube.com/@LunaFederico/featured" target='_blank'><img src={Youtube} alt='Youtube' className='link'/></a>
            <a href="https://soundcloud.com/spawnkolo" target='_blank'><img src={Soundcloud} alt='SoundCloud' className='link'/></a>
            <a href="https://www.instagram.com/spawnkolo" target='_blank'><img src={Instagram} alt='Instagram' className='link'/></a>
            <a href="https://linktr.ee/spawnkolo" target='_blank'><img src={Linktr} alt='Linktr' className='link'/></a>
            <a href="https://api.whatsapp.com/send?phone=543516783306" target='_blank'><img src={WhatsappIcon} alt='Whatsapp' className='link'/></a>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
