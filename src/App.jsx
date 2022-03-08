import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
import { mockServer } from './api/mockserver';
import AddressForm from './AddressForm';
mockServer();
export default function App() {
  const [loading, setLoading] = useState(true);
  const [address, setAddress] = useState([]);
  const [isformOpen, setIsformOpen] = useState(false);
  const getData = async () => {
    const response = await axios.get('/api/address');
    const data = await response.data.addresses;
    console.log(data, 'yhos');
    setAddress([...data]);
    setLoading(false);
  };
  const postData = async () => {
    const response = await axios.post('/api/address', { name: 'skjfshjf' });
    const res = await response;
    console.log(res, 'sfs');
  };
  return (
    <div className="display">
      <h1>Manage addresses</h1>
      <AddressForm />
      <button
        onClick={() => {
          setLoading(true);
          getData();
        }}
      >
        Get data
      </button>
      <div>
        {address.map((address) => (
          <h1>{address.name}</h1>
        ))}
      </div>
      <button
        onClick={() => {
          setLoading(true);
          postData();
        }}
      >
        post data
      </button>
    </div>
  );
}
