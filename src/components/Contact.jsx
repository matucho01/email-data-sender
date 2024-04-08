'use client' // This means that the file will be executed on the client side

import React, { useState } from 'react';
import { toast } from 'react-hot-toast';

const Contact = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
  });

  const sendEmail = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.status === 200) {
      setData({
        firstName: "",
        lastName: "",
      })
      toast.success(`Hey ${data.firstName}! Your email has been sent!`);
    }
  }

  return (
    <form onSubmit={sendEmail}>
      <input
        type="text"
        name="firstName"
        value={data.firstName}
        onChange={e => setData({ ...data, firstName: e.target.value })}
        placeholder="First Name"
        required
      />
      <input
        type="text"
        name="lastName"
        value={data.lastName}
        onChange={e => setData({ ...data, lastName: e.target.value })}
        placeholder="Last Name"
        required
      />
      <button type="submit">Send</button>
    </form>
  );
}

export default Contact