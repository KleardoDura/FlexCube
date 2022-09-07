-- Create table
create table STTM_KLEI2_DETAILS
(
  product_code VARCHAR2(35) not null,
  relationship VARCHAR2(35) not null
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
alter table STTM_KLEI2_DETAILS
  add constraint PK primary key (PRODUCT_CODE)
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
alter table STTM_KLEI2_DETAILS
  add constraint FK foreign key (RELATIONSHIP)
  references STTM_KLEI2 (RELATIONSHIP);
