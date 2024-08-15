import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setLogin } from '../redux/slices/AuthSlice';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import NavButtons from './NavButtons';
import { showToast } from './Toast';

const Header = () => {
    const navigate = useNavigate();
    const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
    const dispatch = useDispatch();
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };
    const handleLogOut = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("role");
        dispatch(setLogin(false));
        showToast("Başarıyla çıkış yapıldı");

    };

    return (
        <>
            <div className='flex flex-row '>
                <AppBar sx={{
                    background: 'linear-gradient(to right, #a0f1a1, #064e3b)',
                }} position="static">
                    <Toolbar className='flex flex-row justify-between items-center'>
                        <div className='flex flex-row gap-3 items-center justify-center'>
                            <img src="../../images/eminlogo.png" onClick={() => navigate("/")} className='h-6 mr-3 cursor-pointer' />
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                sx={{ mr: 2 }}>
                                <div className=' md:hidden flex'>
                                    <MenuIcon onClick={toggleNavbar} />
                                </div>
                            </IconButton>

                        </div>
                        {
                            !isLoggedIn ?
                                <div className='sm:flex md:flex  flex-row gap-3 sm:gap-8 hidden '>
                                    <NavButtons onClick={() => navigate("/")} name='Ana Sayfa' />
                                    <NavButtons onClick={() => navigate("/about-us")} name='Hakkımızda' />
                                    <NavButtons onClick={() => navigate("/login")} name='Giriş Yap' />
                                    <NavButtons onClick={() => navigate("/register")} name='Kayıt Ol' />
                                </div>
                                :
                                <div className='sm:flex md:flex flex-row gap-3 sm:gap-8 hidden '>
                                    <NavButtons onClick={() => navigate("/")} name='Ana Sayfa' />
                                    <NavButtons onClick={() => navigate("/about-us")} name='Hakkımızda' />
                                    <NavButtons onClick={handleLogOut} name='Çıkış Yap' />
                                </div>
                        }
                    </Toolbar>
                </AppBar>
            </div>
            {
                isOpen && (

                    isLoggedIn ?
                        <div className='flex  sm:hidden  flex-col gap-3 text-white  justify-center items-center bg-gradient-to-r from-green-300 to-green-900 py-3  ' >
                            <div className='rounded-sm flex flex-col gap-3 items-center text-center justify-center'>
                                <div className="border-b border-green-300">
                                    <NavButtons onClick={() => navigate("/")} name='Ana Sayfa' />
                                </div>
                                <div className="border-b border-green-300">
                                    <NavButtons onClick={() => navigate("/about-us")} name='Hakkımızda' />
                                </div>
                                <div className="border-b border-green-300">
                                    <NavButtons onClick={handleLogOut} name='Çıkış Yap' />
                                </div>
                            </div>
                        </div>
                        :
                        (<div className='flex  sm:hidden flex-col gap-3 text-white  justify-center items-center bg-gradient-to-r from-green-300 to-green-900 py-3  ' >

                            <div className='rounded-sm flex flex-col gap-3 items-center text-center justify-center'>
                                <div className="border-b border-green-300">
                                    <NavButtons onClick={() => navigate("/")} name='Ana Sayfa' />
                                </div>
                                <div className="border-b border-green-300">
                                    <NavButtons onClick={() => navigate("/about-us")} name='Hakkımızda' />
                                </div>
                                <div className="border-b border-green-300">
                                    <NavButtons onClick={() => navigate("/login")} name='Giriş Yap' />
                                </div>
                                <div className="border-b border-green-300">
                                    <NavButtons onClick={() => navigate("/register")} name='Kayıt Ol' />
                                </div>
                            </div>
                        </div>)
                )
            }
        </>
    );
};

export default Header;