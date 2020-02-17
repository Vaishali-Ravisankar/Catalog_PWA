import * as ActionUrls from '../Constants/ActionUrls';
import 'react-toastify/dist/ReactToastify.min.css' 
import { AxiosWithPost } from '../Actions/AxiosCalls';
import {ShowNotification} from '../Helper';

/* Sample Actions*/

// export  function getRoles(Payload){
//     return(dispatch) =>{
//         var url=ActionUrls.getRolesurl;
//         var successCallback = (function (response){
//             dispatch(setRoles(response.data));
//         })
//         var failureCallback=(function(response){
//             ShowNotification("E",response);
//         })
//         AxiosWithPost(url,Payload,successCallback,failureCallback);
//     }
// }

//  export const setRoles=(data)=>{
//     return dispatch=>{dispatch({
//          type:"SET_ROLES",
//          payload:data,

//      })}
//  }
