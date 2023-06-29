DROP DATABASE IF EXISTS horseRacing;

CREATE DATABASE horseRacing;

CREATE TABLE barn(
bId int(4) not null,
bName char(20),
primary key (bId)
);

CREATE TABLE person(
pId int(11),
pName char(20),
pPhone varchar(12),
pAddress varchar(30),
primary key (pId)
);

CREATE TABLE racehorse(
regNum int(11),
hName char(20),
gender char(6),
typeh char(20),
purchaseDate date, 
purchasePrice int(11),
trainedBy int(11),
stableAt int(11),
primary key (regNum),
foreign key (trainedBy) references person(pId),
foreign key (stableAt) references barn(bId)
);

CREATE TABLE raceschedule(
sId int(11),
year varchar(4),
month varchar(2),
day varchar(2),
primary key (sId)
);

CREATE TABLE race(
sId int(11),
rNumber int(11),
purse int(11),
primary key (rNumber),
foreign key (sId) references raceschedule(sId)
);

CREATE TABLE entry(
sId int(11),
rNumber int(11),
gate int(11),
finalPos int(11),
jockey int(11),
regNum int(11),
primary key (gate),
foreign key (sId) references race(rNumber),
foreign key (rNumber) references race(rNumber),
foreign key (regNum) references racehorse(regNum)
);

CREATE TABLE offspring(
regNum int(11),
parent int(11),
foreign key (regNum) references racehorse(regNum),
foreign key (parent) references offspring(regNum)
);

CREATE TABLE owneedby(
regNum int(11),
pId int(11),
percentage int(11),
foreign key (regNum) references racehorse(regNum),
foreign key (pId) references person(pId)
);
