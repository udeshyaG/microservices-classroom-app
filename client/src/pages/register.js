import axios from 'axios';
import React, { useState } from 'react';

const Register = () => {
  const [name, setName] = useState('');
  const [type, setType] = useState('TEACHER');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/auth/register', {
        name,
        type,
        email,
        password,
      });

      localStorage.setItem('token', response.data.token);
    } catch (error) {
      setErrorMsg('Unable to registser. Check credentials');
      console.log(error);
    }
  };

  return (
    <div className='container'>
      <h1 className='mt-3 mb-4'>Register new user</h1>

      <form onSubmit={handleSubmit}>
        <div class='mb-3'>
          <label class='form-label'>Name</label>
          <input
            type='text'
            class='form-control'
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div class='mb-3'>
          <label class='form-label'>Type</label>
          <select class='form-select' onChange={(e) => setType(e.target.value)}>
            <option value='TEACHER'>Teacher</option>
            <option value='STUDENT'>Student</option>
          </select>
        </div>
        <div class='mb-3'>
          <label class='form-label'>Email address</label>
          <input
            type='text'
            class='form-control'
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div class='mb-3'>
          <label class='form-label'>Password</label>
          <input
            type='password'
            class='form-control'
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {errorMsg && (
          <div className='alert alert-danger' role='alert'>
            {errorMsg}
          </div>
        )}

        <button type='submit' class='btn btn-primary'>
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
