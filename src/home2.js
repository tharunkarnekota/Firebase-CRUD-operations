//just for my referernce

import React,{useState} from 'react'
import firebaseDB from './firebase'

const Home = () => {
    const [data,setData] = useState({
        firstname : "",
        lastname : "",
        email : "",
    })
    const {firstname,lastname,email} = data
    const changeHandler = e => {
        setData({...data,[e.target.name]:e.target.value})
    }
    const submitHandler = async (e) => {
        e.preventDefault();
        await firebaseDB.child('register').push({
            data,
        }).then(alert("added succesfully to db"))
        
        setData({
            firstname : "",
            lastname : "",
            email : "",
        })
    }
    
    return (
        <div>
            <center>
                <h2 >Registration Form</h2><br />
                <form autoComplete="off" onSubmit={submitHandler}>
                    <label>First Name:</label>
                    <input type="text" placeholder="Firstname" name="firstname" value={firstname} onChange={changeHandler}/><br /><br />

                    <label>Last Name:</label>
                    <input type="text" placeholder="Lastname" name="lastname" value={lastname} onChange={changeHandler} /><br /><br />
                    
                    <label>Email:</label>
                    <input type="text" placeholder="Email" name="email" value={email} onChange={changeHandler} /><br /><br />
                    
                    
                    <input type="submit" className="btn btn-success" value="Save" /><br /><br />
                    
                </form>
            </center>
        </div>
    )
}

export default Home
