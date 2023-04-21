import logo from './logo.svg';
import './App.css';
import Header from './navbar.js';
import Post from './blogpost';
import {Route, Routes} from "react-router-dom";
import Login from './login';
import Register from './register';
import Createpost from './pages/createpost';
import { UserContextProvider } from './userContext';

function App() {
  return (
    <UserContextProvider>
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
    
    <Route path={'/create'} element={<main>
      <Header />
     <Createpost />
   </main>} />
   </Routes>
    </UserContextProvider>
 
    
  );
}

export default App;
