//just for my referernce

import React,{useState,useEffect} from 'react'
import { useLocation } from 'react-router'
import firebaseDB from './firebase';

const Edit = () => {
    let query = new URLSearchParams(useLocation().search);

    const [data,setData] = useState({
        firstname : "",
        lastname : "",
        email : "",
    })
    const {firstname,lastname,email} = {...data}
    const changeHandler = e => {
        setData({...data,[e.target.name]:e.target.value})
    }

    useEffect(()=>{
        setData({...data,
        firstname:query.get('firstname'),
        lastname:query.get('lastname'),
        email:query.get('email'),
        })
    },[]);

    const submitHandler = e =>{
        e.preventDefault();
        firebaseDB.child(`register/${query.get('key')}`).set(
            data,
            err =>{
                if (err){
                    console.log(err);
                }
                else{
                    alert('data updated')
                }
            }
        )
    }
    return (
        <div>
            <center>
                <h2 style={{"textAlign":"center"}}>Edit Form</h2><br />
                <form autoComplete="off" onSubmit={submitHandler}>
                    <label>First Name:</label>
                    <input type="text" placeholder="Firstname" name={firstname} value={firstname} onChange={changeHandler} /><br />

                    <label>Last Name:</label>
                    <input type="text" placeholder="Lastname" name={lastname}  value={lastname}  onChange={changeHandler}/><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    
                    <label>Email:</label>
                    <input type="text" placeholder="Email" name={email}    value={email}     onChange={changeHandler}/><br />
                    
                    
                    <input type="submit" className="btn btn-success" value="Save" /><br /><br />
                    
                </form>
            </center>
        </div>
    )
}

export default Edit
