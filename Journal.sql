create database Journal;

use Journal;

CREATE TABLE Member(
mno INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
id VARCHAR(20) NOT NULL,
pw VARCHAR(30) NOT NULL,
nickname VARCHAR(20) NOT NULL
);

CREATE TABLE Aim(
ano INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
owner VARCHAR(20) NOT NULL,
task VARCHAR(50) NOT NULL,
describe VARCHAR(1000) NOT NULL,
category VARCHAR(20) NOT NULL,
public_or_private VARCHAR(20) NOT NULL,
current_reps INT NOT NULL,
currenttime TIME NOT NULL,
target_reps INT NOT NULL,
target_time TIME NOT NULL,
target_date DATE NOT NULL,
complete_or_not VARCHAR(20) NOT NULL,
expired VARCHAR(20) NOT NULL
);


CREATE TABLE Past(
pno INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
owner VARCHAR(20) NOT NULL,
task VARCHAR(50) NOT NULL,
describe VARCHAR(1000) NOT NULL,
category VARCHAR(20) NOT NULL,
public_or_private VARCHAR(20) NOT NULL,
reps INT NOT NULL,
time TIME NOT NULL,
target_reps INT NOT NULL,
target_time TIME NOT NULL,
date DATE NOT NULL,
complete_or_not VARCHAR(20) NOT NULL
);

CREATE TABLE Statistics(
sno INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
date DATE NOT NULL, 
category VARCHAR(20) NOT NULL,
most_reps INT NOT NULL,
most_time TIME NOT NULL,
total_reps INT NOT NULL,
total_time TIME NOT NULL,
number_of_participants INT NOT NULL,
number_of_completes INT NOT NULL 
);