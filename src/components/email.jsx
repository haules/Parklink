import React, { useState } from "react";
import "./email.css";

const Email = () => {
  const [email, setEmail] = useState('');

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The email is: ${email}`);
  };

  return (
    <div className="mainDiv_email">
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          defaultValue={email}
          onChange={handleChange}
          placeholder="Enter your email"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Email;
