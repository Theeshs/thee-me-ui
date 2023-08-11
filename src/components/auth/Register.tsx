import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  signup,
  selectRegisterUserData,
  selectLoading,
  selectError,
} from '../../store/authSlice';
// import { Link, Redirect } from 'react-router-dom';

const Register: React.FC = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const { username, email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    debugger;
    e.preventDefault();
    console.log(formData);
    dispatch(signup(formData));
  };

  return (
    <>
      <div className='col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch'>
        <form
          action='forms/contact.php'
          method='post'
          role='form'
          className='php-email-form'
        >
          <div className='row'>
            <div className='form-group col-lg-6'>
              <label htmlFor='name'>User Name</label>
              <input
                type='text'
                name='username'
                className='form-control'
                id='name'
                required
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className='form-group col-lg-6'>
              <label htmlFor='name'>Your Email</label>
              <input
                type='email'
                className='form-control'
                name='email'
                id='email'
                required
                onChange={(e) => onChange(e)}
              />
            </div>
          </div>
          <div className='form-group'>
            <label htmlFor='name'>Password</label>
            <input
              type='password'
              className='form-control'
              name='password'
              id='password'
              required
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className='text-center'>
            <button onClick={(e) => onSubmit(e)} type='submit'>
              Send Message
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
