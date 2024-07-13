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
    <div className="logo hover:opacity-60 transition justify-start md:items-center md:flex space-x-2 hidden">
      
      <Image className="rounded-full" src="/logo.png" alt="logo" width={30} height={30}>
      </Image>
      <div className={cn("logoText text-purple-900 font-medium", textFont.className )}>
        Trello
      </div>
    </div>
    </Link>
    </>
  )
}

export default Logo;