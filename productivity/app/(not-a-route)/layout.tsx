import { ReactNode } from "react";

function NewLayout(
  {children} : {
    children : {children: ReactNode}
  }

) {

  return (
    <>
      <div className="bg-rose-200 text-center p-2">
        This is a navbar
        

      </div>
      {children}
    </>

  );
}

export default NewLayout;