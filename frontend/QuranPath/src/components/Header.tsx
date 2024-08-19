import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setLogin } from '../redux/slices/AuthSlice';
import NavButtons from './NavButtons';
import { showToast } from './Toast';
import { RootState } from '../redux/store';

const Header = () => {
    const navigate = useNavigate();
    const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
    const isAdmin = useSelector((state: RootState) => state.auth.isAdmin);
    const dispatch = useDispatch();
    const [isOpen, setIsOpen] = useState<boolean>(false);

    useEffect(() => {
    }, [isLoggedIn, isAdmin]);

    const toggleNavbar = () => {
        setIsOpen(prev => !prev);
    };

    const handleLogOut = () => {
        localStorage.clear();
        dispatch(setLogin(false));
        showToast("Başarıyla çıkış yapıldı");
        navigate("/");
    };

    return (
        <>
            <div className='flex flex-row'>
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
                                <div className='md:hidden flex'>
                                    <MenuIcon onClick={toggleNavbar} />
                                </div>
                            </IconButton>
                        </div>
                        {/* Navbar items: Hidden on mobile unless the menu is open */}
                        <div className={`hidden md:flex flex-row gap-3 sm:gap-8 ${isOpen && 'hidden md:flex'}`}>
                            <NavButtons onClick={() => navigate("/")} name='Ana Sayfa' />
                            <NavButtons onClick={() => navigate("/about-us")} name='Hakkımızda' />
                            {isLoggedIn ? (
                                <>
                                    <NavButtons onClick={handleLogOut} name='Çıkış Yap' />
                                    {isAdmin && (
                                        <NavButtons onClick={() => navigate("/user-list")} name='Kullanıcı Listesi' />
                                    )}
                                </>
                            ) : (
                                <>
                                    <NavButtons onClick={() => navigate("/login")} name='Giriş Yap' />
                                    <NavButtons onClick={() => navigate("/register")} name='Kayıt Ol' />
                                </>
                            )}
                        </div>
                    </Toolbar>
                </AppBar>
            </div>
            {/* Mobile menu */}
            {isOpen && (
                <div className='flex sm:hidden flex-col gap-3 text-white justify-center items-center bg-gradient-to-r from-green-300 to-green-900 py-3'>
                    <div className='rounded-sm flex flex-col gap-3 items-center text-center justify-center'>
                        <NavButtons onClick={() => navigate("/")} name='Ana Sayfa' />
                        <NavButtons onClick={() => navigate("/about-us")} name='Hakkımızda' />
                        {isLoggedIn ? (
                            <>
                                <NavButtons onClick={handleLogOut} name='Çıkış Yap' />
                                {isAdmin && (
                                    <NavButtons onClick={() => navigate("/user-list")} name='Kullanıcı Listesi' />
                                )}
                            </>
                        ) : (
                            <>
                                <NavButtons onClick={() => navigate("/login")} name='Giriş Yap' />
                                <NavButtons onClick={() => navigate("/register")} name='Kayıt Ol' />
                            </>
                        )}
                    </div>
                </div>
            )}
        </>
    );
};

export default Header;
