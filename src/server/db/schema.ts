import { sql } from "drizzle-orm";
import {
  integer,
  timestamp,
  text,
  pgTable,
  uniqueIndex,
} from "drizzle-orm/pg-core";

export const posts = pgTable(
  "post",
  {
    id: integer("id").primaryKey().generatedByDefaultAsIdentity(),
    userId: text("user_id").notNull(),
    platform: text("platform").notNull(), // "instagram", "youtube"
    imageUrl: text("image_url").notNull(),
    caption: text("caption"),
    status: text("status").default("pending"), // "pending", "published", "failed"
    scheduledAt: timestamp("scheduled_at").notNull(),
    qstashMessageId: text("qstash_message_id"), // Store QStash message ID
    createdAt: timestamp("created_at", { withTimezone: true })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).$onUpdate(
      () => new Date(),
    ),
  }
);

export const connected_platforms = pgTable(
  "connected_platform",
  {
    id: integer("id").primaryKey().generatedByDefaultAsIdentity(),
    userId: text("user_id").notNull(),
    platform: text("platform").notNull(),
    accessToken: text("access_token").notNull(),
    refreshToken: text("refresh_token"),
    createdAt: timestamp("created_at", { withTimezone: true })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).$onUpdate(
      () => new Date(),
    ),
  },
  (table) => {
    return {
      user_id_platform_idx: uniqueIndex("user_id_platform_idx")
        .on(table.userId, table.platform)
    }
  }
);