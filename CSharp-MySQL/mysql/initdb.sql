USE space_station_CSharp
INSERT INTO Users (
        `id`,
        `name`,
        `surname`,
        `email`,
        `positionTypeId`,
        `manager`
    )
VALUES (
        '1',
        'Lois',
        'Lane',
        'Lois.Lane@firm.com',
        '1',
        '1'
    );
INSERT INTO Users (
        `id`,
        `name`,
        `surname`,
        `email`,
        `positionTypeId`,
        `manager`
    )
VALUES (
        '2',
        'Clark',
        'Kent',
        'Clark.Kent@firm.com',
        '2',
        '1'
    );
INSERT INTO Users (
        `id`,
        `name`,
        `surname`,
        `email`,
        `positionTypeId`,
        `manager`
    )
VALUES (
        '3',
        'Ralph',
        'Kramden',
        'Ralph.Kramden@firm.com',
        '3',
        '1'
    );
INSERT INTO Users (
        `id`,
        `name`,
        `surname`,
        `email`,
        `positionTypeId`,
        `manager`
    )
VALUES (
        '4',
        'Alice',
        'Kramden',
        'Alice.Kramden@firm.com',
        '4',
        '1'
    );
INSERT INTO Users (
        `id`,
        `name`,
        `surname`,
        `email`,
        `positionTypeId`,
        `manager`
    )
VALUES (
        '5',
        'Holly',
        'Golightly',
        'Holly.Golightly@firm.com',
        '5',
        '1'
    );
INSERT INTO Users (
        `id`,
        `name`,
        `surname`,
        `email`,
        `positionTypeId`,
        `manager`
    )
VALUES (
        '6',
        'Liza',
        'Doolittle',
        'Liza.Doolittle@firm.com',
        '6',
        '1'
    );
INSERT INTO Users (
        `id`,
        `name`,
        `surname`,
        `email`,
        `positionTypeId`,
        `manager`
    )
VALUES (
        '7',
        'Henry',
        'Higgins',
        'Henry.Higgins@firm.com',
        '1',
        '0'
    );
INSERT INTO Users (
        `id`,
        `name`,
        `surname`,
        `email`,
        `positionTypeId`,
        `manager`
    )
VALUES (
        '8',
        'Joseph',
        'Arimathea',
        'Joseph.Arimathea@firm.com',
        '2',
        '0'
    );
INSERT INTO Users (
        `id`,
        `name`,
        `surname`,
        `email`,
        `positionTypeId`,
        `manager`
    )
VALUES (
        '9',
        'Mary',
        'Magdalene',
        'Mary.Magdalene@firm.com',
        '3',
        '0'
    );
INSERT INTO Users (
        `id`,
        `name`,
        `surname`,
        `email`,
        `positionTypeId`,
        `manager`
    )
VALUES (
        '10',
        'Simon',
        'Cyrene',
        'Simon.Cyrene@firm.com',
        '4',
        '0'
    );
INSERT INTO Users (
        `id`,
        `name`,
        `surname`,
        `email`,
        `positionTypeId`,
        `manager`
    )
VALUES (
        '11',
        'Dixie',
        'Normous',
        'Dixie.Normous@firm.com',
        '5',
        '0'
    );
INSERT INTO Users (
        `id`,
        `name`,
        `surname`,
        `email`,
        `positionTypeId`,
        `manager`
    )
VALUES (
        '12',
        'Felicity',
        'Shagwell',
        'Felicity.Shagwell@firm.com',
        '6',
        '0'
    );
INSERT INTO Users (
        `id`,
        `name`,
        `surname`,
        `email`,
        `positionTypeId`,
        `manager`
    )
VALUES (
        '13',
        'Ivana',
        'Humpalot',
        'Ivana.Humpalot@firm.com',
        '1',
        '0'
    );
INSERT INTO Users (
        `id`,
        `name`,
        `surname`,
        `email`,
        `positionTypeId`,
        `manager`
    )
VALUES (
        '14',
        'Plenty',
        'OToole',
        'Plenty.OToole@firm.com',
        '2',
        '0'
    );
