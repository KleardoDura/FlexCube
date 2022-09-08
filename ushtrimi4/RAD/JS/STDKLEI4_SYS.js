/***************************************************************************************************************************
**  This source is part of the FLEXCUBE Software Product. 
**  Copyright (c) 2008 ,2022, Oracle and/or its affiliates.
**  All rights reserved.
**  
**  No part of this work may be reproduced, stored in a retrieval system, 
**  adopted or transmitted in any form or by any means, electronic, mechanical, photographic, 
**  graphic, optic recording or otherwise, translated in any language or computer language, 
**  without the prior written permission of Oracle and/or its affiliates.
**  
**  Oracle Financial Services Software Limited.
**  Oracle Park, Off Western Express Highway,
**  Goregaon (East),
**  Mumbai - 400 063,
**  India.
**  
**  Written by         : 
**  Date of creation   : 
**  File Name          : STDKLEI4_SYS.js
**  Purpose            : 
**  Called From        : 
**  
**  CHANGE LOG
**  Last Modified By   : 
**  Last modified on   : 
**  Full Version       : 
**  Reason             : 
****************************************************************************************************************************/

//***** Code for criteria Search *****
var criteriaSearch  = 'N';
//----------------------------------------------------------------------------------------------------------------------
//***** FCJ XML FOR THE SCREEN *****
//----------------------------------------------------------------------------------------------------------------------
var fieldNameArray = {"BLK_KLEI4":"ACCOUNT~AMOUNT~CCY~CUSTOMER_NAME~CUSTOMER_NO~DATE~DESCRIPTION~E_MAIL~PHONE_NO~PRIORITY~REFERENCE~MAKER~MAKERSTAMP~CHECKER~CHECKERSTAMP~MODNO~TXNSTAT~AUTHSTAT~ONCEAUTH","BLK_KLEI4_DETAILS":"DATE~DESCRIPTION~ID~REFERENCE~SUBJECT~USER_ID"};

var multipleEntryPageSize = {"BLK_KLEI4_DETAILS" :"15" };

var multipleEntrySVBlocks = "";

var tabMEBlks = {"CVS_KLEI4__TAB_DETAILS":"BLK_KLEI4_DETAILS"};

var msgxml=""; 
msgxml += '    <FLD>'; 
msgxml += '      <FN PARENT="" RELATION_TYPE="1" TYPE="BLK_KLEI4">ACCOUNT~AMOUNT~CCY~CUSTOMER_NAME~CUSTOMER_NO~DATE~DESCRIPTION~E_MAIL~PHONE_NO~PRIORITY~REFERENCE~MAKER~MAKERSTAMP~CHECKER~CHECKERSTAMP~MODNO~TXNSTAT~AUTHSTAT~ONCEAUTH</FN>'; 
msgxml += '      <FN PARENT="" RELATION_TYPE="N" TYPE="BLK_KLEI4_DETAILS">DATE~DESCRIPTION~ID~REFERENCE~SUBJECT~USER_ID</FN>'; 
msgxml += '    </FLD>'; 

var strScreenName = "CVS_KLEI4";
var qryReqd = "Y";
var txnBranchFld = "" ;
var originSystem = "";
//----------------------------------------------------------------------------------------------------------------------

//----------------------------------------------------------------------------------------------------------------------
//***** FCJ XML FOR SUMMARY SCREEN *****
//----------------------------------------------------------------------------------------------------------------------
var msgxml_sum=""; 
msgxml_sum += '    <FLD>'; 
msgxml_sum += '      <FN PARENT="" RELATION_TYPE="1" TYPE="BLK_KLEI4">AUTHSTAT~TXNSTAT~REFERENCE~DESCRIPTION~CUSTOMER_NO~CUSTOMER_NAME~PHONE_NO~E_MAIL~DATE~AMOUNT~PRIORITY~CCY~ACCOUNT</FN>'; 
msgxml_sum += '    </FLD>'; 

var detailFuncId = "STDKLEI4";
var defaultWhereClause = "";
var defaultOrderByClause ="";
var multiBrnWhereClause ="";
var g_SummaryType ="S";
var g_SummaryBtnCount =0;
var g_SummaryBlock ="BLK_KLEI4";
//----------------------------------------------------------------------------------------------------------------------
//***** CODE FOR DATABINDING *****
//----------------------------------------------------------------------------------------------------------------------
 var relationArray = {"BLK_KLEI4" : "","BLK_KLEI4_DETAILS" : ""}; 

 var dataSrcLocationArray = new Array("BLK_KLEI4","BLK_KLEI4_DETAILS"); 
 // Array of all Data Sources used in the screen 
//----------------------------------------------------------------------------------------------------------------------
//***** CODE FOR QUERY MODE *****
//----------------------------------------------------------------------------------------------------------------------
var detailRequired = true ;
var intCurrentQueryResultIndex = 0;
var intCurrentQueryRecordCount = 0;

