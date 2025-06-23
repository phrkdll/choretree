ALTER TABLE `tasks` ADD `created_by` text REFERENCES users(id);--> statement-breakpoint
ALTER TABLE `tasks` ADD `created_at` integer NOT NULL;--> statement-breakpoint
ALTER TABLE `tasks` ADD `updated_at` integer NOT NULL;