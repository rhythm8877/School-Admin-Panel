import React, { useState } from 'react';
import "../styles/RegistrationForm.css";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    schoolName: '',
    district: '',
    category: '',
    udise: '',
    ebrc: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="container">
      <div className="form-title">School Registration Form</div>
      <div className="form-wrapper">
        <form onSubmit={handleSubmit} className="registration-form">
          <div className="form-field">
            <label>School Name <span className="required">*</span></label>
            <input
              type="text"
              name="schoolName"
              value={formData.schoolName}
              onChange={handleChange}
              placeholder="Enter school name"
              required
            />
          </div>

          <div className="form-field">
            <label>District <span className="required">*</span></label>
            <select
              name="district"
              value={formData.district}
              onChange={handleChange}
              required
            >
              <option value="">Select District</option>
              <option value="Chümoukedima">Chümoukedima</option>
              <option value="Dimapur">Dimapur</option>
              <option value="Kiphire">Kiphire</option>
              <option value="Kohima">Kohima</option>
              <option value="Longleng">Longleng</option>
              <option value="Meluri">Meluri</option>
              <option value="Mokokchung">Mokokchung</option>
              <option value="Mon">Mon</option>
              <option value="Niuland">Niuland</option>
              <option value="Noklak">Noklak</option>
              <option value="Peren">Peren</option>
              <option value="Phek">Phek</option>
              <option value="Shamator">Shamator</option>
              <option value="Tuensang">Tuensang</option>
              <option value="Tseminyü">Tseminyü</option>
              <option value="Wokha">Wokha</option>
              <option value="Zünheboto">Zünheboto</option>
            </select>
          </div>

          <div className="form-field">
            <label>Category of School <span className="required">*</span></label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
            >
              <option value="">Select Category</option>
              <option value="Elementary">Elementary</option>
              <option value="Secondary">Secondary</option>
              <option value="Higher Secondary">Higher Secondary</option>
              <option value="PM Shri">PM Shri</option>
              <option value="KGBV-IV">KGBV-IV</option>
              <option value="NSCBAV">NSCBAV</option>
              <option value="DA JGUA">DA JGUA</option>
            </select>
          </div>

          <div className="form-field">
            <label>UDISE (11 digits) <span className="required">*</span></label>
            <input
              type="text"
              name="udise"
              value={formData.udise}
              onChange={handleChange}
              placeholder="Enter 11-digit UDISE number"
              pattern="[0-9]{11}"
              maxLength="11"
              required
            />
          </div>

          <div className="form-field">
            <label>eBRC <span className="required">*</span></label>
            <input
              type="text"
              name="ebrc"
              value={formData.ebrc}
              onChange={handleChange}
              placeholder="Enter eBRC"
              required
            />
          </div>

          <div className="form-actions">
            <button type="submit" className="submit-btn">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm; 