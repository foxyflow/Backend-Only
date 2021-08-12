CREATE TABLE IF NOT EXISTS `projects_assign4` (
  id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  projectname varchar(255) NOT NULL,
  projectdesc varchar(255) NOT NULL,
  startdate varchar(255) NOT NULL,
  enddate  varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `projects_assign4` (`id`, `projectname`, `projectdesc`, `startdate`, `enddate`) 
VALUES (NULL, 'Library Management System', 'Library management is a project that manages and stores books information electronically according to students needs',
'2021-01-01 09:00', '2021-01-31 24:00');

INSERT INTO `projects_assign4` (`id`, `projectname`, `projectdesc`, `startdate`, `enddate`) 
VALUES (NULL, 'CRM System', 'CRM (Customer Relationship Management) systems help businesses organize relationships with their customers',
'2020-02-01 08:00', '2020-09-30 09:00');

INSERT INTO `projects_assign4` (`id`, `projectname`, `projectdesc`, `startdate`, `enddate`) 
VALUES (NULL, 'Online Charity Management System', 'This charity management system will help NGOs to find donors easily',
'2021-02-01 01:00', '2022-02-28 01:00');

INSERT INTO `projects_assign4` (`id`, `projectname`, `projectdesc`, `startdate`, `enddate`) 
VALUES (NULL, 'Visitor Indicator System', 'This doorbell cum visitor indicator circuit can give identification of the visitor to your home in your absence',
'2019-07-09 07:00', '2020-01-31 10:00');

INSERT INTO `projects_assign4` (`id`, `projectname`, `projectdesc`, `startdate`, `enddate`) 
VALUES (NULL, 'E-Commerce Website for Visually Impaired', 'An ecommerce website is developed to assist blind people that automatically recognizes clothing patterns and colours',
'2021-01-01 12:00', '2021-05-05 12:00');