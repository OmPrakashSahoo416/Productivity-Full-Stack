import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const Footer = () => {
  return (
    <>
      <div className="marketingFooter fixed w-full  border-t shadow-sm bottom-0 p-1 bg-neutral-100 ">
        <div className="marketingFooterLinks w-full flex justify-between  items-center md:max-w-screen-xl  md:w-auto mx-auto">
          {/* <Logo></Logo> */}

          <div className="marketingFooterButtons flex justify-between  items-center w-full md:w-auto space-x-4">
            <Button className="hover:underline text-slate-700 " asChild size={"sm"} variant={"ghost"}>
              <Link href={"/"}>Terms</Link>
            </Button>
            <p className=" text-slate-700 text-sm font-semibold">Made with love ❤️</p>
            <Button className="hover:underline text-slate-700 " asChild size={"sm"} variant={"ghost"}>
              <Link href={"/"}>Privacy policy</Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
