import { Link } from 'react-router-dom';


const NavBar = () => {

    return (
        <div className="flex justify-end items-center border-b-2 border-Color2 h-16">
            <div className="font-mono space-x-8 text-Color1 lg:text-2xl md:m-2 pr-2">
                <Link to="/">About</Link>
                <Link to="/Skills">Skills</Link>
                <Link to="/Projects">Projects</Link>
                <Link to="/Contact">Contact</Link>
            </div>
        </div>
    )
}

export default NavBar