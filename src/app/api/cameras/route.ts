import fs from "fs";
import { NextResponse } from "next/server";
import path from "path";

export async function GET() {
  const directoryPath = path.join(process.cwd(), "public", "camera");

  try {
    const files = fs.readdirSync(directoryPath);
    const cameras = files
      .filter((file) => file.endsWith(".gif"))
      .map((file) => file.replace(".gif", ""));

    return new Response(JSON.stringify({ cameras }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    );
  }
}
