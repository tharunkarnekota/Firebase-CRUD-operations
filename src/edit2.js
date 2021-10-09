//just for my referernce

import React from 'react'

const Edit = () => {
    return (
        <div>
            <center>
                <h2 style={{"textAlign":"center"}}>Edit Form</h2><br />
                <form autoComplete="off">
                    <label>First Name:</label>
                    <input type="text" placeholder="Firstname" /><br /><br />

                    <label>Last Name:</label>
                    <input type="text" placeholder="Lastname" /><br /><br />
                    
                    <label>Email:</label>
                    <input type="text" placeholder="Email" /><br /><br />
                    
                    
                    <input type="submit" className="btn btn-success" value="Save" /><br /><br />
                    
                </form>
            </center>
        </div>
    )
}

export default Edit
