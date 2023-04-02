import logo from './logo.svg';
import './App.css';
import Header from './navbar.js';
import Post from './blogpost';
import {Route, Routes} from "react-router-dom";
import Login from './login';
import Register from './register';

function App() {
  return (
    
    <Routes> 
      <Route index element={ <main>
      <Header />
      <Post />
      <Post />
      <Post />
   </main>
  }/>
  <Route path={'/login'} element={<main>
      <Header />
     <Login />
   </main>} />
  <Route path={'/register'} element={<main>
      <Header />
     <Register />
   </main>} />
    </Routes>
   
    
  );
}

export default App;
