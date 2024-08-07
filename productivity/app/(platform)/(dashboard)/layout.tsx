import { ReactNode } from "react";
import Navbar from "./_components/Navbar";
import SideBar from "./_components/SideBar";



function AuthLayout ({children}:{children:ReactNode}) {

  return (

    <>
    <Navbar></Navbar>
      <div className="dashboardLayout flex items-start">
        
        <div className="w-full">

        {children}
        </div>
      </div>
    </>
  );


}
export default AuthLayout;