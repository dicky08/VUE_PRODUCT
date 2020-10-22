-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: 14 Okt 2020 pada 00.54
-- Versi Server: 5.7.31-0ubuntu0.18.04.1
-- PHP Version: 7.2.24-0ubuntu0.18.04.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `api_product`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `best_product`
--

CREATE TABLE `best_product` (
  `id` int(11) NOT NULL,
  `id_product` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `best_product`
--

INSERT INTO `best_product` (`id`, `id_product`) VALUES
(1, 90),
(2, 50),
(3, 92),
(4, 91);

-- --------------------------------------------------------

--
-- Struktur dari tabel `category`
--

CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `category_name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `category`
--

INSERT INTO `category` (`id`, `category_name`) VALUES
(1, 'food'),
(2, 'drink'),
(3, 'desert');

-- --------------------------------------------------------

--
-- Struktur dari tabel `history`
--

CREATE TABLE `history` (
  `id` int(11) NOT NULL,
  `cashier_name` varchar(255) NOT NULL,
  `orders_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `invoice` varchar(20) NOT NULL,
  `ppn` double NOT NULL,
  `amount` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `history`
--

INSERT INTO `history` (`id`, `cashier_name`, `orders_date`, `invoice`, `ppn`, `amount`) VALUES
(296, 'meli', '2020-09-23 13:03:02', 'INV - 1600866183279', 6100, 61000),
(297, 'lola', '2020-09-23 13:07:22', 'INV - 1600866442872', 9900, 99000),
(298, 'jamilah', '2020-09-23 22:55:26', 'INV - 1600901726607', 4000, 40000),
(299, 'bambang', '2020-09-24 03:49:01', 'INV - 1600919342571', 18900, 189000);

-- --------------------------------------------------------

--
-- Struktur dari tabel `history_detail`
--

CREATE TABLE `history_detail` (
  `id` int(11) NOT NULL,
  `history_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `name_product` varchar(255) NOT NULL,
  `qty` int(11) NOT NULL,
  `price` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `history_detail`
--

INSERT INTO `history_detail` (`id`, `history_id`, `product_id`, `name_product`, `qty`, `price`) VALUES
(254, 296, 50, 'RedVelvet Latte', 1, 33000),
(255, 296, 52, 'Choco Rhum', 1, 28000),
(256, 297, 53, 'Black Forest ya', 1, 30000),
(257, 297, 91, 'Whiener Shnitezel', 1, 69000),
(258, 298, 49, 'Cappucino', 2, 5000),
(259, 298, 48, 'Coffe Late', 2, 15000),
(260, 299, 55, 'Chicken Katsu Dabu-dabu', 2, 60000),
(261, 299, 91, 'Whiener Shnitezel', 1, 69000);

-- --------------------------------------------------------

--
-- Struktur dari tabel `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `category_id` int(11) NOT NULL,
  `product_name` varchar(255) NOT NULL,
  `price` double NOT NULL,
  `image` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `product`
--

INSERT INTO `product` (`id`, `category_id`, `product_name`, `price`, `image`) VALUES
(47, 2, 'Expresso', 10000, 'image-1600851611835.png'),
(48, 2, 'Coffe Late', 15000, 'image-1600851917709.png'),
(49, 2, 'Cappucino', 5000, 'image-1600852234286.png'),
(50, 2, 'RedVelvet Latte', 33000, 'image-1600851947460.png'),
(52, 3, 'Choco Rhum', 28000, 'image-1600853037391.png'),
(53, 3, 'Black Forest ya', 30000, 'image-1600853459627.png'),
(55, 1, 'Chicken Katsu Dabu-dabu', 60000, 'image-1600853410440.png'),
(90, 1, 'Salmon Thruffle', 60000, 'image-1600853428665.png'),
(91, 1, 'Whiener Shnitezel', 69000, 'image-1600853536182.png'),
(92, 1, 'Salmon Truffle', 60005, 'image-1599691706252.png'),
(93, 1, 'Whiener Shnitezel', 65000, 'image-1599691745811.png'),
(156, 2, 'diki', 123456, 'image-1600893521285.png'),
(158, 3, 'dede', 123, 'image-1600901676050.png'),
(159, 1, 'risol', 30000, 'image-1600904386358.png');

-- --------------------------------------------------------

--
-- Struktur dari tabel `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `level` int(1) NOT NULL COMMENT '0=admin, 1=kasir',
  `is_active` int(1) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `refreshToken` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `users`
--

INSERT INTO `users` (`id`, `email`, `password`, `level`, `is_active`, `created_at`, `refreshToken`) VALUES
(19, 'dikif@gmail.com', '$2b$10$i92wY/zdW9ZYkBN/LmzhPeVKzqfab0NzCxbwOGSYP9Z5Q/HDEyBE6', 1, 1, '2020-09-18 17:00:09', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRpa2lmQGdtYWlsLmNvbSIsImlhdCI6MTYwMDMyMjU4NH0.28MUWnlv67kEhKz23JcJFSc4TnO4YrYLVwbGoJRy3d4'),
(20, 'dickyf148@gmail.com', '$2b$10$AAhzVtccgky9b1r89jZRsef5PEpCcU0Gmu8fQDpZoRhIfwgMbJCK2', 0, 1, '2020-09-24 02:57:50', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRpY2t5ZjE0OEBnbWFpbC5jb20iLCJpYXQiOjE2MDAzMTMxMzB9.XAZeXkOufLrjUA0YQzRZpSwhmC9dzaz3a0T4MM6D66c'),
(80, 'arah.gt08@gmail.com', '$2b$10$bKJf.1pbOgfz5bViEALlieyOJz7ZBVbB2D1dk8CihBgCbnrV4Bu.C', 0, 1, '2020-09-24 03:45:23', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ODAsImVtYWlsIjoiYXJhaC5ndDA4QGdtYWlsLmNvbSIsImxldmVsIjowLCJpYXQiOjE2MDA5MTkxMjN9.excaL3tdqu0zNVBeY4o5asi9uQkVg_633htseJa8d7I'),
(81, 'diki@gmail.com', '$2b$10$xM.Ic/N96x4bAaN4vdPTEef.nOqF7II2X30RpiCh0fSDCXx3B14.C', 0, 0, '2020-10-01 08:23:16', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `best_product`
--
ALTER TABLE `best_product`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `history`
--
ALTER TABLE `history`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `history_detail`
--
ALTER TABLE `history_detail`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_id` (`product_id`),
  ADD KEY `history_id` (`history_id`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`),
  ADD KEY `category_id` (`category_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `best_product`
--
ALTER TABLE `best_product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `history`
--
ALTER TABLE `history`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=300;
--
-- AUTO_INCREMENT for table `history_detail`
--
ALTER TABLE `history_detail`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=262;
--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=160;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=82;
--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `history_detail`
--
ALTER TABLE `history_detail`
  ADD CONSTRAINT `history_detail_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `history_detail_ibfk_2` FOREIGN KEY (`history_id`) REFERENCES `history` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ketidakleluasaan untuk tabel `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `product_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
