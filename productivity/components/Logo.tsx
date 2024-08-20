import { cn } from "@/lib/utils";
import Image from "next/image";
import { Raleway } from "next/font/google";
import Link from "next/link";


const textFont = Raleway({subsets:["latin"],
  weight:[
    "700",
  ] }
)

function Logo() {

  return (
    <>
    <Link href={"/"}>
    <div className="logo hover:opacity-60 transition justify-start md:items-center md:flex space-x-2 ">
      
      <Image className="rounded-sm h-6 w-6 mr-2" src="/logo.png" alt="logo" width={20} height={20}>
      </Image>
      <div className={cn("logoText hidden md:flex text-neutral-900 font-medium", textFont.className )}>
      TaskWeave
      </div>
    </div>
    </Link>
    </>
  )
}

export default Logo;