import logo from './logo.svg';
import './App.css';
import './Style.css';
import Header from './navbar.js';
import {Route, Routes} from "react-router-dom";
import Login from './pages/login';
import Register from './pages/register';
import Createpost from './pages/createpost';
import { UserContextProvider } from './userContext';
import Layout from './pages/layout';
import IndexPage from './pages/IndexPage';
import Postpage from './pages/postpage';
import Editpage from './pages/editpage';
function App() {
  return (
    <UserContextProvider>
    <Routes> 
    <Route path="/" element={<Layout />}>
    <Route index element={<IndexPage />} />
  <Route path={'/login'} element={<Login />}/>
  <Route path={'/register'} element={<Register />}/>
  <Route path={'/create'} element={<Createpost />} />
  <Route path="/post/:id" element={<Postpage />} />
  <Route path={'/edit/:id'} element={<Editpage />} />
   </Route>
   </Routes>
    </UserContextProvider>
 
    
  );
}

export default App;
