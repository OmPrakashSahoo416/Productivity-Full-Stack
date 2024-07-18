"use client"

import { useOrganizationList } from "@clerk/nextjs";
import { useParams } from "next/navigation";
import { useEffect } from "react"


function OrgSwitchHandler () {

  const {orgId} : {orgId : string} = useParams();
  const {setActive} =  useOrganizationList();

  useEffect(() => {
    if (!setActive) return

    setActive({
      organization:orgId 
    })

  }, [setActive,orgId]);


  return <></>
}

export default OrgSwitchHandler