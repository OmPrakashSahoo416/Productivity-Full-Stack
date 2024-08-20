import { ClerkProvider, SignIn} from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";


export default  function Page() {
    const org = auth().orgId;
  return (
  // <ClerkProvider >
    
    <>
    <div className="flex justify-center items-center flex-col space-y-2">

      <SignIn fallbackRedirectUrl={org ? `/organization/${org}` : "/select-org"} />
      <div className="text-sm font-bold text-slate-600">Temporary Id : temp@user.com</div>
      <div className="text-sm font-bold text-slate-500">Passcode : 123456789</div>
    </div>
    </>
    
    
    // </ClerkProvider>
  );
}