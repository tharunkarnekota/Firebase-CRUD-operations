//just for my referernce

import React,{useState,useEffect} from 'react'
import firebaseDB from './firebase'

const Home = () => {
    const [data,setData] = useState({
        firstname : "",
        lastname : "",
        email : "",
    })

    const [getdata,setGetdata] = useState({});
    useEffect(()=>{
        firebaseDB.child('register').on('value',details =>{
            console.log(details.val());
            setGetdata(details.val());
        })
    },[])

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

    const deleteHandler = key =>{
        firebaseDB.child(`register/${key}`).remove(
            err =>{
                if (err){
                    console.log(err)
                }
            }
        )
    }
    
    return (
        <div>
            <center>
                <h2 >Registration Form</h2><br />
                <form autoComplete="off" onSubmit={submitHandler}>
                    <label>First Name:</label>
                    <input type="text" placeholder="Firstname" name="firstname" value={firstname} onChange={changeHandler}/><br />

                    <label>Last Name:</label>
                    <input type="text" placeholder="Lastname" name="lastname" value={lastname} onChange={changeHandler} /><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    
                    <label>Email:</label>
                    <input type="text" placeholder="Email" name="email" value={email} onChange={changeHandler} /><br />
                    
                    
                    <input type="submit" className="btn btn-success" value="Save" /><br /><br />
                    
                </form>
                

                <div>
                    {getdata &&
                    Object.keys(getdata).map(key =>
                        <div className="border" style={{"width":"38rem",textAlign:"left",margin:"5px"}}>
                            <p>&nbsp;&nbsp;<b> firstname : </b>{getdata[key].data.firstname}</p>
                            <p>&nbsp;&nbsp;<b> Lastname :  </b>{getdata[key].data.lastname}</p>
                            <p>&nbsp;&nbsp;<b> Email :     </b>{getdata[key].data.email}</p>
                            <button className="btn btn-success">Update</button>&nbsp;&nbsp;
                            <button className="btn btn-danger" onClick={()=> deleteHandler(key)}>Delete</button><br /><br />
                        </div>)
                    }
                </div>
                <br /><br />
                </center>
        </div>
    )
}

export default Home
