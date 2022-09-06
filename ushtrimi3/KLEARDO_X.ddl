-- Create table
create table KLEARDO_X
(
  customer_id           NUMBER not null,
  customer_type         VARCHAR2(35),
  customer_category     VARCHAR2(35),
  field_description     VARCHAR2(35),
  mandatory_validations VARCHAR2(35)
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
alter table KLEARDO_X
  add constraint PK1 primary key (CUSTOMER_ID)
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
