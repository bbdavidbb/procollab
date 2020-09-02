CREATE TABLE `users` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `full_name` varchar(255),
  `profile_picture` blob,
  `headline` varchar(255),
  `school` varchar(255),
  `rid` int,
  `eid` int,
  `email` varchar(255) UNIQUE,
  `password` varchar(255),
  `sid` int
);

CREATE TABLE `projects` (
  `pid` int PRIMARY KEY,
  `title` varchar(255),
  `user_id` int NOT NULL,
  `pic` blob,
  `status` varchar(255),
  `description` varchar(255) NOT NULL
);
CREATE TABLE `user_projects` (
  `pid` int,
  `uid` int,
  `type` varchar(255)
);

CREATE TABLE `post_projects` (
  `post_id` int UNIQUE PRIMARY KEY NOT NULL,
  `user_id` int
);

CREATE TABLE `participate_projects` (
  `post_id` int,
  `user_id` int PRIMARY KEY NOT NULL
);

CREATE TABLE `skill_req` (
  `post_id` int PRIMARY KEY,
  `skill_id` int
);

CREATE TABLE `timeline` (
  `id` int PRIMARY KEY,
  `pid` int NOT NULL,
  `uid` int NOT NULL
);

CREATE TABLE `skill` (
  `sid` int PRIMARY KEY,
  `skill_name` varchar(255),
  `mo_of_expereince` int
);

CREATE TABLE `has_skill` (
  `uid` int PRIMARY KEY,
  `sid` int
);

CREATE TABLE `skill_endorsement` (
  `eid` int PRIMARY KEY,
  `uid` int,
  `skill_id` int,
  `comment` varchar(255)
);

CREATE TABLE `recruitment` (
  `pid` int PRIMARY KEY,
  `user_id` int,
  `participate` boolean
);
CREATE TABLE `rating` (
  `rid` int PRIMARY KEY,
  `uid` int,
  `rating` int NOT NULL,
  `comment` varchar(255)
);

ALTER TABLE `skill_endorsement` ADD FOREIGN KEY (`skill_id`) REFERENCES `skill` (`sid`);

ALTER TABLE `skill_endorsement` ADD FOREIGN KEY (`uid`) REFERENCES `users` (`id`);

ALTER TABLE `rating` ADD FOREIGN KEY (`uid`) REFERENCES `users` (`id`);

ALTER TABLE `user_projects` ADD FOREIGN KEY (`pid`) REFERENCES `projects` (`pid`);

ALTER TABLE `user_projects` ADD FOREIGN KEY (`uid`) REFERENCES `users` (`id`);

ALTER TABLE `post_projects` ADD FOREIGN KEY (`post_id`) REFERENCES `projects` (`pid`);

ALTER TABLE `post_projects` ADD FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

ALTER TABLE `participate_projects` ADD FOREIGN KEY (`post_id`) REFERENCES `projects` (`pid`);

ALTER TABLE `participate_projects` ADD FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

ALTER TABLE `timeline` ADD FOREIGN KEY (`pid`) REFERENCES `projects` (`pid`);

ALTER TABLE `timeline` ADD FOREIGN KEY (`uid`) REFERENCES `users` (`id`);

ALTER TABLE `has_skill` ADD FOREIGN KEY (`uid`) REFERENCES `users` (`id`);

ALTER TABLE `has_skill` ADD FOREIGN KEY (`sid`) REFERENCES `skill` (`sid`);

ALTER TABLE `skill_req` ADD FOREIGN KEY (`post_id`) REFERENCES `projects` (`pid`);

ALTER TABLE `skill_req` ADD FOREIGN KEY (`skill_id`) REFERENCES `skill` (`sid`);

ALTER TABLE `recruitment` ADD FOREIGN KEY (`pid`) REFERENCES `projects` (`pid`);

ALTER TABLE `recruitment` ADD FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);