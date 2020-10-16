--
create table client (
  id bigserial primary key,
  full_name varchar(255) unique not null,
  full_address varchar(255) unique not null,
  salary int not null,
  full_password varchar(255) not null,
  job_title varchar(255) not null,
  supervisor bigint not null references client(id) ON DELETE CASCADE,
  attendance_logs jsonb not null,
  email varchar(255) unique not null,
);
--
create table department (
  id bigserial primary key,
  full_name varchar(255) unique not null,
  full_address varchar(255) unique not null,
);
-- 
create TABLE client_task (
  id bigserial primary key,
  client_id bigint not null references client(id) ON DELETE CASCADE,
  department_id bigint not null references department(id) ON DELETE CASCADE,
);