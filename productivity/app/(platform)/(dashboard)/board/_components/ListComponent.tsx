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
import {
  UpdateCardListId,
  UpdateCardOrder,
  UpdateCardTitle,
} from "@/actions/update-card";
import CardEdit from "./CardEdit";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
// import { UpdateBoardList } from "@/actions/update-board";
import { db } from "@/lib/db";
import { UpdateListOrder } from "@/actions/update-list";
import { toast } from "@/components/ui/use-toast";

function ListReorderingServerAction(newList: List[]) {
  newList.forEach(async (list) => {
    const data = await UpdateListOrder(list.id, list.order);
  });
}

// In same list only re order the cards so no change in the list ids...
function CardReorderingServerActionSelf(newCards: Card[]) {
  newCards.forEach(async (card) => {
    const data = await UpdateCardOrder(card.id, card.order);
  });
}

async function CardReorderingServerActionInter (movedCard : any, destination : any) {
  const data = await UpdateCardListId(movedCard.id, destination.droppableId);
}

// important generalized reordering logic in case of dnd ======
function reorder<T>(list: T[], startInd: number, endInd: number) {
  const result = Array.from(list);
  const [removed] = result.splice(startInd, 1);
  result.splice(endInd, 0, removed);

  return result;
}

// creating a list component
// async function createList() {}

function ListComponent({
  boardId,
  lists,
}: {
  boardId: string;
  lists: ({ cards: Card[] } & List)[];
}) {
  // on drag end function
  function OnDragEnd(result: any) {
    const { destination, source, type } = result;

    // if there is no destination that is the drop is not on a droppable thing
    if (!destination) {
      return;
    }

    // if index or the source is the same as destination then too dont do anything
    if (
      destination.droppableId == source.droppableId &&
      destination.index == source.index
    ) {
      return;
    }
    console.log("ttt");

    // 2 types - list and card
    if (type == "list") {
      const newList = reorder(lists, source.index, destination.index).map(
        (item, index) => {
          return { ...item, order: index };
        }
      );

      lists = newList; // changing local state

      // server update
      ListReorderingServerAction(lists);
      toast({
        title: "List reordered successfully",
        className: "bg-rose-600 text-slate-100",
      });
    }

    if (type == "card") {
      const sourceList = lists.find((list) => list.id == source.droppableId);
      const destinationList = lists.find(
        (list) => list.id == destination.droppableId
      );

      // checking if they contain list or not
      if (!sourceList?.cards) {
        sourceList!.cards = [];
      }
      if (!destinationList?.cards) {
        destinationList!.cards = [];
      }

      // 2 cases moving in same list or in different lists
      if (source.droppableId == destination.droppableId) {
        const newCards = reorder(
          sourceList!.cards,
          source.index,
          destination.index
        );

        newCards.forEach((card, index) => (card.order = index));

        
        sourceList!.cards = newCards; // local state update

        //server action
        CardReorderingServerActionSelf(newCards);
        toast({
          title: "Cards reordered successfully",
          className: "bg-rose-600 text-slate-100",
        });

      } else {
        // get the moved card
        const [movedCard] = sourceList!.cards.splice(source.index, 1);

        // add the moved card to new destination list ==> droppable id is list id
        movedCard.listId = destination.droppableId;
        // update the list id in backend
        CardReorderingServerActionInter(movedCard, destination)
        // UpdateCardListId(movedCard.id, destination.droppableId);
        //===========================================================================

        // adding the movedCard at the correct index in destination list
        destinationList?.cards.splice(destination.index, 0, movedCard);

        // now resetting index in both source and destination lists
        sourceList?.cards.forEach((card, index) => (card.order = index));
        destinationList?.cards.forEach((card, index) => (card.order = index));

        // server action setting both the source and destination list on card move from
        // one list to another along with fixing there order ==========================

        // change the order of all the cards in both source and destination list &&
        CardReorderingServerActionSelf(sourceList?.cards as Card[]);
        CardReorderingServerActionSelf(destinationList?.cards as Card[]);

        toast({
          title: "Cards reordered successfully",
          className: "bg-rose-600 text-slate-100",
        });

        // change the order and listId of moved card only
      }
    }
  }

  // to keep the status if the creating of list is going on or not
  const [isEditing, setIsEditing] = useState(false);
  const [formTitle, setFormTitle] = useState("");

  // lists contains the cards and the list so does the type above

  return (
    <>
      <DragDropContext onDragEnd={OnDragEnd}>
        <Droppable direction="horizontal" droppableId="lists" type="list">
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="listComponent flex items-start h-full  space-x-5"
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
                          className="uniqueList space-y-5 h-auto rounded-md shrink-0 drop-shadow-md w-[280px] bg-slate-300/90  flex items-center flex-col "
                        >
                          <div
                            
                            className="w-full bg-slate-400 drop-shadow-md text-slate-100 rounded-t-md  flex items-center"
                          >
                            <p {...provided.dragHandleProps} className="p-3 text-center font-bold hover:cursor-grab">::</p>

                            <ListHeader list={list}></ListHeader>
                          </div>

                          {/* Cards list here to individual list component */}

                          <Droppable droppableId={list.id} type="card">
                            {(provided) => (
                              <div
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                                className="w-full px-1 space-y-5  "
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
                                              onDrag={() =>
                                                console.log("Dragging")
                                              }
                                              className={`rounded-t-md !top-auto !left-auto space-y-1  w-full flex flex-col hover:drop-shadow-md justify-center items-center bg-slate-100 ${
                                                snapshot.isDragging
                                                  ? " hover:cursor-grabbing opacity-75 "
                                                  : "  "
                                              }`}
                                            >
                                              <div className="w-full text-pretty">
                                                <CardEdit
                                                  cardId={card.id}
                                                  list={list}
                                                >
                                                  <p
                                                    {...provided.dragHandleProps}
                                                    className="p-3 text-center font-bold hover:cursor-grab"
                                                  >
                                                    ::
                                                  </p>
                                                </CardEdit>
                                              </div>
                                            </div>
                                          );
                                        }}
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
