import { Link } from 'react-router-dom';
import logo from '../assets/icon/logo.png'

const Navigation = () => {
    const user = null;
    const navOptions  = <>
     <li>
               <Link to="/"> Home</Link>
              </li>
             
              <li>
              <Link to='/'> Our Menu</Link>
               
              </li>
              <li>
              <Link to='/'> Our Shop </Link>
               
              </li>
              <li>
              <Link to='/'> Contact Us </Link>
               
              </li>
  
              {
                user ? <><li>
                <Link to="/"><button></button></Link></li> <li>
                <Link to="/"><button></button></Link></li></>  : <li></li>
                
              }</> 
    return (
        <div className="navbar bg-slate-900 text-white bg-opacity-80">
        <div className="navbar-start">
        <a className=" normal-case  "> <img src={logo} alt="logo" className='md:w-20 md:h-20 md:p-1 w-12 h-12 rounded-full md:mr-3 ' /> </a>
        <span className=" md:text-3xl text-lg font-bold ms-1 ">Bistro Boss Restaurant</span>
          <div className="dropdown navbar-center">
            <label tabIndex={0} className="btn btn-ghost  lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-purple-400  rounded-box w-52 font-bold"
            >
              {navOptions}
            
           
            </ul>
          </div>
        
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-bold">
          {navOptions}
          
          </ul>
        </div>
        <div className="navbar-end">
   {/* {
          user? <>    <Tooltip title={user?.displayName}>
          <img src={user?.photoURL} alt="User profile" className='md:w-12 md:h-12 w-8 h-8 rounded-full mr-3' />
        </Tooltip>
         <Link ><button className="btn btn-xs md:btn-lg bg-red-700" onClick={handleLogout}>Logout</button></Link> </>:
          <Link to="/login"><button className="btn bg-red-700 hover:bg-blue-700" >Login</button></Link>
         } */}
        
        </div>
      </div>
    );
};

export default Navigation;