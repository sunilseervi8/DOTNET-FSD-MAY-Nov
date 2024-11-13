import './App.css';
import NavBar from './components/header/header';
import RegistrationForm from './components/LoginRegistration/registration'; 
import LoginForm from './components/LoginRegistration/login';
import { Routes, Route ,Outlet} from 'react-router-dom';
import Profile from './components/profile-section/profile';


function App() {
  return (
    <div className="App">
     <NavBar/>
     <Outlet/>
      <Routes>
      <Route path="" element={<RegistrationForm />}> </Route>

        <Route path="registration" element={<RegistrationForm />}>Route  </Route>
        <Route path="/login" element={<LoginForm />}> </Route>
        <Route path="/Profile" element={<Profile />}> </Route>

      </Routes>
     {/* <RegistrationForm/> */}
     {/* <LoginForm/> */}
    </div>
  );
}

export default App;
