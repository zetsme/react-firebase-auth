import { useState } from 'react';
import { useAuthContext } from '../context/AuthContext';
import { useHistory } from 'react-router-dom';

const initialState = {
  email: '',
  displayName: '',
  password: '',
};

const SignUp = () => {
  const history = useHistory();
  const [inputValues, setInputValues] = useState(initialState);
  const { email, displayName, password } = inputValues;

  const { register } = useAuthContext();
  const onSubmit = async (e) => {
    e.preventDefault();
    await register(email, password, displayName);
    history.push('/');
  };

  const onChange = (e) => setInputValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type='email' placeholder='Email' name='email' value={email} onChange={onChange} />
        <input
          type='text'
          placeholder='Full Name'
          name='displayName'
          value={displayName}
          onChange={onChange}
        />
        <input
          type='password'
          placeholder='Password'
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

export default SignUp;
