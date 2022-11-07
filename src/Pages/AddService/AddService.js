import React from 'react';
import { useForm } from 'react-hook-form';

const AddService = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
        
fetch('http://localhost:5000/service', {
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
    };
    return (
        <div className='w-50 mx-auto'>
            <h3>Please add a service</h3>
           
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
      <input className='mb-2'placeholder='Name'  {...register("name", { required: true, maxLength: 20 })} />
      <input className='mb-2'placeholder='Description' {...register("description")} />
      <input className='mb-2'placeholder='Price' type="number" {...register("price")} />
      <input className='mb-2'placeholder='Photo URL' type="text" {...register("img")} />
      <input  type="submit" value="Add Service" />
    </form>
        </div>
    );
};

export default AddService;