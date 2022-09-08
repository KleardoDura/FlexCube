CREATE OR REPLACE PACKAGE  stpks_stdklei4_main AS
  /*-----------------------------------------------------------------------------------------------------
  **
  ** File Name  : stpks_stdklei4_main.spc
  **
  ** Module     : Static Maintenance
  ** 
  ** This source is part of the Oracle FLEXCUBE Software Product.
  ** Copyright (R) 2008,2022 , Oracle and/or its affiliates.  All rights reserved
  ** 
  ** 
  ** No part of this work may be reproduced, stored in a retrieval system, adopted 
  ** or transmitted in any form or by any means, electronic, mechanical, 
  ** photographic, graphic, optic recording or otherwise, translated in any 
  ** language or computer language, without the prior written permission of 
  ** Oracle and/or its affiliates. 
  ** 
  ** Oracle Financial Services Software Limited.
  ** Oracle Park, Off Western Express Highway,
  ** Goregaon (East), 
  ** Mumbai - 400 063, India
  ** India
  -------------------------------------------------------------------------------------------------------
  CHANGE HISTORY
  
  SFR Number         :  
  Changed By         :  
  Change Description :  
  
  -------------------------------------------------------------------------------------------------------
  */
  
  
TYPE ty_tb_v_sttm_klei4_details IS TABLE OF sttm_klei4_details%ROWTYPE INDEX BY BINARY_INTEGER;

TYPE ty_stdklei4 IS RECORD (
     v_sttm_klei4     sttm_klei4%ROWTYPE,
     v_sttm_klei4_details    ty_tb_v_sttm_klei4_details,
                 Desc_Fields    Cspks_Req_Global.Ty_Tb_Xml_Data,
                 Addl_Info    Cspks_Req_Global.Ty_Addl_info );

FUNCTION  Fn_Get_Curr_Stage RETURN VARCHAR2 ;
FUNCTION  Fn_Get_Tanked_Stat RETURN VARCHAR2 ;
PROCEDURE Pr_Set_Skip_Sys;
PROCEDURE Pr_Set_Activate_Sys;
FUNCTION  Fn_Skip_Sys RETURN BOOLEAN;
PROCEDURE Pr_Set_Skip_Custom;
PROCEDURE Pr_Set_Activate_Custom;
FUNCTION  Fn_Skip_Custom RETURN BOOLEAN;
FUNCTION Fn_Sys_Query_Desc_Fields  ( p_Source    IN     VARCHAR2,
                        p_Source_Operation  IN     VARCHAR2,
                        p_Function_Id       IN     VARCHAR2,
                        p_Action_Code       IN     VARCHAR2,
                        p_Wrk_stdklei4  IN   OUT stpks_stdklei4_Main.ty_stdklei4,
                        p_Err_Code          IN OUT VARCHAR2,
                        p_Err_Params        IN OUT VARCHAR2)
RETURN BOOLEAN;
FUNCTION Fn_Populate_Record_Master (p_Source            IN     VARCHAR2,
                        p_Source_Operation  IN     VARCHAR2,
                        p_Function_Id       IN     VARCHAR2,
                        p_Action_Code       IN     VARCHAR2,
                        p_stdklei4          IN  stpks_stdklei4_Main.Ty_stdklei4,
                        p_Record_Master     IN OUT Sttbs_Record_Master%ROWTYPE,
                        p_Err_Code          IN OUT VARCHAR2,
                        p_Err_Params        IN OUT VARCHAR2)
RETURN BOOLEAN ;

FUNCTION Fn_Get_Key_Information (p_Source    IN  VARCHAR2, 
                        p_Source_Operation  IN     VARCHAR2,
                        p_Function_id       IN     VARCHAR2,
                        p_Action_Code       IN     VARCHAR2,
p_stdklei4       IN  OUT stpks_stdklei4_Main.Ty_stdklei4,
p_Err_Code          IN OUT VARCHAR2,
p_Err_Params        IN OUT VARCHAR2)
RETURN BOOLEAN;

FUNCTION Fn_Extract_Custom_Data (p_Source    IN     VARCHAR2,
                        p_Source_Operation  IN     VARCHAR2,
                        p_Function_Id       IN     VARCHAR2,
                        p_Action_Code       IN     VARCHAR2,
                        p_Addl_Info         IN OUT Cspks_Req_Global.Ty_Addl_Info,
                        p_Status            IN OUT VARCHAR2 ,
                        p_Err_Code          IN OUT VARCHAR2,
                        p_Err_Params        IN OUT VARCHAR2)
RETURN BOOLEAN ; 
FUNCTION Fn_Rebuild_Ts_List (p_Source    IN     VARCHAR2,
                        p_Source_Operation  IN     VARCHAR2,
                        p_Function_Id       IN     VARCHAR2,
                        p_Action_Code       IN     VARCHAR2,
                        p_exchange_pattern  IN     VARCHAR2,
                        p_Status            IN OUT VARCHAR2 ,
                        p_Err_Code          IN OUT VARCHAR2,
                        p_Err_Params        IN OUT VARCHAR2)
RETURN BOOLEAN;
FUNCTION Fn_Int_Main    (p_Source            IN     VARCHAR2,
                        p_Source_Operation  IN     VARCHAR2,
                        p_Function_Id       IN     VARCHAR2,
                        p_Action_Code       IN     VARCHAR2,
                        p_Multi_Trip_Id     IN     VARCHAR2,
                        p_Request_No        IN     VARCHAR2,
                        p_stdklei4          IN OUT  stpks_stdklei4_Main.ty_stdklei4,
                        p_Status            IN OUT VARCHAR2 ,
                        p_Err_Code          IN OUT VARCHAR2,
                        p_Err_Params        IN OUT VARCHAR2)
RETURN BOOLEAN ; 

FUNCTION Fn_main       (p_source            IN     VARCHAR2,
                        p_Source_Operation  IN     VARCHAR2,
                        p_Function_Id       IN     VARCHAR2,
                        p_Action_Code       IN     VARCHAR2,
                        p_Multi_Trip_Id     IN     VARCHAR2,
                        p_Request_No        IN     VARCHAR2,
                        p_stdklei4          IN OUT  stpks_stdklei4_Main.ty_stdklei4,
                        p_Status            IN OUT VARCHAR2 ,
                        p_Err_Code          IN OUT VARCHAR2,
                        p_Err_Params        IN OUT VARCHAR2)
RETURN BOOLEAN ; 


FUNCTION Fn_Process_Request (p_source    IN     VARCHAR2,
                        p_Source_Operation  IN     VARCHAR2,
                        p_Function_Id       IN     VARCHAR2,
                        p_Action_Code       IN     VARCHAR2,
                        p_Exchange_Pattern  IN     VARCHAR2,
                        p_Multi_Trip_Id     IN     VARCHAR2,
                        p_Request_No        IN     VARCHAR2,
                        p_Addl_Info         IN OUT Cspks_Req_Global.Ty_Addl_Info,
                        p_Status            IN OUT VARCHAR2 ,
                        p_Err_Code          IN OUT VARCHAR2,
                        p_Err_Params        IN OUT VARCHAR2)
RETURN BOOLEAN;

FUNCTION Fn_Get_Node_Data ( 
p_Node_Data         IN OUT Cspks_Req_Global.Ty_Tb_Chr_Node_Data,
p_Err_Code          IN OUT VARCHAR2,
p_Err_Params        IN OUT VARCHAR2)
RETURN BOOLEAN;
END stpks_stdklei4_main;
/
CREATE OR REPLACE SYNONYM stpkss_stdklei4_main FOR stpks_stdklei4_main
/