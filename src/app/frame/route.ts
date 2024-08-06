import { init } from "@airstack/frames";
import { NextRequest, NextResponse } from "next/server";

init(process.env.AIRSTACK_API_KEY as string);

export function POST(req: NextRequest) {
  return NextResponse.json({ valid: true });
}
