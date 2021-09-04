import { useAuthContext } from '../context/AuthContext';

const Home = () => {
  const { logout, currentUser } = useAuthContext();
  return (
    <div>
      <h1>Home</h1>
      <button disabled={currentUser ? false : true} onClick={logout}>
        Sign Out
      </button>
    </div>
  );
};

export default Home;
