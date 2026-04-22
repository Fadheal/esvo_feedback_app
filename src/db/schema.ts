import { pgTable, text, timestamp } from "drizzle-orm/pg-core";

export const fpTable = pgTable("fp_table", {
    id: text("id").primaryKey().$defaultFn(() => crypto.randomUUID()),
    reaction: text('reaction').notNull(),
    messages: text('messages').notNull(),
    created_at: timestamp('created_at').notNull().defaultNow(),
})

export type FP = typeof fpTable.$inferSelect;
export type newFp = typeof fpTable.$inferInsert;