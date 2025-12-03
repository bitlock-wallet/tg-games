DROP INDEX "idx_game_score";--> statement-breakpoint
CREATE INDEX "idx_game_score_user" ON "game_scores" USING btree ("game_id","score" DESC NULLS LAST,"user_id");