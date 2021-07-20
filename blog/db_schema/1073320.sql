/*
Navicat MySQL Data Transfer

Source Server         : Homework
Source Server Version : 50505
Source Host           : localhost:3306
Source Database       : eat

Target Server Type    : MYSQL
Target Server Version : 50505
File Encoding         : 65001

Date: 2018-10-20 00:26:38
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for hw2
-- ----------------------------
DROP TABLE IF EXISTS `hw2`;
CREATE TABLE `hw2` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sn` varchar(20) NOT NULL DEFAULT '',
  `shop` varchar(255) NOT NULL DEFAULT '',
  `name` varchar(255) NOT NULL DEFAULT '',
  `phone` varchar(255) NOT NULL,
  `car` varchar(255) NOT NULL,
  `product` varchar(255) NOT NULL,
  `amount` varchar(255) NOT NULL,
  `date` varchar(255) NOT NULL,
  `time` varchar(255) NOT NULL,
  `times` varchar(255) NOT NULL,
  `email` varchar(50) NOT NULL,
  `message` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8;
