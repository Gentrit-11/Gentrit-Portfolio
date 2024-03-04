import React, { useState } from 'react';
import "./Contact.css";
import { useNavigate } from 'react-router-dom';
import Modal from '../Modal/Modal';
import axios from 'axios';

const Contact = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({});

  const [values, setValues] = useState({
    name:'',
    email:'',
    subject:'',
    message:''
  });
  const navigate = useNavigate();

  // Define the closeModal function at the component level
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleinput = (event) => {
    setValues(prev => ({...prev, [event.target.name]: event.target.value }));
    console.log(event.target.value);
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!values.name || !values.email || !values.subject) {
      setModalContent({
        title: 'Error!',
        isError: true,
      }
      
      );
      setIsModalOpen(true);
    } else {
      axios.post('http://localhost:8082/contactus', values)
        .then(res => {
          navigate('/');
          setModalContent({
            title: 'Success!',
            message: 'Data has been sent successfully. Thank you! we will get in touch',
            isError: false,
          });
          setIsModalOpen(true);
        })
        .catch(err => console.log(err));
    }
    
  };
  
  
  return (
    <div className="Container">
      <div className="Wrapper">
        <h2 className="Title">Contact</h2>
        <p className="Desc">Feel free to reach out to me for any questions or opportunities!</p>
        <form className="ContactForm" id="form" onSubmit={handleSubmit}>
          <h3 className="ContactTitle">Email Me 🚀</h3>
          <input type="email" className="ContactInput" placeholder="Your Email" name="email" onChange={handleinput} />
          <input type="text" className="ContactInput" placeholder="Your Name" name="name" onChange={handleinput} />
          <input type="text" className="ContactInput" placeholder="Subject" name="subject" onChange={handleinput} />
          <textarea className="ContactInput ContactInputMessage" placeholder="Message" rows="4" name="message" onChange={handleinput}></textarea>
          <input type="submit" className="ContactButton" value="Send" />
        </form>
        <Modal isOpen={isModalOpen} closeModal={closeModal} modalContent={modalContent} />

      </div>
    </div>
  );
}

export default Contact;
