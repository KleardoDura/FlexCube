-- Create table
create table STTM_KLEI2
(
  relationship        VARCHAR2(35) not null,
  description         VARCHAR2(255),
  category            VARCHAR2(35),
  product_restriction VARCHAR2(35),
  auth_stat           CHAR(1),
  record_stat         CHAR(1),
  mod_no              NUMBER,
  checker_id          VARCHAR2(12),
  once_auth           VARCHAR2(1),
  maker_id            VARCHAR2(12),
  maker_dt_stamp      TIMESTAMP(6),
  checker_dt_stamp    TIMESTAMP(6)
)
tablespace USERS
  pctfree 10
  initrans 1
  maxtrans 255
  storage
  (
    initial 64K
    next 1M
    minextents 1
    maxextents unlimited
  );
-- Create/Recreate primary, unique and foreign key constraints 
alter table STTM_KLEI2
  add constraint PK_D primary key (RELATIONSHIP)
  using index 
  tablespace USERS
  pctfree 10
  initrans 2
  maxtrans 255
  storage
  (
    initial 64K
    next 1M
    minextents 1
    maxextents unlimited
  );
