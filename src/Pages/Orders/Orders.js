import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Orders = () => {
    const [user]= useAuthState(auth);
    const  [orders, setOrders]=useState([]);
    useEffect(()=>{
        const getOrders=async()=>{
            const email=user.email
            const url=`http://localhost:5000/order?email=${email}`;
            const response= await axios.get(url);
            const data=response.data;
            setOrders(data)
        }
        getOrders();
    },[user])
    return (
        <div>
            <h3>This is order {orders.length}</h3>
        </div>
    );
};

export default Orders;