import { NextResponse } from "next/server";
import { google } from "googleapis";
import { addPlatformToUser } from "@/server/db/queries";
import { auth } from "@clerk/nextjs/server";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const code = url.searchParams.get("code");

  if (!code) {
    return new Response("Authorization failed", { status: 400 });
  }

  const oauth2Client = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    "http://localhost:3000/api/youtube/callback",
  );

  try {
    const { tokens } = await oauth2Client.getToken(code);

    if (!tokens.access_token) {
      return new Response("Authorization failed", { status: 400 });
    }

    const { userId } = await auth();

    if (!userId) {
      return new Response("Unauthorized", { status: 400 });
    }

    // Save tokens to database
    await addPlatformToUser({
      userId,
      platform: "youtube",
      accessToken: tokens.access_token,
      refreshToken: tokens.refresh_token,
    });

    return NextResponse.redirect(`${process.env.BASE_URL}/dashboard/integrations`);
  } catch (error) {
    console.error("OAuth Error:", error);
    return new Response("OAuth Error", { status: 500 });
  }
}
