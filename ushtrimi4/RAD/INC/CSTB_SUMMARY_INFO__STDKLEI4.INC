DELETE CSTB_SUMMARY_INFO A  WHERE A.FUNCTION_ID = 'STSKLEI4' ;
INSERT INTO CSTB_SUMMARY_INFO(FUNCTION_ID,SUMMARY_QUERY,TANKED_SUMMARY_QUERY,FIELD_LIST,COLUMN_LIST,DATATYPE_LIST,MULTIBRN_SUMMARY_QUERY,TANKED_MULTIBRN_SUMMARY_QUERY) VALUES(
'STSKLEI4',
'SELECT AUTH_STAT AS AUTHSTAT,RECORD_STAT AS TXNSTAT,REFERENCE AS REFERENCE,DESCRIPTION AS DESCRIPTION,CUSTOMER_NO AS CUSTOMER_NO,CUSTOMER_NAME AS CUSTOMER_NAME,PHONE_NO AS PHONE_NO,E_MAIL AS E_MAIL,DATE1 AS DATE,AMOUNT AS AMOUNT,PRIORITY AS PRIORITY,CCY AS CCY,ACC_NO AS ACCOUNT FROM STTM_KLEI4 SUMMARYDSN',
'SELECT AUTH_STAT AS AUTHSTAT,RECORD_STAT AS TXNSTAT,CHAR_FLD_1 AS REFERENCE,CHAR_FLD_2 AS DESCRIPTION,CHAR_FLD_3 AS CUSTOMER_NO,CHAR_FLD_4 AS CUSTOMER_NAME,CHAR_FLD_5 AS PHONE_NO,CHAR_FLD_6 AS E_MAIL,DATE_FLD_1 AS DATE,NUM_FLD_1 AS AMOUNT,CHAR_FLD_7 AS PRIORITY,CHAR_FLD_8 AS CCY,CHAR_FLD_9 AS ACCOUNT FROM  STTB_RECORD_MASTER  SUMMARYDSN WHERE FUNCTION_ID = ''STDKLEI4''',
'AUTHSTAT~TXNSTAT~REFERENCE~DESCRIPTION~CUSTOMER_NO~CUSTOMER_NAME~PHONE_NO~E_MAIL~DATE~AMOUNT~PRIORITY~CCY~ACCOUNT~',
'AUTH_STAT~RECORD_STAT~REFERENCE~DESCRIPTION~CUSTOMER_NO~CUSTOMER_NAME~PHONE_NO~E_MAIL~DATE1~AMOUNT~PRIORITY~CCY~ACC_NO~',
'VARCHAR2~VARCHAR2~VARCHAR2~VARCHAR2~VARCHAR2~VARCHAR2~VARCHAR2~VARCHAR2~DATE~NUMBER~VARCHAR2~VARCHAR2~VARCHAR2~',
'SELECT AUTH_STAT AS AUTHSTAT,RECORD_STAT AS TXNSTAT,REFERENCE AS REFERENCE,DESCRIPTION AS DESCRIPTION,CUSTOMER_NO AS CUSTOMER_NO,CUSTOMER_NAME AS CUSTOMER_NAME,PHONE_NO AS PHONE_NO,E_MAIL AS E_MAIL,DATE1 AS DATE,AMOUNT AS AMOUNT,PRIORITY AS PRIORITY,CCY AS CCY,ACC_NO AS ACCOUNT FROM STTM_KLEI4 SUMMARYDSN',
'SELECT AUTH_STAT AS AUTHSTAT,RECORD_STAT AS TXNSTAT,CHAR_FLD_1 AS REFERENCE,CHAR_FLD_2 AS DESCRIPTION,CHAR_FLD_3 AS CUSTOMER_NO,CHAR_FLD_4 AS CUSTOMER_NAME,CHAR_FLD_5 AS PHONE_NO,CHAR_FLD_6 AS E_MAIL,DATE_FLD_1 AS DATE,NUM_FLD_1 AS AMOUNT,CHAR_FLD_7 AS PRIORITY,CHAR_FLD_8 AS CCY,CHAR_FLD_9 AS ACCOUNT FROM  STTB_RECORD_MASTER SUMMARYDSN WHERE FUNCTION_ID = ''STDKLEI4''');
COMMIT;