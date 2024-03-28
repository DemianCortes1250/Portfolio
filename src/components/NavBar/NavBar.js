import { Link } from 'react-router-dom';


const NavBar = () => {

    return (
        <div className="h-20 flex justify-end items-center h-16 border-b-2 border-outset border-Color2">
            {/* <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
</svg>

                <img></img>
            </div> */}
            <div className="font-mono space-x-8 text-Color1 md:text-2xl p-1 md:p-2 m-1 md:m-2">
                <Link to="/" className="About">About</Link>
                <Link to="/Skills" className="Skills">Skills</Link>
                <Link to="/Proyects" className="Proyects">Proyects</Link>
                <Link to="/Contact" className="Contact">Contact</Link>
            </div>
        </div>
    )
}

export default NavBar