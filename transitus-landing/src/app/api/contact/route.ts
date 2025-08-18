import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const data = await req.json();

  // Here you’d normally send to CRM/email/DB
  console.log("New Client Request:", data);

  return NextResponse.json({ message: "Form received successfully!" }, { status: 200 });
}
