import axios from 'axios';

function CSRFGenarator(Method){
    if(sessionStorage.csrfToken != null || sessionStorage.csrfToken!=undefined && Method !='GET'){
        return{
            'X-CSRF-Token':sessionStorage.csrfToken,
        }
    }
}


export function AxiosWithPost(Url,Entity,SuccessCallback,FailureCallback) {
    axios({
    method: 'post',
    url: Url,
    data: Entity,
    dataType:'application/json',
    headers : CSRFGenarator('POST')
    // headers: {'Content-Type': 'application/json' }
    })
    .then(function (response) {
        //handle success
        SuccessCallback(response);
    })
    .catch(function (response) {
        //handle error
        FailureCallback(response);
    });
}

export function AxiosWithGet(Url,SuccessCallback,FailureCallback) {
    axios({
    method: 'get',
    url: Url,
   // data: Entity,
    dataType:'json',
    //config: { headers: {'Content-Type': 'multipart/form-data' }}
    })
    .then(function (response) {
        //handle success
        SuccessCallback(response);
    })
    .catch(function (response) {
        //handle error
        FailureCallback(response);
    });
}

