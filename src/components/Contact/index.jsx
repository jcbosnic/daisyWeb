import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import  emailjs  from '@emailjs/browser';
import './styles.css'


const Contact = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm({
      defaultValues: { yes_i_understand: false }
    });
    const [ statusMessage, setStatusMessage ] = useState('');
  
  
    const form = useRef();
  
    const sendEmail = () => {
      emailjs.sendForm('service_i7xn5jd', 'template_eke7oki', form.current, 'MRmz5szHvur34n9vg')
      .then(() => {
            setStatusMessage('Mensaje enviado')
            setTimeout(() => setStatusMessage(false), 3000);
            form.current.reset();
        }, (error) => {
            console.log(error.text);
        });
        reset();
    }


return (
    <>
        <form className="blockForm" ref={form} onSubmit={handleSubmit(sendEmail)}>
          <h1>Hablemos</h1>
          <label>Nombre</label>
          <input { ...register ('name', {required: true})} type="text" name="name" />
          {errors.name && <p className="errorMessage">Debes ingresar tu nombre</p>}
          <label>Teléfono</label>
          <input {...register('phone', {required: true})} name="phone"  />
          {errors.phone && <p className="errorMessage">Debes ingresar un teléfono</p>}
          <label>Correo</label>
          <input {...register('email', {required: true})} type="email"  name="email" />
          {errors.email && <p className="errorMessage">Debes ingresar un correo</p>}
          <label>¿En qué te puedo ayudar?</label>
          <input {...register('message', {required: true})} name="message"  />
          {errors.message && <p className="errorMessage">Debes ingresar una mensaje</p>}
          <button value="Send">Enviar</button>
          <p className="messageSend">{statusMessage}</p>
        </form>
    </>
  );
};

export default Contact;
