-- Create table
create table STTM_KLEI4_DETAILS
(
  id             NUMBER not null,
  subject        VARCHAR2(35),
  description_dt VARCHAR2(35),
  user_id        VARCHAR2(35),
  date1          DATE,
  reference      VARCHAR2(35)
)
tablespace USERS
  pctfree 10
  initrans 1
  maxtrans 255;
-- Create/Recreate primary, unique and foreign key constraints 
alter table STTM_KLEI4_DETAILS
  add primary key (ID)
  using index 
  tablespace USERS
  pctfree 10
  initrans 2
  maxtrans 255;
alter table STTM_KLEI4_DETAILS
  add constraint FK_3 foreign key (REFERENCE)
  references STTM_KLEI4 (REFERENCE);
