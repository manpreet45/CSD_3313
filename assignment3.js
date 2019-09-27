const sqlite3=require ('sqlite3').verbose();

create database Assign3;
use Assign3;
CREATE TABLE students
(
studid VARCHAR (20),
studname VARCHAR(20),
programgroup VARCHAR(20)
);

CREATE TABLE classes
(
classid VARCHAR (20),
classname VARCHAR(20),
classroom VARCHAR(20),
datesession VARCHAR(20)
);

CREATE TABLE enrollment
(
enrolment VARCHAR (20),
studid VARCHAR(20),
classid VARCHAR(20)
);

use Assign3;

insert into students (studid,studname,programgroup)
values ('1','Susan','CSAT');

use Assign3;

insert into classes (classid,classname,classroom,datesession)
values ('C104','JAVA','B230','THU AM');

insert into enrollment (enrolment,studid,classid)
values ('E1','1','C104');
