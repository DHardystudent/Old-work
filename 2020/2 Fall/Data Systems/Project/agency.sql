/* Devin Hardy */

DROP DATABASE IF EXISTS agency;

CREATE DATABASE agency;

CREATE TABLE pWorker(
sSN varChar(11),
fName char(12),
mName char(12),
lName char(12),
address1 varChar(30),
address2 varChar(30),
addressCity char(20),
addressZip varChar(5),
telephone varChar(12),
educationLevel char(20),
field char(4),
institute char(40),
grantYear varChar(4),
skillName char(20),
skillLevel char(20),
dateAvailable varChar(12),
timeAvailable varChar(8),
rating varChar(2),
primary key (sSN)
);

CREATE TABLE personnelDirector(
interviewDate varChar(12),
interviewTime varChar(8),
intName char(20),
intSSN varChar(11),
jobType char(20),
jobLevel char(10),
foreign key (intSSN) references pWorker(sSN)
);

CREATE TABLE employer(
iD varChar(11),
fName char(12),
mName char(12),
lName char(12),
telephone varChar(12),
address1 varChar(30),
address2 varChar(30),
addressCity char(20),
addressZip varChar(5),
contact char(20),
primary key (iD)
);

CREATE TABLE job(
jobNo varChar(4),
jobTitle char(20),
jobLevel char(10),
skillName char(20),
skillLevel char(20),
jobDay char(10),
startHour varChar(10),
endHour varChar(10),
clientID varChar(11),
primary key (jobNo),
foreign key (clientID) references employer(iD)
);

CREATE TABLE wCInterview(
wSSN varChar(11),
cID varChar(11),
jobID varChar(4),
iDate varChar(12),
outcome char(20),
foreign key (wSSN) references pWorker(sSN),
foreign key (cID) references employer(iD),
foreign key (jobID) references job(jobNo)
);

CREATE TABLE evaluation(
wSSN varChar(11),
jobID varChar(20),
evalDate varChar(12),
raterName char(20),
rating int(1),
eComment char(50),
foreign key (wSSN) references pWorker(sSN),
foreign key (jobID) references job(jobNo)
);

CREATE TABLE bill(
clientID char(20),
billNo varChar(6),
billDate varChar(12),
amountBill varChar(10),
primary key (billNo),
foreign key (clientID) references employer(iD)
);

CREATE TABLE payroll(
checkNo int,
workerSSN varChar(11),
daysWorked varChar(2),
hourlyPay varChar(7),
grossPay varChar(10),
taxesWithheld varChar(10),
netPay varChar(10),
ytDateGrossPay varChar(10),
ytDateTaxes varChar(10),
ytDateNetPay varChar(10),
primary key (checkNo),
foreign key (workerSSN) references pWorker(sSN)
);

