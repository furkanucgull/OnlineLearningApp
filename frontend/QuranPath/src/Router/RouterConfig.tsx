import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import Register from '../pages/Register';
import Login from '../pages/Login';
import About from '../pages/About';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import UserList from '../pages/UserList';
import UserUpdate from '../pages/UserUpdate';



const RouterConfig = () => {

    const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
    const isAdmin = useSelector((state: RootState) => state.auth.isAdmin);
    //console.log("admin mi", isAdmin);
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about-us" element={isLoggedIn ? <About /> : <Login />} />
            <Route path="/user-list" element={isAdmin ? <UserList /> : <Login />} />
            <Route path="/user-update/:id" element={isAdmin ? <UserUpdate /> : <Login />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default RouterConfig;