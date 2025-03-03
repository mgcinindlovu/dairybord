import React, { useState } from 'react';
import styled from 'styled-components';
import emailjs from 'emailjs-com';

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  gap: 150px;
  padding: 50px 100px;
  font-family: "Marhey";
  background-color: #000036;
  color: white;
  text-align: left;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 20px 0;
    gap: 30px; /* Reduced gap for better spacing on smaller screens */
  }
  
`;

const TextContainer = styled.div`
  flex: 1;
  padding: 20px;

  h1 {
    font-size: 30px;
    font-weight: 400; /* Corrected the font-weight */
  }
  
  h3 {
    font-size: 16px;
    font-weight: 300;
  }

  @media (max-width: 768px) {
    h1 {
      margin-top: 30px;
      font-size: 24px;
    }
    
    h3 {
      font-size: 14px;
    }
    
    p {
      font-size: 14px; /* Added font size for paragraph on small screens */
    }
  }
`;

const FormContainer = styled.div`
  flex: 1;
  padding: 20px;

  @media (max-width: 768px) {
    
    display: flex; /* Ensures the form container takes full width */
    justify-content: center; /* Centering the form */
  }
`;

const Form = styled.form`
  width: 250px;
  display: flex;
  flex-direction: column;
  font-family: "Marhey";
  background: white;
  padding: 20px;
  border-radius: 10px;

  @media (max-width: 768px) {
   
    width: 70%; /* Adjusted to use a percentage for smaller screens */
    max-width: 400px; /* Optional: set a max width for the form */
  }
`;

const Input = styled.input`
  margin-bottom: 15px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-family: "Marhey";
  color: #000000;

  @media (max-width: 768px) {
    padding: 8px;
  }
`;

const TextArea = styled.textarea`
  margin-bottom: 15px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;

  @media (max-width: 768px) {
    padding: 8px;
  }
`;

const Button = styled.button`
  padding: 10px;
  background-color: #283e7e;
  color: white;
  border: none;
  border-radius: 5px;
  font-family: "Marhey";
  cursor: pointer;

  &:hover {
    background-color: #1e2a63;
  }

  @media (max-width: 768px) {
    padding: 8px;
  }
`;

const Label = styled.label`
  font-size: 16px;
  font-weight: 400;
  color: #333;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const Popup = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #283e7e;
  color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  z-index: 1000;
`;

const Contact = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs.sendForm('service_c52zigd', 'template_wdse3og', e.currentTarget, '5zRvzvVjahhyLuZ7X')
      .then((result) => {
        console.log(result.text);
        setIsPopupVisible(true);
      }, (error) => {
        console.log(error.text);
      });

    e.currentTarget.reset();
  };

  const handleClosePopup = () => {
    setIsPopupVisible(false);
  };

  return (
    <Container>
      <TextContainer>
        <h1>Contact Us!</h1>
        <p>
          Your feedback matters to us; we strive to make our products the best for you.
        </p>
        <div>
          <h3>Phone</h3>
          <p>+263-242-779051-9</p>
        </div>
        <div>
          <h3>Email</h3>
          <p>feedback@dairibord.co.zw</p> {/* Corrected email placeholder */}
        </div>
        <div>
          <h3>Address</h3>
          <p>1225 Rekai Tangwena Avenue<br />Harare, Zimbabwe</p>
        </div>
      </TextContainer>
      <FormContainer>
        <Form onSubmit={handleSubmit}>
          <Label>Name</Label>
          <Input type="text" name="name" placeholder="Enter Name" required />
          <Label>Surname</Label>
          <Input type="text" name="surname" placeholder="Enter Surname" required />
          <Label>Email</Label>
          <Input type="email" name="email" placeholder="Enter Email" required />
          <Label>Message</Label>
          <TextArea name="message" rows={4} placeholder="Enter Message" required />
          <Button type="submit">Submit</Button>
        </Form>
      </FormContainer>
      {isPopupVisible && (
        <Popup>
          <p>Message Sent!</p>
          <Button onClick={handleClosePopup}>Close</Button>
        </Popup>
      )}
    </Container>
  );
};

export default Contact;