import {ToastContainer,toast,Slide,Zoom,Flip,Bounce} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css' ;
import React from 'react';

export function ShowNotification(type,msg) {
    switch(type){
        case 'S':
            toast.success(msg);
            break;
        case 'W':
            toast.warn(msg);
            break;
        case 'E':
            toast.error(msg);
            break;
        default :
            toast(msg);
            break;
    }
}

export function getPermissions(userPage) {

    const permissions = userPage && userPage[0]  && userPage[0].permissions && userPage[0].permissions.map((permission,i) => {
        return permission.permissionName;
    })
    return permissions;
}

export function getExtractedData(reviewData, selectedFileName) {    

    const filteredReviewData = reviewData && reviewData.filter(reviewData => reviewData.fileName === selectedFileName);
   
    const extractedData = filteredReviewData && filteredReviewData[0] &&  JSON.parse(filteredReviewData[0].extractedData);

    return extractedData;
}

export function getModifiedTaggingData(initialValue, resp) {
    if(resp){
        const modifiedTagging = initialValue.map((initial, index) => {  
            if(initial.toLowerCase() !== resp.toLowerCase()){
              return (
                <option key ={index} value={initial}>
                    {initial}
                </option>
              )
            }
        })
        return modifiedTagging;
    }
    else{
        const initialTagging = initialValue.map((initial, index) => {
              return (
                <option key ={index} value={initial}>
                  {initial}
                </option>
              )
        })
        return initialTagging;
    }
}