-- Create table
create table LOV_EXPOSURE_CATEGORY_KLEI
(
  exposure_category VARCHAR2(35)
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
