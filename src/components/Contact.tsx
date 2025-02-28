import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  gap: 150px;
  padding: 50px 100px;
  font-family: "Marhey";
  background-color: #000036;
  color: white;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 20px;
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
    width: 100%;
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
    margin-right: 40px;
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

const Contact = () => {
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
          <p>info@example.com</p> {/* Corrected email placeholder */}
        </div>
        <div>
          <h3>Address</h3>
          <p>1225 Rekai Tangwena Avenue<br />Harare, Zimbabwe</p>
        </div>
      </TextContainer>
      <FormContainer>
        <Form>
          <Label>Name</Label>
          <Input type="text" placeholder="Enter Name" required />
          <Label>Surname</Label>
          <Input type="text" placeholder="Enter Surname" required />
          <Label>Email</Label>
          <Input type="email" placeholder="Enter Email" required />
          <Label>Message</Label>
          <TextArea rows={4} placeholder="Enter Message" required />
          <Button type="submit">Submit</Button>
        </Form>
      </FormContainer>
    </Container>
  );
};

export default Contact;
