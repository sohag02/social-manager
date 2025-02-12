import "server-only";

import { connected_platforms } from "./schema";
import { db } from "./index";
import { eq } from "drizzle-orm";

export async function getConnectedPlatformsByUserId(userId: string) {
  return await db.select().from(connected_platforms).where(
    eq(connected_platforms.userId, userId)
  );
}

const ConnectedPlatformInsert = connected_platforms.$inferInsert

export async function addPlatformToUser(platform : typeof ConnectedPlatformInsert) {
  await db.insert(connected_platforms)
    .values(platform)
    .onConflictDoUpdate({
      target: [connected_platforms.userId, connected_platforms.platform],
      set: {
        accessToken: platform.accessToken,
        refreshToken: platform.refreshToken,
      },
    })
}