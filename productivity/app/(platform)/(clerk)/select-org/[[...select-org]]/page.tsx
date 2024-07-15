import { ClerkProvider, OrganizationList } from "@clerk/nextjs";

export default function SelectOrganization() {
  return (
    <ClerkProvider>
      <OrganizationList hidePersonal
      afterSelectOrganizationUrl={"/organization/:id"}
      afterCreateOrganizationUrl={"/organization/:id"}
      
      ></OrganizationList>
    </ClerkProvider>
  );
}
