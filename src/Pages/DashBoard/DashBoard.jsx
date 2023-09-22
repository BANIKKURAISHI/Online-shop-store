import { Link, Outlet } from "react-router-dom";


const DashBoard = () => {
    return (
        <div className=" m-10 text-4xl font-bold">
            <div>
           <nav>
             <ul >
               <li className="m-5">
                    <Link to='/dashboard/profile'>Profile</Link>
                </li>
                <li className="m-5">
                    <Link to='/dashboard/editProfile'>Edit</Link>
                </li>
               
               
             </ul>
           </nav>
           </div>
         <Outlet></Outlet>
        </div>
    );
};

export default DashBoard;