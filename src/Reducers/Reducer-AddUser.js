const initialState={
    simulatechat:null,
};
 
const chatSimulateReducer = (state=initialState,action)=>{
    switch(action.type){
        case 'SIMULATE_CHAT':
        return{
            ...state,
            simulatechat:action.payload
        }
        default:
        return state
    }
};
 
export default chatSimulateReducer;