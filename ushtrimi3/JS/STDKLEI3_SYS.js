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
**  File Name          : STDKLEI3_SYS.js
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
var criteriaSearch  = '';
//----------------------------------------------------------------------------------------------------------------------
//***** FCJ XML FOR THE SCREEN *****
//----------------------------------------------------------------------------------------------------------------------
var fieldNameArray = {"BLK_KLEI3":"CUSTOMER_CATEGORY~CUSTOMER_TYPE~MAKER~MAKERSTAMP~CHECKER~CHECKERSTAMP~MODNO~TXNSTAT~AUTHSTAT~ONCEAUTH","BLK_KLEI3_DETAILS":"CUSTOMER_CATEGORY~CUSTOMER_TYPE~FIELD_DESCRIPTION~MANDATORY_VALIDATIONS"};

var multipleEntryPageSize = {"BLK_KLEI3_DETAILS" :"15" };

var multipleEntrySVBlocks = "";

var tabMEBlks = {"CVS_KLEI3__TAB_MAIN":"BLK_KLEI3_DETAILS"};

var msgxml=""; 
msgxml += '    <FLD>'; 
msgxml += '      <FN PARENT="" RELATION_TYPE="1" TYPE="BLK_KLEI3">CUSTOMER_CATEGORY~CUSTOMER_TYPE~MAKER~MAKERSTAMP~CHECKER~CHECKERSTAMP~MODNO~TXNSTAT~AUTHSTAT~ONCEAUTH</FN>'; 
msgxml += '      <FN PARENT="BLK_KLEI3" RELATION_TYPE="N" TYPE="BLK_KLEI3_DETAILS">CUSTOMER_CATEGORY~CUSTOMER_TYPE~FIELD_DESCRIPTION~MANDATORY_VALIDATIONS</FN>'; 
msgxml += '    </FLD>'; 

var strScreenName = "CVS_KLEI3";
var qryReqd = "Y";
var txnBranchFld = "" ;
var originSystem = "";
//----------------------------------------------------------------------------------------------------------------------
//***** CODE FOR DATABINDING *****
//----------------------------------------------------------------------------------------------------------------------
 var relationArray = {"BLK_KLEI3" : "","BLK_KLEI3_DETAILS" : "BLK_KLEI3~N"}; 

 var dataSrcLocationArray = new Array("BLK_KLEI3","BLK_KLEI3_DETAILS"); 
 // Array of all Data Sources used in the screen 
//----------------------------------------------------------------------------------------------------------------------
//***** CODE FOR QUERY MODE *****
//----------------------------------------------------------------------------------------------------------------------
var detailRequired = true ;
var intCurrentQueryResultIndex = 0;
var intCurrentQueryRecordCount = 0;

var queryFields = new Array();    //Values should be set inside STDKLEI3.js, in "BlockName__FieldName" format
var pkFields    = new Array();    //Values should be set inside STDKLEI3.js, in "BlockName__FieldName" format
queryFields[0] = "BLK_KLEI3__CUSTOMER_TYPE";
pkFields[0] = "BLK_KLEI3__CUSTOMER_TYPE";
queryFields[1] = "BLK_KLEI3__CUSTOMER_CATEGORY";
pkFields[1] = "BLK_KLEI3__CUSTOMER_CATEGORY";
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
//***** Fields Amendable while Query *****
var queryAmendArr = {"BLK_KLEI3":["BTN_KLEARDO_POPULATE"]};
var authorizeAmendArr = new Array(); 
//----------------------------------------------------------------------------------------------------------------------

var subsysArr    = new Array(); 

//----------------------------------------------------------------------------------------------------------------------

//***** CODE FOR LOVs *****
//----------------------------------------------------------------------------------------------------------------------
var lovInfoFlds = {"BLK_KLEI3__CUSTOMER_CATEGORY__LOV_KLEARDO_CUSTOMER_CATEGORY":["BLK_KLEI3__CUSTOMER_CATEGORY~","","N",""]};
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
var multipleEntryIDs = new Array("BLK_KLEI3_DETAILS");
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

ArrFuncOrigin["STDKLEI3"]="CUSTOM";
ArrPrntFunc["STDKLEI3"]="";
ArrPrntOrigin["STDKLEI3"]="";
ArrRoutingType["STDKLEI3"]="X";


 // Code for Loading Cluster/Custom js File Starts
ArrClusterModified["STDKLEI3"]="N";
ArrCustomModified["STDKLEI3"]="Y";

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
var actStageArry = {"QUERY":"2","NEW":"2","MODIFY":"2","AUTHORIZE":"1","DELETE":"1","CLOSE":"1","REOPEN":"1","REVERSE":"1","ROLLOVER":"1","CONFIRM":"1","LIQUIDATE":"1","SUMMARYQUERY":"2"};
//***** CODE FOR IMAGE FLDSET *****
//----------------------------------------------------------------------------------------------------------------------