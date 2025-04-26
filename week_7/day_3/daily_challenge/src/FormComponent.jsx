import React from 'react';

const FormComponent = ({ formData, handleChange }) => {
  return (
    <form>
      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        value={formData.firstName}
        onChange={handleChange}
      /><br /><br />

      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        value={formData.lastName}
        onChange={handleChange}
      /><br /><br />

      <input
        type="number"
        name="age"
        placeholder="Age"
        value={formData.age}
        onChange={handleChange}
      /><br /><br />

      <label>
        <input
          type="radio"
          name="gender"
          value="male"
          checked={formData.gender === 'male'}
          onChange={handleChange}
        /> Male
      </label>
      <label>
        <input
          type="radio"
          name="gender"
          value="female"
          checked={formData.gender === 'female'}
          onChange={handleChange}
        /> Female
      </label><br /><br />

      <label>Select your destination:</label><br />
      <select
        name="destination"
        value={formData.destination}
        onChange={handleChange}
      >
        <option value="casablanca">Casablanca</option>
        <option value="rabat">Rabat</option>
        <option value="tanger">Tanger</option>
        <option value="marrakech">Marrakech</option>
      </select><br /><br />

      <label>Dietary restrictions:</label><br />
      <label>
        <input
          type="checkbox"
          name="nutsFree"
          checked={formData.diet.nutsFree}
          onChange={handleChange}
        /> Nuts free
      </label><br />
      <label>
        <input
          type="checkbox"
          name="lactoseFree"
          checked={formData.diet.lactoseFree}
          onChange={handleChange}
        /> Lactose free
      </label><br />
      <label>
        <input
          type="checkbox"
          name="vegan"
          checked={formData.diet.vegan}
          onChange={handleChange}
        /> Vegan
      </label><br /><br />

      <button type="submit">Submit</button>

      <h3>Entered Information:</h3>
      <p><strong>First Name:</strong> {formData.firstName}</p>
      <p><strong>Last Name:</strong> {formData.lastName}</p>
      <p><strong>Age:</strong> {formData.age}</p>
      <p><strong>Gender:</strong> {formData.gender}</p>
      <p><strong>Destination:</strong> {formData.destination}</p>
      <p><strong>Dietary Restrictions:</strong></p>
      <ul>
        {formData.diet.nutsFree && <li>Nuts free</li>}
        {formData.diet.lactoseFree && <li>Lactose free</li>}
        {formData.diet.vegan && <li>Vegan</li>}
      </ul>
    </form>
  );
};

export default FormComponent;
