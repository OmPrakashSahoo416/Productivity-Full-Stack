import { ClerkProvider, OrganizationList, RedirectToSignIn, RedirectToSignUp, SignedIn, SignedOut } from "@clerk/nextjs";

export default function SelectOrganization() {
  return (
    <>
    <SignedIn>
      <OrganizationList hidePersonal
      afterSelectOrganizationUrl={"/organization/:id"}
      afterCreateOrganizationUrl={"/organization/:id"}
      
      ></OrganizationList>
      </SignedIn>

    <SignedOut>
      <RedirectToSignIn signInFallbackRedirectUrl={'/select-org'}></RedirectToSignIn>
      {/* <RedirectToSignUp signUpFallbackRedirectUrl={'/select-org'} /> */}
    </SignedOut>
    </>
    
  )
}
