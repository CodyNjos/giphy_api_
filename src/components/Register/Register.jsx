import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';


function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();

  const registerUser = (event) => {
    event.preventDefault();

    dispatch({
      type: 'REGISTER',
      payload: {
        username: username,
        password: password,
      },
    });
  };

  return (
    <>
    <form className="formPanel" onSubmit={registerUser}>
      <h1>Register</h1>
      <div>
          <TextField
            label="User Name"
            name="username"
            value={username}
            required
            onChange={(event) => setUsername(event.target.value)}
          />
      </div>
      <div>
          <TextField
            type="password"
            label="Password"
            value={password}
            required
            onChange={(event) => setPassword(event.target.value)}
          />

        <br />
      </div>
      <div>
        <Button type="submit" >Register</Button>
      </div>
    </form>
    <button
        className="registerBtn"
        onClick={() => {history.push('/login');}}>
        Already Have An Account?
    </button>
    </>
  );
}

export default Register;
