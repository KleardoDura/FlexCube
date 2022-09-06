-- Create table
create table STTM_KLEI3_DETAILS
(
  field_description     VARCHAR2(35) not null,
  mandatory_validations VARCHAR2(35) not null,
  customer_type         VARCHAR2(35) not null,
  customer_category     VARCHAR2(35) not null
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
alter table STTM_KLEI3_DETAILS
  add constraint PK3 primary key (FIELD_DESCRIPTION)
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
alter table STTM_KLEI3_DETAILS
  add constraint FK2 foreign key (CUSTOMER_TYPE, CUSTOMER_CATEGORY)
  references STTM_KLEI3 (CUSTOMER_TYPE, CUSTOMER_CATEGORY);
