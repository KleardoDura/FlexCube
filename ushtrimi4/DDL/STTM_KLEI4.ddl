-- Create table
create table STTM_KLEI4
(
  reference        VARCHAR2(35) not null,
  description      VARCHAR2(35),
  customer_no      VARCHAR2(9) not null,
  customer_name    VARCHAR2(105),
  phone_no         VARCHAR2(105),
  e_mail           VARCHAR2(255),
  priority         VARCHAR2(7),
  amount           NUMBER,
  ccy              VARCHAR2(3),
  acc_no           VARCHAR2(20),
  date1            DATE,
  auth_stat        CHAR(1),
  record_stat      CHAR(1),
  mod_no           NUMBER,
  checker_id       VARCHAR2(12),
  once_auth        VARCHAR2(1),
  maker_id         VARCHAR2(12),
  maker_dt_stamp   TIMESTAMP(6),
  checker_dt_stamp TIMESTAMP(6)
)
tablespace USERS
  pctfree 10
  initrans 1
  maxtrans 255;
-- Create/Recreate primary, unique and foreign key constraints 
alter table STTM_KLEI4
  add primary key (REFERENCE)
  using index 
  tablespace USERS
  pctfree 10
  initrans 2
  maxtrans 255;
