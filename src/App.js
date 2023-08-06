import './App.css';
import { Route, Routes, Navigate} from 'react-router-dom';
import ProfileInfo from './routes/ProfileInfo'
import LoginPage from './routes/LoginPage';
import RegisterPage from './routes/RegisterPage';

function App() {
  return (
      <Routes>
        <Route path="/" Component={ <Navigate to="/login" /> }/>
        <Route path="/login" Component={LoginPage}/>
        <Route path="/register" Component={RegisterPage}/>
      </Routes>
  );
}

export default App;
