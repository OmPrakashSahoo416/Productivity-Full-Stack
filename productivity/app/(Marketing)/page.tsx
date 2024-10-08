import { Button } from "@/components/ui/button";
import { NavBar } from "./_components/NavBar";

import { Raleway } from "next/font/google";
import Link from "next/link";
import { Footer } from "./_components/Footer";
const HeadingFont = Raleway({subsets:["latin"],
  weight:[
    
    
    "700",

  ] }
)

function MarketingPage() {
  return (
    <>
      {/* navigation  */}
      <NavBar></NavBar>

      {/* Body Text  */}
      <div className="marketingPage h-full bg-gradient-to-b from-rose-500 flex justify-center items-center p-8 flex-col to-fuchsia-500">
        <div className={"marketingHeading mt-5 text-center max-w-sm md:max-w-xl text-2xl md:text-4xl text-slate-200 " + HeadingFont.className}>
        TaskWeave streamlines  <span className="underline-offset-4  underline decoration-neutral-100"> project and task management</span>  for teams.
        </div>

        <div className="marketingDesc mt-5 text-sm md:text-lg max-w-md md:max-w-2xl text-fuchsia-200 text-center ">
        Effortlessly manage your organization with boards, lists, and cards. Gain a clear view of tasks, streamline workflows, and enhance productivity. <br></br>See who's doing what, prioritize what needs to be done, and stay on top of every detail.
        </div>

        <Button variant={"primary"}  className="mt-5 drop-shadow-md" size={"lg"} asChild>
        <Link href={"/sign-up"}>
        Sign up - it's free
        </Link>


        </Button>
      </div>

      {/* Footer  */}
      <Footer></Footer>
    </>
  );
}

export default MarketingPage;
