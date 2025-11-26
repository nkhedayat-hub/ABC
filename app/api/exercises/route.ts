import { getSession } from "../../../lib/session";
import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

export async function GET() {
  const session = await getSession();

  if (session.isLoggedIn) {
    const filePath = path.join(process.cwd(), "data", "exercises.json");
    const fileContent = await fs.readFile(filePath, "utf8");
    const exercises = JSON.parse(fileContent);
    return NextResponse.json(exercises);
  }

  return new NextResponse("Unauthorized", { status: 401 });
}