INSERT INTO Users (
        `id`,
        `name`,
        `surname`,
        `email`,
        `positionTypeId`,
        `manager`
    )
VALUES (
        '15',
        'Tiffany',
        'Case',
        'Tiffany.Case@firm.com',
        '3',
        '0'
    );
INSERT INTO Users (
        `id`,
        `name`,
        `surname`,
        `email`,
        `positionTypeId`,
        `manager`
    )
VALUES (
        '16',
        'Shady',
        'Tree',
        'Shady.Tree@firm.com',
        '4',
        '0'
    );
INSERT INTO Users (
        `id`,
        `name`,
        `surname`,
        `email`,
        `positionTypeId`,
        `manager`
    )
VALUES (
        '17',
        'Kissy',
        'Suzuki ',
        'Kissy.Suzuki@firm.com',
        '5',
        '0'
    );
INSERT INTO Users (
        `id`,
        `name`,
        `surname`,
        `email`,
        `positionTypeId`,
        `manager`
    )
VALUES (
        '18',
        'Honey',
        'Ryder',
        'Honey.Ryder@firm.com',
        '6',
        '0'
    );
INSERT INTO Missions (`id`, `startDate`, `endDate`)
VALUES ('1', '2021-12-30', '2022-02-24');
INSERT INTO Missions (`id`, `startDate`, `endDate`)
VALUES ('2', '2022-02-24', '2022-04-20');
INSERT INTO Reports (
        `id`,
        `title`,
        `submitDate`,
        `endDate`,
        `description`,
        `reportingUserId`,
        `reportTypeId`,
        `ReportstatusId`
    )
VALUES (
        '1',
        'Heating not working',
        '2021-12-30',
        '2021-12-30',
        'Heating not working in my room',
        '1',
        '1',
        '1'
    );
INSERT INTO Reports (
        `id`,
        `title`,
        `submitDate`,
        `endDate`,
        `description`,
        `reportingUserId`,
        `reportTypeId`,
        `ReportstatusId`
    )
VALUES (
        '2',
        'Air filters',
        '2021-12-31',
        '2021-12-31',
        'Air filters due to change in rooms 1-12',
        '4',
        '2',
        '1'
    );
INSERT INTO Reports (
        `id`,
        `title`,
        `submitDate`,
        `endDate`,
        `description`,
        `reportingUserId`,
        `reportTypeId`,
        `ReportstatusId`
    )
VALUES (
        '3',
        'Health test',
        '2021-12-30',
        '2021-12-30',
        'Health tests',
        '2',
        '3',
        '1'
    );
INSERT INTO Incidents (`UserId`, `reportId`)
VALUES ('9', '1');
INSERT INTO Incidents (`UserId`, `reportId`)
VALUES ('15', '2');
INSERT INTO Incidents (`UserId`, `reportId`)
VALUES ('12', '3');
INSERT INTO MissionCrew (`userId`, `missionId`)
VALUES ('1', '1');
INSERT INTO MissionCrew (`userId`, `missionId`)
VALUES ('2', '1');
INSERT INTO MissionCrew (`userId`, `missionId`)
VALUES ('3', '1');
INSERT INTO MissionCrew (`userId`, `missionId`)
VALUES ('4', '1');
INSERT INTO MissionCrew (`userId`, `missionId`)
VALUES ('6', '1');
INSERT INTO MissionCrew (`userId`, `missionId`)
VALUES ('7', '2');
INSERT INTO MissionCrew (`userId`, `missionId`)
VALUES ('8', '2');
INSERT INTO MissionCrew (`userId`, `missionId`)
VALUES ('9', '1');
INSERT INTO MissionCrew (`userId`, `missionId`)
VALUES ('12', '1');
INSERT INTO MissionCrew (`userId`, `missionId`)
VALUES ('13', '1');
INSERT INTO MissionCrew (`userId`, `missionId`)
VALUES ('14', '2');
INSERT INTO MissionCrew (`userId`, `missionId`)
VALUES ('15', '1');
INSERT INTO MissionCrew (`userId`, `missionId`)
VALUES ('16', '2');
INSERT INTO MissionCrew (`userId`, `missionId`)
VALUES ('18', '1');