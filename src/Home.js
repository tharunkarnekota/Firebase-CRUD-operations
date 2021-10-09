import React,{useState,useEffect} from 'react'
import { useHistory } from 'react-router'
import firebaseDB from './firebase'

const Home = () => {
    const history = useHistory();
    const [data,setData] = useState({
        firstname : "",
        lastname : "",
        email : "",
    })

    const {firstname,lastname,email} = data
    const changeHandler = e => {
        setData({...data,[e.target.name]:e.target.value})
    }
    const submitHandler = async (e) =>{
        e.preventDefault();
        await firebaseDB.child('register').push(
         data,
        err =>{
            if (err){
                console.log(err);
            }
            else{
                alert("Data added")
            }
        }
        )
        setData({
            firstname:"",
            lastname:"",
            email:"",
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
    
    const [getdata,setGetdata] = useState({});
    useEffect(()=>{
        firebaseDB.child('register').on('value',details =>{
            console.log(details.val());
            setGetdata(details.val());
        })
    },[])

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
                    <input type="email" placeholder="Email" name="email" value={email} onChange={changeHandler} /><br />
                    
                    
                    <input type="submit" className="btn btn-success" value="Save" /><br /><br />
                    
                </form>
                

                <div>
                    {getdata &&
                    Object.keys(getdata).map(key =>
                        <div className="border" style={{"width":"38rem",textAlign:"left",margin:"5px"}}>
                            <p>&nbsp;&nbsp;<b> firstname : </b>{getdata[key].firstname}</p>
                            <p>&nbsp;&nbsp;<b> Lastname :  </b>{getdata[key].lastname}</p>
                            <p>&nbsp;&nbsp;<b> Email :     </b>{getdata[key].email}</p>
                        &nbsp;<button className="btn btn-success" onClick={()=> history.push(`/edit?firstname=${getdata[key].firstname}&lastname=${getdata[key].lastname}&email=${getdata[key].email}&key=${key}`)}>Update</button>&nbsp;&nbsp;
                            <button className="btn btn-danger"  onClick={()=> deleteHandler(key)}   >Delete</button><br /><br />
                        </div>)
                    }
                </div>
                <br /><br />
                </center>
        </div>
    )
}

export default Home
