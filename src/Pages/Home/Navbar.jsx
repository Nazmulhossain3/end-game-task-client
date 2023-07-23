import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/Image/logo_dark.webp'
import './navbar.css'
const Navbar = () => {
    return (
        <div className="navbar bg-[#2B2F36]  text-white font-medium">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
   <img className="w-48  hidden lg:flex" src={logo} alt="" />
  </div>
  <div className="navbar-center hidden lg:flex">
    <div className="menu menu-horizontal px-1 flex gap-8 text-xl">
     <NavLink className={({ isActive}) =>isActive ? "text-green-500" : ""} to='/'><p className="">Home</p></NavLink>
     <NavLink className={({ isActive}) =>isActive ? "text-green-500" : ""} to='/colleges'><p className="">Colleges</p></NavLink>
     <NavLink className={({ isActive}) =>isActive ? "text-green-500" : ""} to='/admission'><p className=""> Admission</p></NavLink>
     <NavLink className={({ isActive}) =>isActive ? "text-green-500" : ""} to='/myCollage'><p className=""> My College</p></NavLink>
       
    </div>
  </div>
  <div className="navbar-end">
   <Link to='/login'><button className="border-2 px-3 rounded hover:bg-orange-600 py-1">Login</button></Link>
  </div>
</div>
    );
};

export default Navbar;