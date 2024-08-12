import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import Register from '../pages/Register';
import Login from '../pages/Login';
import About from '../pages/About';
import { useSelector } from 'react-redux';


const RouterConfig = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const isLoggedIn = useSelector((state: any) => state.auth.isLoggedIn);
    console.log("deneme", isLoggedIn);
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about-us" element={isLoggedIn ? <About /> : <Login />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default RouterConfig;