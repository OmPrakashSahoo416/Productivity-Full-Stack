import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const NavBar = () => {
  return (
    <>
      <div className="marketingNavBar fixed w-full  border-b shadow-sm top-0 p-2 bg-neutral-100 ">
        <div className="marketingLinks w-full flex justify-between  items-center md:max-w-screen-xl  md:w-auto mx-auto">
          <Logo></Logo>

          <div className="marketingButtons flex justify-between md:block items-center w-full md:w-auto space-x-4">
            <Button asChild size={"sm"} variant={"secondary"}>
              <Link href={"/sign-up"}>Sign up</Link>
            </Button>
            <Button asChild size={"sm"}>
              <Link href={"/sign-in"}>Sign in</Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
