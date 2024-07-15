import { ReactNode } from "react";

function AuthLayout ({children}:{children:ReactNode}) {

  return (

    <>
      <div className="organizationLayout">
        {children}
      </div>
    </>
  );


}
export default AuthLayout;