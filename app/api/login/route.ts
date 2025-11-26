import { getSession } from "../../../lib/session";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { username, password } = await req.json();

  if (username === "admin" && password === "RaNa123@@") {
    const session = await getSession();
    session.isLoggedIn = true;
    await session.save();
    return NextResponse.json({ message: "Logged in successfully" });
  }

  return new NextResponse("Invalid credentials", { status: 401 });
}
