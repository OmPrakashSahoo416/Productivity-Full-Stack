"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, List } from "@prisma/client";
import { Plus } from "lucide-react";
import { useEffect, useState } from "react";
import { CreateList } from "@/actions/create-list";
import ListHeader from "./ListHeader";
import CardAddButton from "./CardAddButton";
import AddListComponent from "./AddListComponent";

// creating a list component
async function createList() {}

function ListComponent({
  boardId,
  lists,
}: {
  boardId: string;
  lists: ({ cards: Card[] } & List)[];
}) {
  // to keep the status if the creating of list is going on or not
  const [isEditing, setIsEditing] = useState(false);
  const [formTitle, setFormTitle] = useState("");

  

  // lists contains the cards and the list so does the type above

  return (
    <>
      <div className="listComponent flex items-start space-x-5">
        {/* lists array and at the end of lists a add button */}
        {lists.map((list, index) => {
          return (
            <div
              key={list?.id}
              className="uniqueList shrink-0 drop-shadow-md w-[275px] bg-slate-400/70 rounded-md flex items-center flex-col "
            >
              <ListHeader list={list}></ListHeader>
              <div className="cards p-3"></div>

              {/* add card button here inside of a list  */}
              <CardAddButton listId={list.id as string} boardId={boardId as string}></CardAddButton>
            </div>
          );
        })}
        <AddListComponent
          setIsEditing={setIsEditing}
          setFormTitle={setFormTitle}
          boardId={boardId}
          formTitle={formTitle}
          isEditing={isEditing}
        />
        
      </div>
    </>
  );
}
export default ListComponent;
