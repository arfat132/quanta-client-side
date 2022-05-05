import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Blogs from './Components/Blogs/Blogs';
import ManageItems from './Components/ManageItems/ManageItems';
import MyItems from './Components/MyItems/MyItems';
import SignIn from './Components/SignIn/SignIn';
import SignUp from './Components/SignUp/SignUp';
import NotFound from './Components/NotFound/NotFound';
import RequireAuth from './Components/RequiredAuth/RequiredAuth';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div>
      <Navbar></Navbar>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="about" element={<MyItems />} />
        <Route path="/manageItems" element={
        <RequireAuth>
        <ManageItems />
        </RequireAuth>
        } />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
           <Footer></Footer>
    </div>
  );
}

export default App;
