DELETE CSTB_SUMMARY_INFO A  WHERE A.FUNCTION_ID = 'STSKLEI2' ;
INSERT INTO CSTB_SUMMARY_INFO(FUNCTION_ID,SUMMARY_QUERY,TANKED_SUMMARY_QUERY,FIELD_LIST,COLUMN_LIST,DATATYPE_LIST,MULTIBRN_SUMMARY_QUERY,TANKED_MULTIBRN_SUMMARY_QUERY) VALUES(
'STSKLEI2',
'SELECT AUTH_STAT AS AUTHSTAT,RECORD_STAT AS TXNSTAT,RELATIONSHIP AS RELATIONSHIP,PRODUCT_RESTRICTION AS PRODUCT_RESTRICTION,DESCRIPTION AS DESCRIPTION,CATEGORY AS CATEGORY FROM STTM_KLEI2 SUMMARYDSN',
'SELECT AUTH_STAT AS AUTHSTAT,RECORD_STAT AS TXNSTAT,CHAR_FLD_1 AS RELATIONSHIP,CHAR_FLD_2 AS PRODUCT_RESTRICTION,CHAR_FLD_3 AS DESCRIPTION,CHAR_FLD_4 AS CATEGORY FROM  STTB_RECORD_MASTER  SUMMARYDSN WHERE FUNCTION_ID = ''STDKLEI2''',
'AUTHSTAT~TXNSTAT~RELATIONSHIP~PRODUCT_RESTRICTION~DESCRIPTION~CATEGORY~',
'AUTH_STAT~RECORD_STAT~RELATIONSHIP~PRODUCT_RESTRICTION~DESCRIPTION~CATEGORY~',
'VARCHAR2~VARCHAR2~VARCHAR2~VARCHAR2~VARCHAR2~VARCHAR2~',
'SELECT AUTH_STAT AS AUTHSTAT,RECORD_STAT AS TXNSTAT,RELATIONSHIP AS RELATIONSHIP,PRODUCT_RESTRICTION AS PRODUCT_RESTRICTION,DESCRIPTION AS DESCRIPTION,CATEGORY AS CATEGORY FROM STTM_KLEI2 SUMMARYDSN',
'SELECT AUTH_STAT AS AUTHSTAT,RECORD_STAT AS TXNSTAT,CHAR_FLD_1 AS RELATIONSHIP,CHAR_FLD_2 AS PRODUCT_RESTRICTION,CHAR_FLD_3 AS DESCRIPTION,CHAR_FLD_4 AS CATEGORY FROM  STTB_RECORD_MASTER SUMMARYDSN WHERE FUNCTION_ID = ''STDKLEI2''');
COMMIT;