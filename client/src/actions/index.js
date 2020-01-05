import axios from 'axios';
import {FETCH_USER} from './types';

export const fetchUser=()=>{
    return async (dispatch)=>{
        const response=await axios.get("/api/currentUser");
        dispatch({
            type:FETCH_USER,
            payload:response.data
        });
    }
}

export const handleStripeToken=(token)=>{
    return async (dispatch)=>{
        const response=await axios.post('/api/stripe',token);
        console.log("handleStripeToken Action:",response);
        dispatch({
            type:FETCH_USER,
            payload:response.data
        })
    }
}