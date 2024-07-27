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
      
      <Image className="rounded-sm" src="/logo.png" alt="logo" width={20} height={20}>
      </Image>
      <div className={cn("logoText text-neutral-900 font-medium", textFont.className )}>
        Trello
      </div>
    </div>
    </Link>
    </>
  )
}

export default Logo;