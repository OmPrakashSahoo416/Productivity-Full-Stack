import { ReactNode } from "react";
import Navbar from "./_components/Navbar";
import SideBar from "./_components/SideBar";

function AuthLayout ({children}:{children:ReactNode}) {

  return (

    <>
    <Navbar></Navbar>
      <div className="dashboardLayout flex items-start">
        <div className="sideBar lg:ml-20 ml-10 shrink-0 bg-slate-200 md:block hidden w-60">
          <SideBar></SideBar>
        </div>
        {children}
      </div>
    </>
  );


}
export default AuthLayout;