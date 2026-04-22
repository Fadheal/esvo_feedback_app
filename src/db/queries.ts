import { createServerFn } from "@tanstack/react-start";
import { db } from "./client";
import { fpTable } from "./schema";

export const getFp = createServerFn({ method: "GET" }).handler(() => {
    return db.select().from(fpTable)
})

export const addFp = createServerFn({ method: "POST" })
    .inputValidator((data: { reaction: string, messages: string }) => data)
    .handler(({data}) => {
        return db.insert(fpTable).values(data).returning();
    })