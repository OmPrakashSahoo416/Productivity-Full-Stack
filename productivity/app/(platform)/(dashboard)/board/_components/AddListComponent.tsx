"use client";
import { CreateList } from "@/actions/create-list";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { Plus } from "lucide-react";
import { ServerActionDispatcher } from "next/dist/client/components/router-reducer/router-reducer-types";
import { Dispatch, SetStateAction, useEffect } from "react";

interface AddListComponentProps {
  setIsEditing: any;
  setFormTitle: Dispatch<SetStateAction<string>>;
  isEditing: boolean;
  formTitle: String;
  boardId: String;
}

function AddListComponent({
  setIsEditing,
  setFormTitle,
  isEditing,
  formTitle,
  boardId,
}: AddListComponentProps) {
  
  useEffect(() => {
    setFormTitle("");
  }, [isEditing]);

  function onSubmitNewList() {
    toast({
      title: "List created successfully",
      className: "bg-rose-600 text-slate-100",
    });

    return setIsEditing(false);
  }

  if (isEditing) {
    return (
      <>
        <form
          action={CreateList}
          onSubmit={() => onSubmitNewList()}
          className="backdrop-blur-sm drop-shadow-md w-[275px] bg-slate-100/20 hover:bg-slate-100/40 rounded-md text-sm flex items-center p-3 font-semibold space-x-2"
        >
          <Input
            required
            placeholder="Enter list title"
            value={formTitle as string}
            onChange={(e) => setFormTitle(e.target.value)}
            className="focus-visible:ring-0 focus-visible:ring-offset-0 py-1 text-slate-600"
            autoFocus
            onBlur={() => setIsEditing(false)}
            type="text"
            name="title"
          />
          <Input
            className="hidden"
            hidden
            value={boardId as string}
            name="boardId"
            id="boardId"
          ></Input>
          <Button
            type="submit"
            variant={"primary"}
            size={"sm"}
            className="text-xs hidden font-semibold"
          >
            Add list
          </Button>
        </form>
      </>
    );
  }

  return (
    <>
      <div className="addlistcomponent">
        <button
          onClick={() => setIsEditing(true)}
          className="backdrop-blur-sm drop-shadow-md w-[300px] bg-slate-200/20 hover:bg-slate-200/30 rounded-md text-sm flex items-center p-3 text-white space-x-2"
        >
          <Plus size={12}></Plus>
          <p>Add a list</p>
        </button>
      </div>
    </>
  );
}

export default AddListComponent;
