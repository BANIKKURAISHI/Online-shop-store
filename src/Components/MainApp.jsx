import {  NavLink, Outlet} from "react-router-dom";
import Footer from "./Footer/Footer";






const MainApp = () => {
  



    return (

        <div>
              <section className="flex justify-between shadow-xl">
                <h1 className="text-2xl p-12 font-bold ">Online shop store </h1>
                <nav className="shadow-xl p-10 m-5">
                    <ul className=" flex gap-20 font-semibold ">
                        <li className="cursor-pointer"><NavLink
                         to="/home" className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "bg-yellow-400" :"" }> Home</NavLink></li>

                        <li className="cursor-pointer"><NavLink
                         to="/product" className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "bg-yellow-400" :"" }> Product</NavLink></li>                                                               
                                                                      
                        <li className="cursor-pointer"><NavLink
                         to="/dashboard" className={({ isActive, isPending }) =>
                         isPending ? "pending" : isActive ? "bg-yellow-400" :"" }>Dashboard</NavLink></li>                         
                    
                       
                    </ul>
                </nav>
            </section>
               <div className="min-h-screen">
                 <Outlet></Outlet>
              </div> 



              
            

            
         <div>
            <Footer></Footer>
         </div>

        </div>
    );
};

export default MainApp;