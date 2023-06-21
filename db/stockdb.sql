# ************************************************************
# Sequel Ace SQL dump
# Version 20046
#
# https://sequel-ace.com/
# https://github.com/Sequel-Ace/Sequel-Ace
#
# Host: 127.0.0.1 (MySQL 5.5.5-10.11.3-MariaDB-1:10.11.3+maria~ubu2204)
# Database: stock
# Generation Time: 2023-06-21 09:41:43 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
SET NAMES utf8mb4;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE='NO_AUTO_VALUE_ON_ZERO', SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table orders
# ------------------------------------------------------------
CREATE OR REPLACE DATABASE stock;

USE stock;

DROP TABLE IF EXISTS `orders`;

CREATE TABLE `orders` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `order_number` varchar(255) NOT NULL,
  `customer_email` varchar(255) NOT NULL,
  `customer_name` varchar(255) NOT NULL,
  `address_line_1` varchar(255) NOT NULL,
  `address_line_2` varchar(255) DEFAULT NULL,
  `address_line_3` varchar(255) DEFAULT NULL,
  `town_city` varchar(255) NOT NULL,
  `postcode` varchar(255) NOT NULL,
  `country` varchar(255) DEFAULT 'United Kingdom',
  `products` varchar(511) NOT NULL,
  `order_open` int(1) unsigned NOT NULL DEFAULT 1,
  `order_shipped` int(1) unsigned NOT NULL DEFAULT 0,
  `order_cancelled` int(1) unsigned NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;

INSERT INTO `orders` (`id`, `order_number`, `customer_email`, `customer_name`, `address_line_1`, `address_line_2`, `address_line_3`, `town_city`, `postcode`, `country`, `products`, `order_open`, `order_shipped`, `order_cancelled`)
VALUES
	(1,'ORDER0001','jeff@amazon.com','Jeff Bezos','1 Jeff Street',NULL,NULL,'Jeffsville','J3 3FF','United Kingdom','(Odd Socks:3),(Blunt Pencils:4)',1,0,0),
	(3,'ORDER0002','jeff@amazon.com','Jeff Bezos','1 Jeff Street',NULL,NULL,'Jeffsville','J3 3FF','United Kingdom','(Odd Socks:1),(Blunt Pencils:1)',1,0,0);

/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table products
# ------------------------------------------------------------

DROP TABLE IF EXISTS `products`;

CREATE TABLE `products` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `SKU` varchar(12) NOT NULL,
  `stock_level` int(11) unsigned NOT NULL,
  `name` varchar(255) NOT NULL,
  `price` int(11) unsigned NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;

INSERT INTO `products` (`id`, `SKU`, `stock_level`, `name`, `price`)
VALUES
	(1,'ICBWHTIS0001',42,'Odd Socks',125),
	(2,'ICBWHTIS0002',31,'Blunt Pencils',1200),
	(3,'ICBWHTIS0003',22,'Widgets',2300),
	(4,'ICBWHTIS0004',99,'Sharp Pencils',1199),
	(5,'ICBWHTIS0005',1,'Ferret',500),
	(6,'ICBWHTIS0006',2,'German Shepherd (Dog)',12000),
	(7,'ICBWHTIS0007',1,'German Shepherd (Hans)',11999),
	(8,'ICBWHTIS0008',8,'German Shepherd (Fritz)',11999),
	(9,'ICBWHTIS0009',5,'Broken Keyboard',350),
	(10,'ICBWHTIS0010',2,'Sky Hooks',5500),
	(11,'ICBWHTIS0011',3,'Long Weights',880);

/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
