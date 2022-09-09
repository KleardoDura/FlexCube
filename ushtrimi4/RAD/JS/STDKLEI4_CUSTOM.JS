function fnPostNew_CUSTOM()
{
clicked = true;
appendData();
debugs('FCZ Start',gAction);
var prevgAction=gAction;
gAction='POPULATE1'; 
fcjRequestDOM=buildUBSXml();
debugs('FCZ',fcjRequestDOM);
fcjResponseDOM=fnPost(fcjRequestDOM,servletURL,functionId);
debugs('FCZ req',fcjRequestDOM);
debugs('FCZ resp',fcjResponseDOM);
//if (!fnProcessResponse())
//{
//return true;
//}
if(fcjResponseDOM) 
  		var msgStatus   =getNodeText( selectSingleNode(fcjResponseDOM,"FCUBS_RES_ENV/FCUBS_HEADER/MSGSTAT"));
		if (msgStatus == 'FAILURE') 
		{
			var messageNode = selectSingleNode(fcjResponseDOM,"FCUBS_RES_ENV/FCUBS_BODY/FCUBS_ERROR_RESP");
		}
		else if (msgStatus == "WARNING" ||msgStatus == "SUCCESS" )       
		{
			var messageNode = selectSingleNode(fcjResponseDOM,"FCUBS_RES_ENV/FCUBS_BODY/FCUBS_WARNING_RESP");

		} 
debugs('FCZ final',fcjResponseDOM);
var prevshowProcessMsg=showProcessMsg;
showProcessMsg = true;
 if(!fnProcessResponse()){              
		gAction = g_prevAction;
		showProcessMsg = prevshowProcessMsg;
        return false;
    }	
gAction=prevgAction;
showProcessMsg = prevshowProcessMsg;
return true;
}

 
var ref;

 function fnPreCopy_CUSTOM(){
 
	 ref=document.getElementById('BLK_KLEI4__REFERENCE').value;
   return true;
 }

function  fnPostCopy_CUSTOM(){
    document.getElementById('BLK_KLEI4__REFERENCE').value=ref+"C";
	 	return true;
 }
