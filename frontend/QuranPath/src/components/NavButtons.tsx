
interface Props {
    name: string;
    onClick: () => void;

}

const NavButtons = ({ name, onClick }: Props) => {
    return (
        <button onClick={onClick} className=' px-2   rounded-lg hover:bg-green-500 hover:shadow-2xl duration-500 ' color="inherit" >{name}</button>
    );
};

export default NavButtons;