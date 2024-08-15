import { RedirectToSignIn } from "@clerk/nextjs";
import { clerkMiddleware } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";


// TODO:change this after deployment 
const landingUrl:string = "http://localhost:3000/"

export default clerkMiddleware((auth,req) => {
  // console.log(req.url);
  if (auth().userId && req.url === landingUrl) {
    let path = "select-org";

    if (auth().orgId) {
      path = `organization/${auth().orgId}`;
    }

    const redirectUrl = new URL(path, landingUrl);

    return NextResponse.redirect(redirectUrl);
  }
  
  else if (auth().userId && !auth().orgId && req.url !== landingUrl + "select-org") {
    const selectOrgUrl = new URL("select-org", landingUrl)
    return NextResponse.redirect(selectOrgUrl);
  }
  
}
  
  
);

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};