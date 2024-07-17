import { ClerkProvider, SignIn} from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";


export default  function Page() {
    const org = auth().orgId;
  return (<ClerkProvider >
    

    <SignIn fallbackRedirectUrl={org ? `organization/${org}` : "/select-org"} />
    
    
    </ClerkProvider>);
}