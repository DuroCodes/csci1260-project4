import { pgTable, uuid, text, timestamp } from "drizzle-orm/pg-core";

export const paste = pgTable("paste", {
  id: uuid("id").primaryKey().defaultRandom(),
  content: text("content").notNull(),
  language: text("language").notNull(),
  theme: text("theme").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});
