import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import PageHeader from './components/PageHeader';

const App = () => {
  return (
    <BrowserRouter>
      <PageHeader />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/signup' component={SignUp} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
