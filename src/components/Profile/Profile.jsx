import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';

function Profile() {

    const user = useSelector((store) => store.user);
    const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'FETCH_RATED', payload: { id: user.id} });
  }, []);

    return(
        <h1> {user.username}'s profile</h1>
    )
}
export default Profile