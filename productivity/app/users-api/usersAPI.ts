import { NextResponse } from "next/server";

function GET () {

  return NextResponse.json(
    {
      name: "Om Prakash Sahoo",
      age: 22,
      job: "Software Engineer"
    }
  );
}
export  {GET};