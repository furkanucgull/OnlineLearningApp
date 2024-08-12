import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
//import DarkMode from './DarkMode';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setLogin } from '../redux/slices/AuthSlice';

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const toggleNavbar = () => {
        console.log(isOpen);
        setIsOpen(!isOpen);
    };
    const handleLogOut = () => {
        localStorage.removeItem("token");
        dispatch(setLogin(false));
        navigate("/login");
    };
    return (
        <>
            <div className='flex flex-row  '>
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
                        <div className='sm:flex md:flex flex-row gap-3 sm:gap-8 hidden '>
                            <Typography  >
                                <button onClick={() => navigate("/")} className='border-b-1 font-[Poppins] text-[16px] hover:text-white border-b-green-700 hover:bg-green-800 hover:shadow-2xl duration-300 rounded-xl  ' >Ana Sayfa</button>
                            </Typography>
                            <button onClick={() => navigate("/about-us")} className=' px-2  rounded-lg hover:bg-green-500 hover:shadow-2xl duration-500' >Hakkımızda</button>
                            <button onClick={() => navigate("/login")} className=' px-2  rounded-lg hover:bg-green-500 hover:shadow-2xl duration-500 '>Giriş Yap</button>
                            <button onClick={() => navigate("/register")} className=' px-2   rounded-lg hover:bg-green-500 hover:shadow-2xl duration-500 ' color="inherit">Kayıt Ol</button>
                            <button onClick={handleLogOut} className=' px-2   rounded-lg hover:bg-green-500 hover:shadow-2xl duration-500 ' color="inherit">çıkış</button>
                            {/* <DarkMode /> */}
                        </div>
                        <div className='sm:hidden'>
                            {/* <DarkMode /> */}
                        </div>
                    </Toolbar>
                </AppBar>
            </div>
            {
                isOpen && (<div className='flex  sm:hidden flex-col gap-3 text-white  justify-center items-center bg-gradient-to-r from-green-300 to-green-900 py-3  ' >
                    <div className='w-6/12 flex flex-col gap-3'>
                        <button onClick={() => navigate("/about-us")} className='border px-2 py-2 border-green-900  rounded-lg hover:bg-green-400 hover:shadow-2xl duration-300' >Hakkımızda</button>
                        <button onClick={() => navigate("/login")} className='border px-2 py-2 border-green-900  rounded-lg hover:bg-green-400 hover:shadow-2xl duration-300 '>Giriş Yap</button>
                        <button onClick={() => navigate("/register")} className='border px-2 py-2 border-green-900  rounded-lg hover:bg-green-400 hover:shadow-2xl duration-300 ' color="inherit">Kayıt Ol</button>

                    </div>
                </div>)
            }

        </>
    );
};

export default Header;