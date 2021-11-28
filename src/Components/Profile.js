import React from 'react';


function Profile(){
    return(
        <div className="profile">
            <div className="profilepic"></div>
            <h5>Monika Gellar</h5>
            <ul>
                <li>My courses</li>
                <li>Report Card</li>
                <li>Activity</li>
            </ul>
            <button className="button">Logout</button>
        </div>
    )
} 
export default Profile