import { getSession } from "../../../../../lib/session";
import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";
import { Exercise } from "../../../../../lib/types";

export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  const session = await getSession();

  if (!session.isLoggedIn) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  const updatedExercise = await req.json();
  const filePath = path.join(process.cwd(), "data", "exercises.json");
  const fileContent = await fs.readFile(filePath, "utf8");
  const exercises: Exercise[] = JSON.parse(fileContent);
  const index = exercises.findIndex((ex) => ex.id === parseInt(params.id));

  if (index === -1) {
    return new NextResponse("Exercise not found", { status: 404 });
  }

  exercises[index] = { ...exercises[index], ...updatedExercise };

  await fs.writeFile(filePath, JSON.stringify(exercises, null, 2));

  return NextResponse.json(exercises[index]);
}
