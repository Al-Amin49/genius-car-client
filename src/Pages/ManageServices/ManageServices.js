import React from 'react';
import useServices from '../../hooks/useServices';

const ManageServices = () => {
    const [services, setServices]=useServices();
    const handleAddService=(id)=>{
        const proceed= window.confirm('Are you sure you want to delete');
      if (proceed){
        const url =`http://localhost:5000/service/${id}`;
        fetch(url, {
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            const remaining= services.filter(service=>service._id !== service.id)
            setServices(remaining)
            // another system
            // setServices([]);
        })
      }
    }
    return (
        <div className='mx-auto w-50'>
            <h2>THis is manage servie</h2>
            {
                services.map(service=><div key={services._id}> 
                    <h5>{service.name} <button onClick={()=>handleAddService(service._id)}>X</button></h5>
                </div>)
            }
        </div>
    );
};

export default ManageServices;