var queryFields = new Array();    //Values should be set inside STDKLEI4.js, in "BlockName__FieldName" format
var pkFields    = new Array();    //Values should be set inside STDKLEI4.js, in "BlockName__FieldName" format
queryFields[0] = "BLK_KLEI4__REFERENCE";
pkFields[0] = "BLK_KLEI4__REFERENCE";
//----------------------------------------------------------------------------------------------------------------------
//***** CODE FOR AMENDABLE/SUBSYSTEM Fields *****
//----------------------------------------------------------------------------------------------------------------------
var modifyAmendArr = new Array(); 
var closeAmendArr = new Array(); 
var reopenAmendArr = new Array(); 
var reverseAmendArr = new Array(); 
var deleteAmendArr = new Array(); 
var rolloverAmendArr = new Array(); 
var confirmAmendArr = new Array(); 
var liquidateAmendArr = new Array(); 
var queryAmendArr = new Array(); 
var authorizeAmendArr = new Array(); 
//----------------------------------------------------------------------------------------------------------------------

var subsysArr    = new Array(); 

//----------------------------------------------------------------------------------------------------------------------

//***** CODE FOR LOVs *****
//----------------------------------------------------------------------------------------------------------------------
var lovInfoFlds = {"BLK_KLEI4__ACCOUNT__LOV_KLEI_ACC":["BLK_KLEI4__ACCOUNT~","BLK_KLEI4__CCY!VARCHAR2~BLK_KLEI4__CUSTOMER_NO!VARCHAR2","N",""],"BLK_KLEI4__CCY__LOV_KLEI_CCY":["BLK_KLEI4__CCY~","BLK_KLEI4__CUSTOMER_NO!VARCHAR2","N",""],"BLK_KLEI4__CUSTOMER_NO__LOV_KLEI_CUSTOMER_NO":["BLK_KLEI4__CUSTOMER_NO~BLK_KLEI4__CUSTOMER_NAME~BLK_KLEI4__PHONE_NO~BLK_KLEI4__E_MAIL~","","N~N~N~N",""]};
var offlineLovInfoFlds = {};
//----------------------------------------------------------------------------------------------------------------------
//***** SCRIPT FOR TABS *****
//----------------------------------------------------------------------------------------------------------------------
var strHeaderTabId = 'TAB_HEADER';
var strFooterTabId = 'TAB_FOOTER';
var strCurrentTabId = 'TAB_MAIN';
//--------------------------------------------
//----------------------------------------------------------------------------------------------------------------------
//***** SCRIPT FOR MULTIPLE ENTRY BLOCKS *****
//----------------------------------------------------------------------------------------------------------------------
var multipleEntryIDs = new Array("BLK_KLEI4_DETAILS");
var multipleEntryArray = new Array();
var multipleEntryCells = new Array();
//----------------------------------------------------------------------------------------------------------------------
//***** SCRIPT FOR MULTIPLE ENTRY VIEW SINGLE ENTRY BLOCKS *****
//----------------------------------------------------------------------------------------------------------------------

//----------------------------------------------------------------------------------------------------------------------
//***** SCRIPT FOR ATTACHED CALLFORMS *****
 //----------------------------------------------------------------------------------------------------------------------

 var CallFormArray= new Array(); 

 var CallFormRelat=new Array(); 

 var CallRelatType= new Array(); 


 var ArrFuncOrigin=new Array();
 var ArrPrntFunc=new Array();
 var ArrPrntOrigin=new Array();
 var ArrRoutingType=new Array();


 // Code for Loading Cluster/Custom js File Starts
 var ArrClusterModified=new Array();
 var ArrCustomModified=new Array();
 // Code for Loading Cluster/Custom js File ends

ArrFuncOrigin["STDKLEI4"]="CUSTOM";
ArrPrntFunc["STDKLEI4"]="";
ArrPrntOrigin["STDKLEI4"]="";
ArrRoutingType["STDKLEI4"]="X";


 // Code for Loading Cluster/Custom js File Starts
ArrClusterModified["STDKLEI4"]="N";
ArrCustomModified["STDKLEI4"]="Y";

 // Code for Loading Cluster/Custom js File ends


 /* Code For OBIEE functionalities */ 
var obScrArgName  = new Array(); 
var obScrArgSource  = new Array(); 
//***** CODE FOR SCREEN ARGS *****
//----------------------------------------------------------------------------------------------------------------------
var scrArgName = {};
var scrArgSource = {};
var scrArgVals = {};
var scrArgDest = {};
//***** CODE FOR SUB-SYSTEM DEPENDENT  FIELDS   *****
//----------------------------------------------------------------------------------------------------------------------
var dpndntOnFlds = {};
var dpndntOnSrvs = {};
//***** CODE FOR TAB DEPENDENT  FIELDS   *****
//----------------------------------------------------------------------------------------------------------------------
//***** CODE FOR CALLFORM TABS *****
//----------------------------------------------------------------------------------------------------------------------
var callformTabArray = new Array(); 
//***** CODE FOR ACTION STAGE DETAILS *****
//----------------------------------------------------------------------------------------------------------------------
var actStageArry = {};
//***** CODE FOR IMAGE FLDSET *****
//----------------------------------------------------------------------------------------------------------------------