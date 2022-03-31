USE space_station
INSERT INTO users (
        `id`,
        `name`,
        `surname`,
        `email`,
        `position_type_id`,
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
INSERT INTO users (
        `id`,
        `name`,
        `surname`,
        `email`,
        `position_type_id`,
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
INSERT INTO users (
        `id`,
        `name`,
        `surname`,
        `email`,
        `position_type_id`,
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
INSERT INTO users (
        `id`,
        `name`,
        `surname`,
        `email`,
        `position_type_id`,
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
INSERT INTO users (
        `id`,
        `name`,
        `surname`,
        `email`,
        `position_type_id`,
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
INSERT INTO users (
        `id`,
        `name`,
        `surname`,
        `email`,
        `position_type_id`,
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
INSERT INTO users (
        `id`,
        `name`,
        `surname`,
        `email`,
        `position_type_id`,
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
INSERT INTO users (
        `id`,
        `name`,
        `surname`,
        `email`,
        `position_type_id`,
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
INSERT INTO users (
        `id`,
        `name`,
        `surname`,
        `email`,
        `position_type_id`,
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
INSERT INTO users (
        `id`,
        `name`,
        `surname`,
        `email`,
        `position_type_id`,
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
INSERT INTO users (
        `id`,
        `name`,
        `surname`,
        `email`,
        `position_type_id`,
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
INSERT INTO users (
        `id`,
        `name`,
        `surname`,
        `email`,
        `position_type_id`,
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
INSERT INTO users (
        `id`,
        `name`,
        `surname`,
        `email`,
        `position_type_id`,
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
INSERT INTO users (
        `id`,
        `name`,
        `surname`,
        `email`,
        `position_type_id`,
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
INSERT INTO users (
        `id`,
        `name`,
        `surname`,
        `email`,
        `position_type_id`,
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
INSERT INTO users (
        `id`,
        `name`,
        `surname`,
        `email`,
        `position_type_id`,
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
INSERT INTO users (
        `id`,
        `name`,
        `surname`,
        `email`,
        `position_type_id`,
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
INSERT INTO users (
        `id`,
        `name`,
        `surname`,
        `email`,
        `position_type_id`,
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
INSERT INTO missions (`id`, `start_date`, `end_date`)
VALUES ('1', '2021-12-30', '2022-02-24');
INSERT INTO missions (`id`, `start_date`, `end_date`)
VALUES ('2', '2022-02-24', '2022-04-20');
INSERT INTO reports (
        `id`,
        `title`,
        `submit_date`,
        `end_date`,
        `description`,
        `reporting_user_id`,
        `report_type_id`,
        `report_status_id`
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
INSERT INTO reports (
        `id`,
        `title`,
        `submit_date`,
        `end_date`,
        `description`,
        `reporting_user_id`,
        `report_type_id`,
        `report_status_id`
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
INSERT INTO reports (
        `id`,
        `title`,
        `submit_date`,
        `end_date`,
        `description`,
        `reporting_user_id`,
        `report_type_id`,
        `report_status_id`
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
INSERT INTO incidents (`operating_user_id`, `report_id`)
VALUES ('9', '1');
INSERT INTO incidents (`operating_user_id`, `report_id`)
VALUES ('15', '2');
INSERT INTO incidents (`operating_user_id`, `report_id`)
VALUES ('12', '3');
INSERT INTO mission_crew (`user_id`, `mission_id`)
VALUES ('1', '1');
INSERT INTO mission_crew (`user_id`, `mission_id`)
VALUES ('2', '1');
INSERT INTO mission_crew (`user_id`, `mission_id`)
VALUES ('3', '1');
INSERT INTO mission_crew (`user_id`, `mission_id`)
VALUES ('4', '1');
INSERT INTO mission_crew (`user_id`, `mission_id`)
VALUES ('6', '1');
INSERT INTO mission_crew (`user_id`, `mission_id`)
VALUES ('7', '2');
INSERT INTO mission_crew (`user_id`, `mission_id`)
VALUES ('8', '2');
INSERT INTO mission_crew (`user_id`, `mission_id`)
VALUES ('9', '1');
INSERT INTO mission_crew (`user_id`, `mission_id`)
VALUES ('12', '1');
INSERT INTO mission_crew (`user_id`, `mission_id`)
VALUES ('13', '1');
INSERT INTO mission_crew (`user_id`, `mission_id`)
VALUES ('14', '2');
INSERT INTO mission_crew (`user_id`, `mission_id`)
VALUES ('15', '1');
INSERT INTO mission_crew (`user_id`, `mission_id`)
VALUES ('16', '2');
INSERT INTO mission_crew (`user_id`, `mission_id`)
VALUES ('18', '1');