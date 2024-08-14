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
import { UpdateCardTitle } from "@/actions/update-card";
import CardEdit from "./CardEdit";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

// creating a list component
// async function createList() {}

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
      <DragDropContext onDragEnd={() => {}}>
        <Droppable direction="horizontal" droppableId="lists" type="list">
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="listComponent flex items-start h-screen  space-x-5"
            >
              {/* lists array and at the end of lists a add button */}
              {lists.map((list, index) => {
                return (
                  <div key={list.id}>
                  <Draggable draggableId={list.id} index={index}>
                    {(provided) => (
                      <div
                        key={list?.id}
                        {...provided.draggableProps}
                        ref={provided.innerRef}
                        className="uniqueList space-y-2 h-auto rounded-md  max-h-[600px] shrink-0 drop-shadow-md w-[280px] bg-slate-400/70  flex items-center flex-col "
                      >
                        <div {...provided.dragHandleProps} className="w-full bg-slate-700 text-slate-100  flex items-center">
                          <p
                            
                            className="p-3 text-center"
                          >
                            ::
                          </p>

                          <ListHeader list={list}></ListHeader>
                        </div>

                        {/* Cards list here to individual list component */}
                        
                        <Droppable droppableId={list.id} type="card">
                          {(provided) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.droppableProps}
                              className="w-full px-1 space-y-2 hover:drop-shadow-md "
                            >
                              {list.cards.map((card, index) => {
                                return (
                                  <div key={card.id}>
                                  <Draggable

                                    
                                    draggableId={card.id}
                                    index={index}
                                  >
                                    {(provided, snapshot) => {
                                        if (snapshot.isDragging) {
                                          
                                       }
                                      
                                      return (
                                      <div
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        onDrag={() => console.log("Dragging")}
                                        className={`rounded-t-md !top-auto !left-auto space-y-1  w-full flex flex-col justify-center items-center bg-slate-100 ${
                                          snapshot.isDragging
                                            ? "hover:cursor-grabbing z-50 " 
                                            : " z-10 "
                                        }`}
                                      >
                                        <div {...provided.dragHandleProps} className=" text-center rounded-md bg-slate-400">drag</div>
                                        <div className="w-full text-pretty">
                                          <CardEdit
                                            cardId={card.id}
                                            list={list}
                                          ></CardEdit>
                                        </div>
                                      </div>
                                    )}}
                                  </Draggable>
                                  </div>
                                );
                              })}
                              {provided.placeholder}
                            </div>
                          )}
                        </Droppable>

                        {/* add card button here inside of a list  */}
                        <CardAddButton
                          listId={list.id as string}
                          boardId={boardId as string}
                        ></CardAddButton>
                      </div>
                    )}
                  </Draggable>
                  </div>
                );
              })}
              {provided.placeholder}
              <AddListComponent
                setIsEditing={setIsEditing}
                setFormTitle={setFormTitle}
                boardId={boardId}
                formTitle={formTitle}
                isEditing={isEditing}
              />
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </>
  );
}
export default ListComponent;
