import { Link } from 'react-router-dom';


const NavBar = () => {

    return (
<div className="flex justify-end items-center border-b-2 border-outset border-Color2 h-18">
    <div className="font-mono space-x-8 text-Color1 md:text-2xl p-1 md:p-2 m-1 md:m-2 pr-2">
                <Link to="/" className="About">About</Link>
                <Link to="/Skills" className="Skills">Skills</Link>
                <Link to="/Proyects" className="Proyects">Proyects</Link>
                <Link to="/Contact" className="Contact">Contact</Link>
            </div>
        </div>
    )
}

export default NavBar