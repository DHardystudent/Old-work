DROP DATABASE IF EXISTS corporation;

CREATE DATABASE corporation;

CREATE TABLE dept(
deptName varchar(25),
mgrId int(9),
primary key (deptName)
);

CREATE TABLE worker(
empId int(9),
empLName char(12),
empFName char(12),
deptName varchar(25),
birthdate date,
dateHired date,
salary int(11),
primary key (empId),
foreign key (deptName) references dept(deptName)
);

CREATE TABLE project(
projNo int(11),
projName varchar(20),
projMgrId int(9),
budget int(11),
startDate int(11),
expectedDuration int(11),
primary key (projNo),
foreign key (projMgrId) references worker(empId)
);

CREATE TABLE assign(
projNo int(11),
empId int(9),
hours int(2),
rating int(1),
foreign key (projNo) references project(projNo),
foreign key (empId) references worker(empId)
);

ALTER TABLE `dept` ADD CONSTRAINT `DeptMgfk` FOREIGN KEY (`mgrId`) REFERENCES `worker`(`empId`) ON DELETE RESTRICT ON UPDATE CASCADE;

INSERT INTO Dept VALUES ('Accounting',null);
INSERT INTO Dept VALUES ('Research',null);
INSERT INTO Worker VALUES(101,'Smith','Tom', 'Accounting', '01-Feb-1970', '06-Jun-1993 ',50000);
INSERT INTO Worker VALUES(103,'Jones','Mary','Accounting', '15-Jun-1975', '20-Sep-2005',48000);
INSERT INTO Worker VALUES(110,'Burns','Jane','Accounting', '21-Sep-1980', '12-Jun-2000',39000);
INSERT INTO Worker VALUES(105,'Burns','Michael', 'Research', '05-Apr-1977', '10-Sep-
2010',70000);
INSERT INTO Worker VALUES(115,'Chin','Amanda', 'Research', '22-Sep-1980', '19-Jun-2014',60000);
UPDATE Dept SET mgrId = 101 WHERE deptName = 'Accounting';
UPDATE Dept SET mgrId = 110 WHERE deptName = 'Research';
INSERT INTO Project VALUES (1001, 'Jupiter', 101, 300000, '01-Feb-2018', 50);
INSERT INTO Project VALUES (1005, 'Saturn', 101, 400000, '01-Jun-2018', 35);
INSERT INTO Project VALUES (1019, 'Mercury', 110, 350000, '15-Feb-2018', 40);
INSERT INTO Project VALUES (1025, 'Neptune', 110, 600000, '01-Feb-2017', 45);
INSERT INTO Project VALUES (1030, 'Pluto', 110, 380000, '15-Sep-2018', 50);
INSERT INTO Assign VALUES(1001, 101, 30,null);
INSERT INTO Assign VALUES(1019, 103, 20,5);
INSERT INTO Assign VALUES(1005, 103, 20,null);
INSERT INTO Assign VALUES(1001, 105, 30,null);
INSERT INTO Assign VALUES(1001, 115, 20,4);
INSERT INTO Assign VALUES(1019, 110, 20,5);
INSERT INTO Assign VALUES(1019, 115, 10,4);
INSERT INTO Assign VALUES(1001, 110, 10,null);
INSERT INTO Assign VALUES(1030, 110, 10,null);