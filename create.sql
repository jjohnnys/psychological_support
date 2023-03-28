drop table ps.support;
drop table ps.financial;
drop table ps.patient;
drop table ps.payment;

create table ps.patient(
	id_patient text,
	name text,
	age integer,
	rg text,
	cpf text,
	package text,
	price numeric,
	observation text
);

insert into ps.patient (id_patient, name, age, rg, cpf, package, price) values (1, 'Seiya', 28, '87.986.985-8', '899.645.967-56', 'avulso', 100);
insert into ps.patient (id_patient, name, age, rg, cpf, package, price) values (2, 'June', 20, '56.326.412-8', '452.459.852-11', 'mensal', 380);

create table ps.support (
	id_support integer,
	patient text,
	day date,
	start_time time,
	end_time time
);

insert into ps."support" (id_support, patient, day, start_time, end_time)
values (1, 'Seiya', '06-02-2023', '18:00:00', '19:00:00');

insert into ps."support" (id_support, patient, day, start_time, end_time)
values (2, 'Seiya', '13-02-2023', '18:00:00', '19:00:00');

insert into ps."support" (id_support, patient, day, start_time, end_time)
values (3, 'Seiya', '20-02-2023', '18:00:00', '19:00:00');

insert into ps."support" (id_support, patient, day, start_time, end_time)
values (4, 'Seiya', '27-02-2023', '18:00:00', '19:00:00');

insert into ps."support" (id_support, patient, day, start_time, end_time)
values (5, 'June', '13-02-2023', '17:00:00', '18:00:00');

insert into ps."support" (id_support, patient, day, start_time, end_time)
values (6, 'June', '20-02-2023', '17:00:00', '18:00:00');

create table ps.payment(
	id_payment text,
	patient text,
	date_payment timestamp,
	value_payment numeric
);

insert into ps.payment(id_payment, patient, date_payment, value_payment) values ('skaspo', 'Saori', '13-02-2023', 380);
insert into ps.payment(id_payment, patient, date_payment, value) values (1, 'June', '13-02-2023', 100);
insert into ps.payment(id_payment, patient, date_payment, value) values (2, 'June', '20-02-2023', 100);
insert into ps.payment(id_payment, patient, date_payment, value) values (3, 'Seiya', '27-02-2023', 280);
insert into ps.payment(id_payment, patient, date_payment, value) values (4, 'June', '20-01-2023', 100);

create table ps.financial (
	id_financial integer,
	patient text,
	price integer,
	year integer,
	month integer
);

