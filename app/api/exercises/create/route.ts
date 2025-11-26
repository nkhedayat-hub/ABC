import { getSession } from "../../../../lib/session";
import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

export async function POST(req: Request) {
  const session = await getSession();

  if (!session.isLoggedIn) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  const newExercise = await req.json();
  const filePath = path.join(process.cwd(), "data", "exercises.json");
  const fileContent = await fs.readFile(filePath, "utf8");
  const exercises = JSON.parse(fileContent);

  newExercise.id = Math.max(...exercises.map((e: any) => e.id), 0) + 1;
  exercises.push(newExercise);

  await fs.writeFile(filePath, JSON.stringify(exercises, null, 2));

  return NextResponse.json(newExercise);
}
