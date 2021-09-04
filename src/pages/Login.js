import { useState } from 'react';
import { useAuthContext } from '../context/AuthContext';
import { useHistory } from 'react-router-dom';

const initialState = { email: '', password: '' };

const Login = () => {
  const history = useHistory();
  const [inputValues, setInputValues] = useState(initialState);
  const { email, password } = inputValues;
  const onSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
    history.push('/');
  };

  const { login } = useAuthContext();

  const onChange = (e) => setInputValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type='email' placeholder='email' name='email' value={email} onChange={onChange} />
        <input
          type='password'
          placeholder='password'
          autoComplete='off'
          name='password'
          value={password}
          onChange={onChange}
        />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default Login;
