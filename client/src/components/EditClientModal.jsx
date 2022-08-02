import { useMutation } from '@apollo/client';
import React, { useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import { UPDATE_CLIENT } from '../mutations/clientMutations';
import { GET_CLIENTS } from '../queries/clientQueries';

export default function EditClientModal({ client }) {
  const [name, setName] = useState(client.name);
  const [email, setEmail] = useState(client.email);
  const [phone, setPhone] = useState(client.phone);

  const [updateClient] = useMutation(UPDATE_CLIENT, {
    variables: { id: client.id, name, email, phone },
    refetchQueries: [{ query: GET_CLIENTS, variables: { id: client.id } }],
  });

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !phone) return alert('Please fill out all fields.');

    updateClient(name, email, phone);
  };

  return (
    <>
      <button
        type='button'
        className='btn  btn-danger btn-sm'
        data-bs-toggle='modal'
        data-bs-target='#editClientModal'
      >
        <FaEdit className='icon' />
      </button>

      <div
        className='modal fade'
        id='editClientModal'
        tabIndex='-1'
        aria-labelledby='editClientModalLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title' id='editClientModalLabel'>
                Update Client
              </h5>
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
              ></button>
            </div>
            <div className='modal-body'>
              <form onSubmit={handleOnSubmit}>
                <div className='mb-3'>
                  <label htmlFor='name' className='form-label'>
                    Name
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className='mb-3'>
                  <label htmlFor='email' className='form-label'>
                    E-mail
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className='mb-3'>
                  <label htmlFor='phone' className='form-label'>
                    Phone
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='phone'
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <button
                  type='submit'
                  data-bs-dismiss='modal'
                  className='btn btn-secondary'
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
