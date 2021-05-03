import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { TextField, Button } from '@material-ui/core'
import { useHistory } from 'react-router-dom';
import "./Login.css"

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  const dispatch = useDispatch();

  const login = (event) => {
    event.preventDefault();

    if (username && password) {
      dispatch({
        type: 'LOGIN',
        payload: {
          username: username,
          password: password,
        },
      });
    }
  };

  return (
  <>
    <form className="formPanel" onSubmit={login}>
      <h1>Login</h1>
      <div>
          <TextField
            label = "Username"
            required
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
      </div>
      <div>
       
          <TextField
            type="password"
            label="Password"
            required
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
      </div>
      <div>
        <Button type="submit" >Login</Button>
      </div>
    </form>
    <button
        className="registerBtn"
        onClick={() => {history.push('/register');}}>
        Need An Account?
    </button>
</>
  );
}

export default Login;
