import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import path from "path";

export async function POST(request: Request) {
  const data = await request.json();
  const outputPath = path.join(process.cwd(), "questionnaire-responses.json");
  await writeFile(outputPath, JSON.stringify(data, null, 2), "utf-8");
  return NextResponse.json({ ok: true });
}
