import logo from './logo.svg';
import './index.css';
import './components/login';
import './components/Nav';
import Nav from './components/Nav.js';
import Logo from './components/Logo.js';
import Login from './components/login.js';
import ForgotPassword from './components/ForgotPassword';
import AccountForm from './components/AccountForm.js';
 

function App() {
  return (
    <div className="App">
      
      <Nav></Nav>
      <Logo></Logo>
      <Login></Login>
       
      
    </div>
  );
}

export default App;
