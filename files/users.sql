CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `password` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `age` int NOT NULL DEFAULT '0',
  `status` tinyint(1) NOT NULL DEFAULT '0',
  `nickname` varchar(45) DEFAULT NULL,
  `user_pic` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `users` (`id`, `username`, `password`, `age`, `status`) VALUES (1, '张三', '123456', 35, 0);
INSERT INTO `users` (`id`, `username`, `password`, `age`, `status`) VALUES (2, '李四', 'qwert', 18, 0);
INSERT INTO `users` (`id`, `username`, `password`, `age`, `status`) VALUES (3, '王五', 'abc', 9, 0);
