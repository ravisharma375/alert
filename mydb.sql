-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Oct 07, 2019 at 08:44 AM
-- Server version: 5.7.26
-- PHP Version: 7.2.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mydb`
--

-- --------------------------------------------------------

--
-- Table structure for table `alerttable`
--

DROP TABLE IF EXISTS `alerttable`;
CREATE TABLE IF NOT EXISTS `alerttable` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `time` varchar(255) NOT NULL,
  `alertaccept` varchar(255) NOT NULL,
  `status` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=37 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `alerttable`
--

INSERT INTO `alerttable` (`id`, `time`, `alertaccept`, `status`) VALUES
(1, '2019-10-04 10:17:02.284', 'Sat Oct 05 2019 10:23:28 GMT+0530 (India Standard Time)', 1),
(2, '2019-10-04 10:19:03.403', 'Sun Oct 06 2019 13:28:04 GMT+0530 (India Standard Time)', 1),
(3, '2019-10-04 12:02:45.126', 'Fri Oct 04 2019 12:04:16 GMT+0530 (India Standard Time)', 1),
(4, '2019-10-04 17:27:53.471', '', 1),
(5, '2019-10-04 17:33:52.847', 'Sat Oct 05 2019 14:45:21 GMT+0530 (India Standard Time)', 1),
(6, '2019-10-04 17:34:08.802', '', 1),
(7, '2019-10-04 18:02:28.752', '', 1),
(8, '2019-10-04 18:06:47.189', 'Sun Oct 06 2019 20:35:17 GMT+0530 (India Standard Time)', 1),
(9, '2019-10-04 18:06:53.800', 'Sun Oct 06 2019 20:21:31 GMT+0530 (India Standard Time)', 1),
(10, '2019-10-04 18:06:57.372', 'Sun Oct 06 2019 13:35:40 GMT+0530 (India Standard Time)', 1),
(11, '2019-10-04 18:07:11.182', 'Sat Oct 05 2019 10:07:19 GMT+0530 (India Standard Time)', 1),
(12, '2019-10-05 10:15:02.542', 'Sat Oct 05 2019 11:04:50 GMT+0530 (India Standard Time)', 1),
(14, '2019-10-05 10:26:58.379', 'Sat Oct 05 2019 14:22:53 GMT+0530 (India Standard Time)', 1),
(15, '2019-10-05 14:22:10.237', 'Mon Oct 07 2019 14:00:11 GMT+0530 (India Standard Time)', 1),
(16, '2019-10-05 14:22:10.774', '', 1),
(17, '2019-10-05 14:22:10.982', '', 1),
(18, '2019-10-05 14:22:14.588', '', 1),
(19, '2019-10-05 14:22:15.924', '', 1),
(20, '2019-10-05 14:22:16.185', '', 1),
(21, '2019-10-05 14:22:20.027', '', 1),
(22, '2019-10-05 14:22:21.054', 'Sat Oct 05 2019 14:58:57 GMT+0530 (India Standard Time)', 1),
(23, '2019-10-05 16:01:37.188', '', 1),
(24, '2019-10-05 16:01:38.962', '', 1),
(25, '2019-10-05 16:01:40.559', 'Mon Oct 07 2019 14:02:20 GMT+0530 (India Standard Time)', 1),
(26, '2019-10-05 16:01:43.944', '', 1),
(27, '2019-10-05 18:44:03.250', '', 1),
(28, '2019-10-05 19:01:23.527', '', 1),
(29, '2019-10-06 20:14:31.872', '', 1),
(30, '2019-10-06 20:43:50.510', '', 1),
(31, '2019-10-06 21:47:21.041', '', 1),
(32, '2019-10-06 21:56:41.520', '', 1),
(33, '2019-10-07 13:19:19.570', '', 1),
(34, '2019-10-07 13:38:41.770', '', 1),
(35, '2019-10-07 13:53:03.624', '', 1),
(36, '2019-10-07 13:59:51.098', '', 1);

-- --------------------------------------------------------

--
-- Table structure for table `userdata`
--

DROP TABLE IF EXISTS `userdata`;
CREATE TABLE IF NOT EXISTS `userdata` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `contact_no` varchar(10) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=103 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `userdata`
--

INSERT INTO `userdata` (`id`, `name`, `email`, `address`, `contact_no`) VALUES
(94, 'Nikita Bane', 'nikita.bane@gmail.com', 'Dadar, West.', '8596325698'),
(95, 'Rishabh More', 'more.rushabh1@gmail.com', 'Eerr', '9003121212'),
(96, 'ravi', 'ravisharama375@gmail.com', 'Ramwadi', '874123682'),
(97, '', '', ' rejaijoi', '542154216'),
(98, '', '454hkg', ' rejaijoi', '542154216'),
(99, '', '454hgfgfrfkg', ' rejaijoi', '542154216'),
(100, 'ravi', 'raviunknow@gmail.com', 'jogeshwari', '542154216'),
(101, 'ravi', 'raviunknowlll@gmail.com', 'jogeshwari', '542154216'),
(102, 'ravi', 'raviunknowll11122l@gmail.com', 'jogeshwari', '542154216');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
