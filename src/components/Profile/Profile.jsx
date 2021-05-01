import { useState } from 'react'
import { useSelector } from 'react-redux';

function Profile() {
    const user = useSelector((store) => store.user);

    return(
        <h1> {user.username}'s profile</h1>
    )
}
export default Profile