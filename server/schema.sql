CREATE DATABASE cowlist;

USE cowlist;

CREATE TABLE `cows` (
  `id` int AUTO_INCREMENT NOT NULL,
  `cowname` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)

);