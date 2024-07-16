import { ReactNode } from "react";
import Navbar from "./_components/Navbar";

function AuthLayout ({children}:{children:ReactNode}) {

  return (

    <>
    <Navbar></Navbar>
      <div className="organizationLayout">
        {children}
      </div>
    </>
  );


}
export default AuthLayout;