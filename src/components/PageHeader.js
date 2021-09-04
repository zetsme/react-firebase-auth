import { Link } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';

const PageHeader = () => {
  const { currentUser } = useAuthContext();
  return (
    <div>
      {currentUser ? (
        <div>
          {currentUser.displayName} - {currentUser.email}
        </div>
      ) : (
        <div>
          <Link to='/login'>Login</Link>
          <Link to='/signup'>Sign Up</Link>
        </div>
      )}
    </div>
  );
};

export default PageHeader;
