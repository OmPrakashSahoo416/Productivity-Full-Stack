import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const Footer = () => {
  return (
    <>
      <div className="marketingFooter fixed w-full  border-t shadow-sm bottom-0 p-1 bg-neutral-100 ">
        <div className="marketingFooterLinks w-full flex justify-between  items-center md:max-w-screen-xl  md:w-auto mx-auto">
          <Logo></Logo>

          <div className="marketingFooterButtons flex justify-between md:block items-center w-full md:w-auto space-x-4">
            <Button className="hover:underline" asChild size={"sm"} variant={"ghost"}>
              <Link href={"/terms"}>Terms</Link>
            </Button>
            <p className="md:hidden">Made with love ❤️</p>
            <Button className="hover:underline" asChild size={"sm"} variant={"ghost"}>
              <Link href={"/privacy-policy"}>Privacy policy</Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
