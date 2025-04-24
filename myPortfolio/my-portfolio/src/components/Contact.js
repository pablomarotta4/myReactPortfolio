import { useState, useRef } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import emailjs from '@emailjs/browser';
import { motion, AnimatePresence } from 'framer-motion';

export const Contact = () => {
    const form = useRef();
    const [buttonText, setButtonText] = useState('Enviar');
    const [errors, setErrors] = useState({});
    const [emailStatus, setEmailStatus] = useState({ success: false, message: '' });

    const validateForm = () => {
        const formData = new FormData(form.current);
        const name = formData.get('user_name').trim();
        const lastName = formData.get('user_lastName').trim();
        const email = formData.get('user_email').trim();
        const message = formData.get('message').trim();

        const newErrors = {};

        if (!name) {
            newErrors.name = 'Debes ingresar un nombre';
        }

        if (!lastName) {
            newErrors.lastName = 'Debes ingresar un apellido';
        }

        if (!email) {
            newErrors.email = 'Debes ingresar un correo electrónico';
        } else if (!validateEmail(email)) {
            newErrors.email = 'Debes ingresar un correo electrónico válido';
        }

        if (!message) {
            newErrors.message = 'Debes ingresar un mensaje';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const validateEmail = (email) => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    };

    const cleanForm = (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setButtonText('Enviando...');
        setEmailStatus({ success: false, message: '' });

        emailjs.sendForm('service_j437ubh', 'template_4w5yn3i', form.current, '83JzCBQToFNvjxHz6')
            .then(
                () => {
                    setEmailStatus({
                        success: true,
                        message: "¡Mensaje enviado con éxito! Me pondré en contacto contigo lo más pronto posible."
                    });
                    form.current.reset();
                    setButtonText('Enviar');
                },
                (error) => {
                    setEmailStatus({
                        success: false,
                        message: "Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo."
                    });
                    setButtonText('Enviar');
                },
            );
    };

    return (
        <section id="contact" className="contact">
            <Container className='contact-container'>
                <Row className='contact-row'>
                    <Col>
                        <div className="section-title">
                            <h2 className="section-title-text">Contacto</h2>
                        </div>
                        <div className="contact-info">
                            <p>Si tienes alguna pregunta o quieres contactarme, por favor llena el formulario y te responderé lo más pronto posible.</p>
                            <p>Si prefieres, también puedes contactarme a través de mis redes sociales.</p>
                        </div>
                        <form ref={form} onSubmit={cleanForm}>
                            <Row className='form-row'>
                                <Row>
                                    <Col className="form-field">
                                        <label>Nombre</label>
                                        <input className="custom-input" type="text" name="user_name" />
                                        {errors.name && <p className="error-message">{errors.name}</p>}
                                    </Col>
                                    <Col className='form-field'>
                                        <label>Apellido</label>
                                        <input className="custom-input" type="text" name="user_lastName" />
                                        {errors.lastName && <p className="error-message">{errors.lastName}</p>}
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className='form-field'>
                                        <label>Email</label>
                                        <input className="custom-input" type="email" name="user_email" />
                                        {errors.email && <p className="error-message">{errors.email}</p>}
                                    </Col>
                                    <Col className='form-field'>
                                        <label>Teléfono</label>
                                        <input className="custom-input" type="tel" name="user_phone" />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <label>Mensaje</label>
                                        <textarea className='form-text-area' name="message" />
                                        {errors.message && <p className="error-message">{errors.message}</p>}
                                        <div className="text-center">
                                            <button type="submit" className="form-button">
                                                {buttonText}
                                            </button>
                                        </div>
                                        <AnimatePresence>
                                            {emailStatus.message && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: -10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: -10 }}
                                                    className={emailStatus.success ? "send-message" : "error-message"}
                                                >
                                                    {emailStatus.message}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </Col>
                                </Row>
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Contact;
