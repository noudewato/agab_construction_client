import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Form = () => {
  const [formData, setFormData] = useState({
    noms: '',
    prenoms: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    emailjs.send(
      'YOUR_SERVICE_ID',     // Replace with your service ID
      'YOUR_TEMPLATE_ID',    // Replace with your template ID
      formData,
      'YOUR_USER_ID'         // Replace with your user ID
    ).then((response) => {
      console.log('SUCCESS!', response.status, response.text);
    }).catch((err) => {
      console.error('FAILED...', err);
    });
  };

  return (
    <form onSubmit={handleSubmit} className="pt-10 pb-8">
      <div className="flex-col gap-4 flex-align-center sm:flex-row">
        <div className="flex-1 w-full">
          <p>Noms</p>
          <input 
            type="text" 
            name="noms" 
            value={formData.noms} 
            onChange={handleChange} 
            className="w-full input" 
            placeholder="Noms.." 
          />
        </div>
        <div className="flex-1 w-full">
          <p>Prenoms</p>
          <input 
            type="text" 
            name="prenoms" 
            value={formData.prenoms} 
            onChange={handleChange} 
            className="w-full input" 
            placeholder="Prenoms.." 
          />
        </div>
      </div>
      <div className="mt-4">
        <p>Address Email</p>
        <input 
          type="email" 
          name="email" 
          value={formData.email} 
          onChange={handleChange} 
          className="w-full input" 
          placeholder="Address Email.." 
        />
      </div>
      <div className="mt-4">
        <p>Message</p>
        <textarea 
          rows={4} 
          name="message" 
          value={formData.message} 
          onChange={handleChange} 
          className="w-full input" 
          placeholder="Message.." 
        ></textarea>
      </div>
      <div className="mt-4 flex-center-center">
        <button type="submit" className="btn btn-primary">Message</button>
      </div>
    </form>
  );
};

export default Form;
