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
describe_ VARCHAR(1000) NOT NULL,
category VARCHAR(20) NOT NULL,
public_or_private BOOLEAN DEFAULT 0,
current_reps INT NOT NULL,
currenttime INT NOT NULL,
target_reps INT NOT NULL,
target_time INT NOT NULL,
target_date DATE NOT NULL,
complete_or_not BOOLEAN DEFAULT FALSE,
expired BOOLEAN NOT NULL DEFAULT 0
);


CREATE TABLE Past(
pno INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
owner VARCHAR(20) NOT NULL,
task VARCHAR(50) NOT NULL,
describe_ VARCHAR(1000) NOT NULL,
category VARCHAR(20) NOT NULL,
public_or_private BOOLEAN NOT NULL DEFAULT 0,
reps INT NOT NULL,
time INT NOT NULL,
target_reps INT NOT NULL,
target_time INT NOT NULL,
date DATE NOT NULL,
complete_or_not BOOLEAN NOT NULL DEFAULT 0
);

CREATE TABLE Statistics(
sno INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
date DATE NOT NULL, 
category VARCHAR(20) NOT NULL,
most_reps INT NOT NULL,
most_time INT NOT NULL,
total_reps INT NOT NULL,
total_time INT NOT NULL,
number_of_participants INT NOT NULL,
number_of_completes INT NOT NULL 
);
