import { DarkThemeToggle, Flowbite, useThemeMode } from 'flowbite-react';

const DarkMode = () => {
    const { mode } = useThemeMode();
    const root = document.getElementById('root');
    if (root)
        if (mode == "dark") {
            root.style.backgroundColor = "#1f2937";
            root.style.color = " #ffffff";
        } else {
            root.style.backgroundColor = '#ffffff';
            root.style.color = '#000000';
        }
    return (
        <div className=''>
            <Flowbite >
                <div >
                    <DarkThemeToggle />
                </div>
            </Flowbite >

        </div >

    );
};

export default DarkMode;