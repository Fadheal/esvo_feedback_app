CREATE TABLE "fp_table" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "fp_table_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"reaction" text NOT NULL,
	"messages" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
