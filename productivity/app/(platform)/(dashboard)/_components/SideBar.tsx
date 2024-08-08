"use client";
import { useOrganization, useOrganizationList } from "@clerk/nextjs";
import { House, LayoutGrid, Plus, Settings, Sparkles, Square, Users } from "lucide-react";
import { useLocalStorage } from "usehooks-ts";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { SquareKanban } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// interface sidebarProps {
//   storageKey?: string;
// }

function SideBar() {
  // const [expanded, setExpanded] = useLocalStorage<Record<string, any>>(
  //   storageKey,
  //   {}
  // );
  // const defaultContent = "Hi this"
  // const { organization, isLoaded } = useOrganization();

  const { userMemberships } = useOrganizationList({
    userMemberships: { infinite: true },
  });
  // console.log(userMemberships.data);


  // creating routes for the different options in the organization list in sidebar 
  const routes = [
    {
      label:"Boards"
    }
  ]

  return (
    <>
      <div className="sideBar max-w-md flex p-2 flex-col lg:max-w-screen-lg">
        {/* nav and home buttons */}
        <Link href={"/home"}>
        <Button variant={"ghost"} size={"left"} className="mb-2 w-full">
          <House className="mr-2" />
          <p>Home</p>
        </Button>
        </Link>
        
        <hr />
        <Link href={"/select-org"}>
          <Button
            variant={"ghost"}
            size={"sm"}
            className=" flex justify-between"
          >
            <p className="text-[12px] font-bold text-rose-600">Organization</p>
            <Plus size={"15px"} className="ml-28 text-rose-600"></Plus>
          </Button>
        </Link>
        <Accordion type="multiple"  className="ml-4 text-sm">
          {userMemberships.data?.map((org) => {
            // console.log(org.organization.imageUrl)
            
            return (
              <AccordionItem value={org.organization.name} key={org.id} title={org.organization.name}> 
              
                <AccordionTrigger className="hover:no-underline"><a href={`/organization/${org.organization.id}`}><Image className="rounded-md mr-2 w-6 h-6" width={25} height={25} src={org.organization.imageUrl} alt="orgImg"></Image></a>{org.organization.name}</AccordionTrigger>
                <AccordionContent className="flex flex-col">

                  
              <a href={`/organization/${org.organization.id}/`}>

                  <Button  variant={"ghost"} size={"left"} className="mb-2 w-full focus:bg-slate-300"><SquareKanban size={"20px"} className="mr-2"></SquareKanban>Boards</Button>

                  </a>
 
                  <a href={`/organization/${org.organization.id}/members`}>
                  <Button variant={"ghost"} size={"left"} className="w-full mb-2   focus:bg-slate-300"><Users size={"20px"} className="mr-2" />Members</Button>
                  </a>
                  <a href={`/organization/${org.organization.id}/settings`}>
                  <Button variant={"ghost"} size={"left"} className="w-full mb-2 focus:bg-slate-300"><Settings size={"20px"} className="mr-2"  />Settings</Button> </a>
                </AccordionContent>
              </AccordionItem>
            );
          })}

          {/* <AccordionItem value="organization" key="1" aria-label="Accordion 1" title="Accordion 1">
        <AccordionTrigger >

        </AccordionTrigger>
        <AccordionContent>
          asdf asdf asd fasd fas fasdf asd asd fas 
          
          </AccordionContent>
      </AccordionItem> */}
        </Accordion>
      </div>
    </>
  );
}

export default SideBar;
