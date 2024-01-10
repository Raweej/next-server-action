import { NextRequest, NextResponse } from "next/server";

export async function Get(req: NextRequest) {
  //return error
  return NextResponse.json({ data: "hello world" });
}
