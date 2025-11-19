CREATE TABLE "game_scores" (
	"game_id" text NOT NULL,
	"user_id" text NOT NULL,
	"username" text NOT NULL,
	"score" integer NOT NULL,
	"recorded_at" timestamp DEFAULT now(),
	CONSTRAINT "game_scores_game_id_user_id_pk" PRIMARY KEY("game_id","user_id")
);
--> statement-breakpoint
CREATE TABLE "users" (
	"id" text PRIMARY KEY NOT NULL,
	"username" text NOT NULL,
	"display_name" text,
	"created_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE INDEX "idx_game_score" ON "game_scores" USING btree ("game_id","score");--> statement-breakpoint
CREATE INDEX "idx_users_username" ON "users" USING btree ("username");