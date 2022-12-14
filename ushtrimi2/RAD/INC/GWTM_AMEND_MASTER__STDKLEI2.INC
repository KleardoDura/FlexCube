DELETE GWTM_AMEND_MASTER A  WHERE A.EXT_SYSTEM = 'FLEXCUBE' AND RAD_FUNCTION_ID = 'STDKLEI2' ;
INSERT INTO GWTM_AMEND_MASTER(EXT_SYSTEM,SOURCE_OPERATION,SERVICE_NAME,OPERATION_CODE,MAKER_ID,CHECKER_ID,MAKER_DT_STAMP,CHECKER_DT_STAMP,ONCE_AUTH,AUTH_STAT,RECORD_STAT,MOD_NO,RAD_FUNCTION_ID,ORIGIN_SYSTEM) VALUES(
'FLEXCUBE',
'STDKLEI2_EXECUTEQUERY',
'STDKLEI2',
'STDKLEI2_EXECUTEQUERY',
'RADTOOL',
'RADTOOL',
TO_DATE('09/07/2022' ,'MM/DD/RRRR'),
TO_DATE('09/07/2022' ,'MM/DD/RRRR'),
'Y',
'A',
'O',
1,
'STDKLEI2',
'FLEXCUBE');
INSERT INTO GWTM_AMEND_MASTER(EXT_SYSTEM,SOURCE_OPERATION,SERVICE_NAME,OPERATION_CODE,MAKER_ID,CHECKER_ID,MAKER_DT_STAMP,CHECKER_DT_STAMP,ONCE_AUTH,AUTH_STAT,RECORD_STAT,MOD_NO,RAD_FUNCTION_ID,ORIGIN_SYSTEM) VALUES(
'FLEXCUBE',
'STDKLEI2_NEW',
'STDKLEI2',
'STDKLEI2_NEW',
'RADTOOL',
'RADTOOL',
TO_DATE('09/07/2022' ,'MM/DD/RRRR'),
TO_DATE('09/07/2022' ,'MM/DD/RRRR'),
'Y',
'A',
'O',
1,
'STDKLEI2',
'FLEXCUBE');
INSERT INTO GWTM_AMEND_MASTER(EXT_SYSTEM,SOURCE_OPERATION,SERVICE_NAME,OPERATION_CODE,MAKER_ID,CHECKER_ID,MAKER_DT_STAMP,CHECKER_DT_STAMP,ONCE_AUTH,AUTH_STAT,RECORD_STAT,MOD_NO,RAD_FUNCTION_ID,ORIGIN_SYSTEM) VALUES(
'FLEXCUBE',
'STDKLEI2_MODIFY',
'STDKLEI2',
'STDKLEI2_MODIFY',
'RADTOOL',
'RADTOOL',
TO_DATE('09/07/2022' ,'MM/DD/RRRR'),
TO_DATE('09/07/2022' ,'MM/DD/RRRR'),
'Y',
'A',
'O',
1,
'STDKLEI2',
'FLEXCUBE');
COMMIT;