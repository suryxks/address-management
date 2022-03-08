import React, { useState } from 'react';
import './App.css';
export default function AddressForm() {
  const [isOpen, setisOpen] = useState(false);
  const [formDetails, setFormDetails] = useState({
    name: '',
    mobile: '',
    pincode: '',
    localitiy: '',
    address: '',
    city: '',
    state: '',
  });
  const { name, mobile, pincode, localitiy, address, city, state } =
    formDetails;
  return (
    <div>
      {isOpen === false ? (
        <button
          className="active link-btn blue-outlined"
          onClick={() => {
            setisOpen(true);
          }}
        >
          +Add new Address
        </button>
      ) : (
        <form className="address-form">
          <input
            placeholder="Name"
            required="true"
            value={name}
            onChange={(e) => {
              setFormDetails((prev) => ({ ...prev, name: e.target.value }));
            }}
          />
          <input
            placeholder="Mobile number"
            required="true"
            value={mobile}
            onChange={(e) => {
              setFormDetails((prev) => ({ ...prev, mobile: e.target.value }));
            }}
          />
          <input
            placeholder="Pincode"
            required="true"
            value={pincode}
            onChange={(e) => {
              setFormDetails((prev) => ({ ...prev, pincode: e.target.value }));
            }}
          />
          <input
            placeholder="Locality"
            required="true"
            value={localitiy}
            onChange={(e) => {
              setFormDetails((prev) => ({
                ...prev,
                localitiy: e.target.value,
              }));
            }}
          />
          <textarea
            className="address"
            placeholder="Address"
            required="true"
            value={address}
            onChange={(e) => {
              setFormDetails((prev) => ({ ...prev, address: e.target.value }));
            }}
          />
          <input
            placeholder="city/district/town"
            required="true"
            value={city}
            onChange={(e) => {
              setFormDetails((prev) => ({ ...prev, city: e.target.value }));
            }}
          />
          <input
            placeholder="state"
            required="true"
            value={state}
            onChange={(e) => {
              setFormDetails((prev) => ({ ...prev, state: e.target.value }));
            }}
          />
          <div className="buttons">
            <button className="btn-filled cta">Save</button>
            <button
              className="link-btn blue-outlined"
              onClick={(e) => {
                e.preventDefault();
                setisOpen(false);
              }}
            >
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
