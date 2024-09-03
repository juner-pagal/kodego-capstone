import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AppURL from '../../api/AppURL';

const AddServiceDetailsNew = () => {
  const [data, setData] = useState([]);
  const [selectedID, setSelectedID] = useState('')
  const [selectedOption, setSelectedOption] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  useEffect(() => {
    const fetchOptions = async () => {
      fetch(AppURL.AddServices)
            .then(res=>{ return res.json()})
            .then(response=>{ 
                console.log(response.services);
               setData(response.services);
                console.log(data);
            })
    };

    fetchOptions();
  }, []);

  const handleOptionChange = (event) => {
    setSelectedOption(data.services_name);
    event.preventDefault(); 
  };

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const sampleSubmit = (event) => {
    alert(selectedID + selectedOption + formData.name + formData.email + formData.message)
  }

  
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.post('/api/submit', {
        selectedID: selectedID,
        option_id: selectedOption,
        name: formData.name,
        email: formData.email,
        message: formData.message,
      });

      // Reset the form after successful submission
      setFormData({
        name: '',
        email: '',
        message: '',
      });
      setSelectedOption('');
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <form onSubmit={sampleSubmit}>
      <label htmlFor="option">Select an option:</label>
      <select id="option" value={selectedOption} onChange={handleOptionChange}>
        <option value="">Select an option</option>
        {data.map((option) => (
          <option key={option.id} value={option.id} onClick={(e)=>setSelectedID(e.target.value)}>
            {option.services_name} 
          </option>
        ))}
      </select>

      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleInputChange}
        required
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleInputChange}
        required
      />

      <textarea
        name="message"
        placeholder="Message"
        value={formData.message}
        onChange={handleInputChange}
        required
      ></textarea>

      <button type="submit">Submit</button>
    </form>
  );
};

export default AddServiceDetailsNew;