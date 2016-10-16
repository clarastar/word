


SET NAMES UTF8;
DROP DATABASE IF EXISTS com;
CREATE DATABASE com CHARSET=UTF8;
USE com;
CREATE TABLE com_user(
  uid INT PRIMARY KEY AUTO_INCREMENT, 
  uname VARCHAR(32),
  upwd VARCHAR(32),
  uemail VARCHAR(64)
);
INSERT INTO com_user VALUES
('1','clara','889020',"clarastar1788@gmail.com"),
('2','tony','880921',"qddxct@gmail.com");

CREATE TABLE com_save_box(
  cid INT PRIMARY KEY AUTO_INCREMENT,
  userID INT
);

INSERT INTO com_save_box VALUES
(1, 1),
(2, 2);

CREATE TABLE com_save_box_detail(
  cbid  INT PRIMARY KEY AUTO_INCREMENT,
  com_save_box_ID INT,
  com_word_ID INT
);

INSERT INTO com_save_box_detail VALUES
(NULL, 1, 1),
(NULL, 1, 2),
(NULL, 1, 3),
(NULL, 1, 4),
(NULL, 1, 5),
(NULL, 1, 6),
(NULL, 1, 7),
(NULL, 1, 8),
(NULL, 1, 9),
(NULL, 1, 10),
(NULL, 1, 12),
(NULL, 1, 13),
(NULL, 1, 14),
(NULL, 1, 15),
(NULL, 1, 16),
(NULL, 1, 17),
(NULL, 1, 18),
(NULL, 1, 19),
(NULL, 1, 20),
(NULL, 1, 21),
(NULL, 1, 22),
(NULL, 2, 23),
(NULL, 2, 23);

CREATE TABLE com_word(
  cwid INT PRIMARY KEY AUTO_INCREMENT,
  cname VARCHAR(64),
  cmean VARCHAR(64)
);

INSERT INTO com_word VALUES
(null,'interval','间隔,区间'),
(null,'interval','间隔,区间'),
(null,'interval','间隔,区间'),
(null,'interval','间隔,区间'),
(null,'interval','间隔,区间'),
(null,'interval','间隔,区间'),
(null,'interval','间隔,区间'),
(null,'interval','间隔,区间'),
(null,'interval','间隔,区间'),
(null,'interval','间隔,区间'),
(null,'interval','间隔,区间'),
(null,'interval','间隔,区间'),
(null,'interval','间隔,区间'),
(null,'interval','间隔,区间'),
(null,'interval','间隔,区间'),
(null,'interval','间隔,区间'),
(null,'interval','间隔,区间'),
(null,'interval','间隔,区间'),
(null,'interval','间隔,区间'),
(null,'interval','间隔,区间'),
(null,'interval','间隔,区间'),
(null,'interval','间隔,区间'),
(null,'interval','间隔,区间'),
(null,'interval','间隔,区间'),
(null,'interval','间隔,区间'),
(null,'interval','间隔,区间'),
(null,'interval','间隔,区间'),
(null,'interval','间隔,区间'),
(null,'interval','间隔,区间'),
(null,'interval','间隔,区间'),
(null,'interval','间隔,区间'),
(null,'interval','间隔,区间'),
(null,'interval','间隔,区间'),
(null,'interval','间隔,区间'),
(null,'interval','间隔,区间'),
(null,'interval','间隔,区间'),
(null,'interval','间隔,区间'),
(null,'interval','间隔,区间'),
(null,'interval','间隔,区间'),
(null,'interval','间隔,区间'),
(null,'interval','间隔,区间'),
(null,'interval','间隔,区间'),
(null,'interval','间隔,区间'),
(null,'interval','间隔,区间'),
(null,'interval','间隔,区间'),
(null,'interval','间隔,区间'),
(null,'interval','间隔,区间'),
(null,'interval','间隔,区间'),
(null,'interval','间隔,区间'),
(null,'interval','间隔,区间'),
(null,'interval','间隔,区间'),
(null,'interval','间隔,区间'),
(null,'interval','间隔,区间'),
(null,'interval','间隔,区间'),
(null,'interval','间隔,区间'),
(null,'interval','间隔,区间');


