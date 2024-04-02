import { Link } from 'react-router-dom';


const NavBar = () => {

    return (
        <div className="h-20 flex justify-end items-center h-16 border-b-2 border-outset border-Color2">
            <div className="font-mono space-x-8 text-Color1 md:text-2xl p-1 md:p-2 m-1 md:m-2 pr-12">
                <Link to="/" className="About">About</Link>
                <Link to="/Skills" className="Skills">Skills</Link>
                <Link to="/Proyects" className="Proyects">Proyects</Link>
                <Link to="/Contact" className="Contact">Contact</Link>
            </div>
        </div>
    )
}

export default NavBar