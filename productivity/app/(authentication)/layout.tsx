import { ReactNode } from "react";

function AuthLayout ({children}:{children:ReactNode}) {

  return (

    <>
      <div className="authenticateMenu w-full h-full flex justify-center items-center">
        {children}
      </div>
    </>
  );


}
export default AuthLayout;