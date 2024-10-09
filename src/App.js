import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [formData, setFormData] = useState({
    'lead_token': '',
    'caller_id': '',
    'traffic_source_id': '',
    'email': '',
    'first_name': '',
    'last_name': '',
    'state': '',
    'zip': '',
    'sub_id': '',
    'trusted_form_cert_url': '',
    'trusted_form_cert': '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return; // Prevent multiple submissions

    setIsSubmitting(true);
    try {
      // Send data to your API using POST method
      const apiResponse = await axios.post('/api/leads', formData);
      console.log('API Response:', apiResponse.data);

      // Send data to Google Sheets using POST method
      const googleScriptUrl = '/google-script/exce';
      const googleResponse = await axios.post(googleScriptUrl, formData);
      console.log('Google Sheets Response:', googleResponse.data);

      alert('Form submitted successfully!');
    } catch (error) {
      console.error('Error submitting the form:', error);
      alert('There was an error submitting the form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-lg bg-white p-8 border-2 border-red-300 rounded-lg shadow-lg">
        <h2 className="text-center text-2xl font-bold mb-6">DropZone</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-semibold">Lead Token:</label>
            <input 
              type="text" 
              name="lead_token"
              value={formData.lead_token}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div>
            <label className="block font-semibold">Traffic Source Id:</label>
            <input 
              type="text" 
              name="traffic_source_id"
              value={formData.traffic_source_id}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div>
            <label className="block font-semibold">First Name:</label>
            <input 
              type="text" 
              name="first_name"
              value={formData.first_name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div>
            <label className="block font-semibold">Last Name:</label>
            <input 
              type="text" 
              name="last_name"
              value={formData.last_name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div>
            <label className="block font-semibold">Caller ID:</label>
            <input 
              type="text" 
              name="caller_id"
              value={formData.caller_id}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="block font-semibold">Email:</label>
            <input 
              type="text" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="block font-semibold">State:</label>
            <input 
              type="text" 
              name="state"
              value={formData.state}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="block font-semibold">Zip Code:</label>
            <input 
              type="text" 
              name="zip"
              value={formData.zip}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="block font-semibold">SubId:</label>
            <input 
              type="text" 
              name="sub_id"
              value={formData.sub_id}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="block font-semibold">Trusted Forms URL:</label>
            <input 
              type="text" 
              name="trusted_form_cert_url"
              value={formData.trusted_form_cert_url}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="block font-semibold">Trusted Form Certificate:</label>
            <input 
              type="text" 
              name="trusted_form_cert"
              value={formData.trusted_form_cert}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="text-center">
            <button 
              type="submit"
              className="w-full bg-blue-300 text-white p-2 rounded hover:bg-blue-600"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default App;